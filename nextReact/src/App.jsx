import { useRef } from "react";
import './App.css'
import Hero from '@/component/ui/Hero.jsx'
import Section2 from '@/component/ui/Section2.jsx'
import UserTestimonies from "@/component/ui/Usertestimonies";
import Newsletter from "@/component/ui/Newsletter";
import Footer from "@/static/Footer.jsx";
import Header from "@/static/Header.jsx";

function App() {
  const heroSectionRef = useRef(null);

  return (
    <>
      <Header heroSectionRef={heroSectionRef} />
      <Hero heroSectionRef={heroSectionRef} />
      <Section2 />
      <UserTestimonies/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
