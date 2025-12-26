"use client";

const grades = [
  {
    title: "Standard Supply",
    subtitle: "Predominantly Grade A",
    points: [
      "Clean, wide, usable leaves",
      "Minor visual imperfections allowed",
      "Best for: Restaurants, catering, distributors",
    ],
  },
  {
    title: "Uniform Supply",
    subtitle: "Grade A only",
    points: [
      "More consistent size and appearance",
      "Strict visual selection",
      "Best for: Premium catering, presentation-focused wrapping",
    ],
  },
  {
    title: "Functional Supply",
    subtitle: "Grade B",
    points: [
      "Visual imperfections allowed",
      "Fully usable for wrapping",
      "Best for: Processing, bulk operations, cost-focused use",
    ],
  },
];

export default function GradesSection() {
  return (
    <section id="grades" className="bg-[#E6FFCF] py-20 sm:py-24 lg:py-28">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16 lg:mb-20 px-4 sm:px-6">
        <h2 className="font-heading font-semibold text-[#004035]
          text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px]">
          Grades
        </h2>
        <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] text-[#1E1E1E]">
          Defined grading to support consistent supply and commercial use.
        </p>
      </div>

      {/* GRADES GRID */}
      <div
        className="
          max-w-5xl mx-auto px-4 sm:px-6
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 lg:gap-10
          place-items-center
        "
      >
        {grades.map((grade, i) => (
          <div
            key={i}
            className="
              w-full max-w-[320px] sm:max-w-[300px]
              min-h-[440px] sm:min-h-[460px] lg:min-h-[480px]
              border-[4px] border-[#003F38]
              rounded-3xl
              px-6
              py-8 sm:py-10
              flex flex-col
              text-center
            "
          >
            {/* TITLE */}
            <h3 className="font-heading font-semibold text-[#003F38]
              text-[42px]  lg:text-[48px] leading-tight mb-6 md:mb-8">
              {grade.title}
            </h3>

            {/* CONTENT (subtitle + points with dividers) */}
            <div className="flex flex-col text-center text-[#003F38]">
              {[grade.subtitle, ...grade.points].map((text, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <p
                    className={`
                      leading-relaxed font-semibold
                      ${idx === 0
                        ? "text-[11px] sm:text-[12px] text-[#003F38] py-4"
                        : "text-[12px] sm:text-[13px] py-3"}
                    `}
                  >
                    {text}
                  </p>

                  {/* divider SELALU ADA */}
                  <div className="h-px bg-[#003F38]/20 w-full" />
                </div>
              ))}
            </div>


            {/* CTA */}
            <a
              href="#"
              className="
                font-heading
                mt-auto
                pt-8 sm:pt-10
                text-[12px] sm:text-[13px] md:text-[18px]
                font-medium
                text-[#003F38]
              "
            >
              Request this supply
            </a>
          </div>
        ))}
      </div>

      {/* CUSTOM SPEC */}
      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 px-4 sm:px-6">
        <div className="
          border-[4px] border-[#003F38]
          rounded-3xl
          px-6 sm:px-10
          py-10 sm:py-12
          text-center
        ">
          <h3 className="font-heading font-semibold text-[#003F38]
            text-[42px] xl:text-[48px] mb-3 sm:mb-4">
            Custom Specification
          </h3>

          <p className="text-[12px] sm:text-[13px] text-[#1E1E1E] mb-6 sm:mb-8">
            For buyers with specific operational or market requirements.
          </p>

          <div className="flex justify-center">
            <div
              className="
                grid grid-cols-1 sm:grid-cols-2
                gap-y-3 sm:gap-y-4
                gap-x-10
                text-[12px] sm:text-[13px]
                text-[#003F38]
                mb-8 sm:mb-10
                max-w-[520px]
                w-full
                text-left
                font-semibold
              "
            >
              <span>• Size range adjustments</span>
              <span>• Destination-specific handling</span>
              <span>• Packing format customization</span>
              <span>• Volume-based specifications</span>
            </div>
          </div>


          <div className="text-center">
            <a
              href="#"
              className="
              font-heading
                text-[16px] md:text-[24px]
                font-medium
                text-[#003F38]
              "
            >
              Request Specification
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
