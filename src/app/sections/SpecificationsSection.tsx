/* eslint-disable @next/next/no-img-element */
"use client";

export default function SpecificationsSection() {
  return (
    <section
      id="specifications"
      className="w-full py-20 bg-[#E6FFCF] container mx-auto "
    >
      <div className="">

        {/* TITLE */}
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight text-center">
          Specifications
        </h2>

        {/* CARD */}
        <div
          className="
            max-w-[850px]
            mx-auto
            border-[4px] border-[#003F38]
            rounded-3xl
            p-8 sm:p-10 md:p-12
            bg-transparent
          "
        >
          <div
            className="
              grid grid-cols-1 md:grid-cols-2
              gap-10 md:gap-12 items-center
            "
          >
            {/* TEXT BLOCK */}
            <div className="space-y-4 text-[#003F38] text-[15px] leading-relaxed">

              <p>
                <span className="font-semibold">Product Name:</span> Fresh banana leaf
              </p>

              <p>
                <span className="font-semibold">Botanical Name:</span>{" "}
                <span className="italic">Zingiber officinale</span>
              </p>

              <p>
                <span className="font-semibold">Minimum width:</span> ≥30 cm
              </p>

              <p>
                <span className="font-semibold">Length:</span> Natural length or cut size (on request)
              </p>

              <p>
                <span className="font-semibold">Condition:</span> Fresh, cleaned
              </p>

              <p>
                <span className="font-semibold">Color:</span> Natural green
              </p>

              <p>
                <span className="font-semibold">Origin:</span> Sourced from agricultural areas in West Java (traceable by batch)
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/banana.svg"
                alt="Ginger"
                className="
                  w-[220px] h-[220px] md:w-[260px] md:h-[260px]
                  object-cover
                  rounded-2xl
                  shadow-sm
                "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
