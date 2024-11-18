import Image from "next/image";
import Hero from "./components/Hero";
import ChooseSection from "./components/ChooseSection";
import HeadSection from "./components/HeadSection";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import LastSection from "./components/LastSection";
export default function Home() {
  return (
    <>
    <Hero />
    <ChooseSection />
    <HeadSection />
    <Cards />
    <Banner />
    <Footer />
    <LastSection />
    </>
  );
}
