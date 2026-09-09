"use client";

import { useEffect, useRef } from "react";
import { geoOrthographic, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Geometry } from "geojson";

const SVG_NS = "http://www.w3.org/2000/svg";

const MARKERS = [
  { id: "792", name: "Turkey", coord: [35.2, 39.0] as [number, number] },
  { id: "804", name: "Ukraine", coord: [31.2, 48.9] as [number, number] },
  { id: "031", name: "Azerbaijan", coord: [47.6, 40.3] as [number, number] },
];
const HIGHLIGHTED: Record<string, boolean> = { "792": true, "804": true, "031": true };

export default function WorldMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let raf = 0;

    const size = 420;
    const projection = geoOrthographic()
      .scale(size / 2.1)
      .translate([size / 2, size / 2])
      .clipAngle(90)
      .rotate([-40, -25]);
    const path = geoPath(projection);

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.style.cursor = "grab";
    container.appendChild(svg);

    const backdrop = document.createElementNS(SVG_NS, "circle");
    backdrop.setAttribute("cx", String(size / 2));
    backdrop.setAttribute("cy", String(size / 2));
    backdrop.setAttribute("r", String(size / 2.1));
    backdrop.setAttribute("fill", "#0C0C0C");
    backdrop.setAttribute("stroke", "rgba(255,255,255,0.12)");
    svg.appendChild(backdrop);

    const graticule = geoGraticule10();
    const graticulePath = document.createElementNS(SVG_NS, "path");
    graticulePath.setAttribute("fill", "none");
    graticulePath.setAttribute("stroke", "rgba(255,255,255,0.06)");
    graticulePath.setAttribute("stroke-width", "0.5");
    svg.appendChild(graticulePath);

    const countryLayer = document.createElementNS(SVG_NS, "g");
    svg.appendChild(countryLayer);
    const labelLayer = document.createElementNS(SVG_NS, "g");
    svg.appendChild(labelLayer);

    let countryPaths: SVGPathElement[] = [];
    const markerEls = MARKERS.map((m) => {
      const g = document.createElementNS(SVG_NS, "g");
      const circle = document.createElementNS(SVG_NS, "circle");
      circle.setAttribute("r", "4");
      circle.setAttribute("fill", "#FF6B1A");
      circle.setAttribute("stroke", "#050505");
      circle.setAttribute("stroke-width", "1.5");
      const text = document.createElementNS(SVG_NS, "text");
      text.setAttribute("x", "8");
      text.setAttribute("y", "4");
      text.setAttribute("font-family", "'JetBrains Mono', monospace");
      text.setAttribute("font-size", "12");
      text.setAttribute("font-weight", "600");
      text.setAttribute("fill", "#F4F1EC");
      text.textContent = m.name;
      g.appendChild(circle);
      g.appendChild(text);
      return { marker: m, g };
    });

    function isVisible(coord: [number, number]) {
      const centerRotate = projection.rotate();
      const lambda = (-centerRotate[0] * Math.PI) / 180;
      const phi = (-centerRotate[1] * Math.PI) / 180;
      const lc = (coord[0] * Math.PI) / 180;
      const pc = (coord[1] * Math.PI) / 180;
      const cosC =
        Math.sin(phi) * Math.sin(pc) + Math.cos(phi) * Math.cos(pc) * Math.cos(lc - lambda);
      return cosC > 0;
    }

    function render() {
      countryPaths.forEach((p, i) => {
        const d = path(featureList[i]);
        if (d) p.setAttribute("d", d);
      });
      const gd = path(graticule);
      if (gd) graticulePath.setAttribute("d", gd);

      markerEls.forEach(({ marker, g }) => {
        if (isVisible(marker.coord)) {
          if (!g.isConnected) labelLayer.appendChild(g);
          const p = projection(marker.coord);
          g.setAttribute("transform", p ? `translate(${p[0]},${p[1]})` : "translate(-100,-100)");
        } else if (g.isConnected) {
          labelLayer.removeChild(g);
        }
      });
    }

    let featureList: GeoJSON.Feature[] = [];

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")
      .then((r) => r.json())
      .then((topology: Topology) => {
        if (cancelled) return;
        const countries = feature(
          topology,
          topology.objects.countries as GeometryCollection
        ) as FeatureCollection<Geometry>;
        featureList = countries.features;

        countryPaths = featureList.map((f) => {
          const p = document.createElementNS(SVG_NS, "path");
          const idStr = String(f.id);
          p.setAttribute("fill", HIGHLIGHTED[idStr] ? "#FF6B1A" : "#1C1C1C");
          p.setAttribute("stroke", "#050505");
          p.setAttribute("stroke-width", "0.5");
          countryLayer.appendChild(p);
          return p;
        });

        let rotation: [number, number] = [-40, -25];
        let dragging = false;

        function tick() {
          if (cancelled) return;
          if (!dragging) {
            rotation = [rotation[0] + 0.12, rotation[1]];
            projection.rotate(rotation);
          }
          render();
          raf = requestAnimationFrame(tick);
        }
        tick();

        let last: [number, number] | null = null;
        const pointerDown = (e: MouseEvent | TouchEvent) => {
          dragging = true;
          svg.style.cursor = "grabbing";
          const p = "touches" in e ? e.touches[0] : e;
          last = [p.clientX, p.clientY];
        };
        const pointerMove = (e: MouseEvent | TouchEvent) => {
          if (!dragging || !last) return;
          const p = "touches" in e ? e.touches[0] : e;
          const dx = p.clientX - last[0];
          const dy = p.clientY - last[1];
          last = [p.clientX, p.clientY];
          rotation = [rotation[0] + dx * 0.4, Math.max(-90, Math.min(90, rotation[1] - dy * 0.4))];
          projection.rotate(rotation);
          render();
          e.preventDefault();
        };
        const pointerUp = () => {
          dragging = false;
          last = null;
          svg.style.cursor = "grab";
        };

        svg.addEventListener("mousedown", pointerDown as EventListener);
        window.addEventListener("mousemove", pointerMove as EventListener);
        window.addEventListener("mouseup", pointerUp);
        svg.addEventListener("touchstart", pointerDown as EventListener, { passive: true });
        window.addEventListener("touchmove", pointerMove as EventListener, { passive: false });
        window.addEventListener("touchend", pointerUp);

        cleanupInteraction = () => {
          svg.removeEventListener("mousedown", pointerDown as EventListener);
          window.removeEventListener("mousemove", pointerMove as EventListener);
          window.removeEventListener("mouseup", pointerUp);
          svg.removeEventListener("touchstart", pointerDown as EventListener);
          window.removeEventListener("touchmove", pointerMove as EventListener);
          window.removeEventListener("touchend", pointerUp);
        };
      })
      .catch(() => {});

    let cleanupInteraction: (() => void) | null = null;

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      if (cleanupInteraction) cleanupInteraction();
      container.removeChild(svg);
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
