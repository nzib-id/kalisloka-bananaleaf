/* eslint-disable @next/next/no-img-element */
"use client";

const applications = [
  {
    text: "Spice and seasoning manufacturing",
    icon: "/icons/spice.svg",
  },
  {
    text: "Ingredient trading and distribution",
    icon: "/icons/trading.svg",
  },
  {
    text: "Extract and concentrate production",
    icon: "/icons/extract.svg",
  },
  {
    text: "Food and beverage formulation",
    icon: "/icons/beverage.svg",
  },
  {
    text: "Herbal drinks and tea blends",
    icon: "/images/icons/tea.png",
  },
];

export default function ApplicationsSection() {
  return (
    <section id="applications" className="w-full bg-[#E7F9D5] py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-[900px] text-center">

        {/* TITLE */}
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight">
          Applications & Use Cases
        </h2>

        {/* SUBTITLE */}
        <p className="text-[15px] md:text-[16px] text-[#003F38] mb-14">
          Fresh ginger from Kalisloka is intended for commercial use, including:
        </p>
        
        {/* LIST */}
        <div className="flex flex-col gap-10 md:gap-[52px] mt-10 container">

          {applications.map((item, i) => (
            <div
              key={i}
              className="
                flex items-center justify-between
                text-left
              "
            >
              {/* TEXT */}
              <p className="text-[15px] md:text-[16px] text-[#003F38]">
                {item.text}
              </p>

               {/* ICON WRAPPER WITH BORDER */}
                <div
                  className="
                    border-[2px] border-[#003F38]
                    rounded-xl
                    p-2
                    flex items-center justify-center
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="
                      w-[22px] h-[22px]
                      md:w-[28px] md:h-[28px]
                      object-contain
                    "
                  />
                </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
