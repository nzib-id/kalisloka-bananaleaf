import React from "react";

import Layout from "@/components/layout/Layout";
import HeroSection from "./sections/HeroSection";
import SpecificationsSection from "./sections/SpecificationsSection";
import ProductOverviewSection from "./sections/ProductOverviewSection";
import GradesSizingSection from "./sections/GradesSizingSection";
import ApplicationsSection from "./sections/ApplicationsSection";
import ContactSection from "./sections/ContactSection";
import GallerySection from "./sections/GallerySection";



const HomePage: React.FC = () => {

  return (
    <Layout>
      <HeroSection />
      <ProductOverviewSection />
      <SpecificationsSection />
      <GradesSizingSection />
      <GallerySection />
      {/* <ApplicationsSection /> */}

      <ContactSection />
    </Layout>
  );
};

export default HomePage;
