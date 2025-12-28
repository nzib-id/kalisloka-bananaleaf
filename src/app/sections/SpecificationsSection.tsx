/* eslint-disable @next/next/no-img-element */
"use client";

export default function SpecificationsSection() {
  return (
    <section
      id="specifications"
      className="w-full py-20 bg-[#E6FFCF] container mx-auto px-6 md:px-10 "
    >
      <div className="">

        {/* TITLE */}
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight text-center">
          Specifications
        </h2>

        {/* CARD */}
        <div
          className="
            max-w-4xl
            mx-auto
            border-[4px] border-[#003F38]
            rounded-3xl
            p-8 sm:p-10 py-12 md:py-16
            bg-transparent
          "
        >
          <div
            className="
              grid grid-cols-1 md:grid-cols-2
              gap-5 items-center
            "
          >
            {/* IMAGE */}
            <div className="flex justify-center md:justify-end order-1 mb-6 md:mb-0 md:order-2">
              <img
                src="/images/banana.png"
                alt="Banana Leaf"
                className="
                  w-[220px] h-[220px] md:w-[260px] md:h-[260px]
                  object-cover
                  rounded-2xl
                  md:rounded-[35px]
                  shadow-sm
                   border-[4px] border-[#003F38]
                "
              />
            </div>

            {/* TEXT BLOCK */}
            <div className="space-y-2 text-[#1E1E1E] text-[16px] md:text-[18px] order-2 md:order-1 leading-relaxed">
              <p>
                <span className="font-semibold font-heading">Product Name:</span> Fresh banana leaf
              </p>
              <p>
                <span className="font-semibold font-heading">HS Code:</span>{" "}
                <span className="italic">0709.99.90</span>
              </p>
              <p>
                <span className="font-semibold font-heading">Size:</span> 100cm x 30cm (adjustable by request)
              </p>
              <p>
                <span className="font-semibold font-heading">Condition:</span> Fresh, cleaned
              </p>
              <p>
                <span className="font-semibold font-heading">Color:</span> Natural green
              </p>
              <p>
                <span className="font-semibold font-heading">Origin:</span> Sourced from agricultural areas in West Java (traceable by batch)
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
