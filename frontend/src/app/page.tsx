"use client"
import Hero from "./Hero";
import FeatureCard from "./Features";
import GPSTracking from "./GPSTracking";
import FacilitiesMap from "./FacilitiesMap";
import AIChatbot from "./AIChatbot";
import ScrapSelling from "./ScrapSelling";
import EcommerceStore from "./EcommerceStore";
import LearningPortal from "./LearningPortal";

export default function Home() {
  return (
 <>
  <Hero/>
  <FeatureCard/>
  <GPSTracking/>
  <FacilitiesMap/>
  <AIChatbot/>
  <ScrapSelling/>
  <EcommerceStore/>
  <LearningPortal/>
 </>
  );
}
