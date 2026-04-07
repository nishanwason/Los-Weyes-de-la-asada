import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import OrderOnline from "@/components/OrderOnline";
import Reviews from "@/components/Reviews";
import HoursLocation from "@/components/HoursLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <OrderOnline />
      <Reviews />
      <HoursLocation />
      <Footer />
    </main>
  );
}
