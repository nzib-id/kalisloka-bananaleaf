/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        min-h-[110vh] sm:min-h-[110vh] md:min-h-[120vh] lg:min-h-[125vh]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* HERO IMAGE — absolute full width */}
      <img
        src="/images/hero-banana.png"
        alt="Hero Background"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[center_10%]

          sm:object-[center_5%]

          md:object-[center_10%]
          lg:object-[center_15%]
        "
      />

      {/* OVERLAY agar teks lebih jelas (mirip screenshot) */}
      {/* <div className="absolute inset-0 bg-black/20 md:bg-black/5"></div> */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto ">
        <div className="max-w-[650px]
          text-left h-screen flex flex-col justify-center pb-[100px] lg:pb-[150px]">

          {/* HEADLINE */}
          <h1
            className="
              text-white
              text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px]
              font-heading
              leading-tight
              mb-6
            "
          >
            Fresh banana leaves. Ready for export.
          </h1>

          {/* SUBHEADLINE */}
          <p
            className="
              text-[14px] sm:text-[15px] md:text-[16px]
              text-white
              leading-relaxed
              mb-10
              max-w-[550px]
            "
          >
            Supplied by Kalisloka for professional food-wrapping and export use.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Button variant="primary" className="px-6 py-3 text-sm">
              View Specification
            </Button>

            <Button variant="outline-light" className="px-6 py-3 text-sm">
              Ask About Trial Shipment
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
