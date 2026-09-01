import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Stories from "@/components/Stories";
import Geo from "@/components/Geo";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-bg font-sans text-fg">
      <Nav />
      <Hero />
      <Products />
      <Stories />
      <Geo />
      <Tech />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}
