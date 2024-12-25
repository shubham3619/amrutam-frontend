import React from "react"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import AyurvedaMagic from "./components/Benefit/AyurvedaMagic"
import AyurvedicPanel from "./components/AyurvedicPanel/AyurvedicPanel"
import HarmonyBanner from "./components/HarmonyBanner/HarmonyBanner"
import AyurvedicApproach from "./components/AyurvedicApproach/AyurvedicApproach"
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel"
import AyurvedaExperts from "./components/AyurvedaExperts/AyurvedaExperts"
import AmrutamLanding from "./components/AmrutamLanding/AmrutamLanding"


const App = () => {
  return (
    <>
    <Hero />
    <AyurvedaMagic />
    <AyurvedicPanel />
    <HarmonyBanner/>
    <AyurvedicApproach />
    <TestimonialsCarousel />
    <AyurvedaExperts />
    <AmrutamLanding />
    <Footer />
    </>
  )
}

export default App