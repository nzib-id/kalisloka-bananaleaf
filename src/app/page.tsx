import React from "react";

import Layout from "@/components/layout/Layout";
import HeroSection from "./sections/HeroSection";
import SpecificationsSection from "./sections/SpecificationsSection";
import ProductOverviewSection from "./sections/ProductOverviewSection";
import GradesSizingSection from "./sections/GradesSizingSection";
import ApplicationsSection from "./sections/ApplicationsSection";
import ContactSection from "./sections/ContactSection";
import GallerySection from "./sections/GallerySection";
import ProcessingSection from "./sections/Processing";

export const metadata = {
  title: "Fresh Banana Supply for Export & Trade",
  description:
    "Kalisloka provides fresh banana supply with standardized grades, specifications, and processing for export and industrial trade.",
};


const HomePage: React.FC = () => {

  return (
    <Layout>
      <main>
        <HeroSection />
        <ProductOverviewSection />
        <SpecificationsSection />
        <GradesSizingSection />
        <ProcessingSection />
        <GallerySection />
        <ContactSection />
      </main>
    </Layout>
  );
};

export default HomePage;
