import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        w-full
        bg-[#004035]
        text-[#E6FFCF]
        pt-10 pb-14
      "
    >
      {/* DIVIDER LINE */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="w-full h-[1px] bg-[#E8FAD9]/40 mb-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/images/logo-bottom.svg" className="w-40 mb-4" />

          <p className="text-sm opacity-90 mb-4">
            Agricultural Raw Material Supply & Trade Partner.
          </p>

          <p className="text-sm opacity-90">
            Email:{" "}
            <a
              href="mailto:hello@kalisloka.com"
              target="_blank"
              className="font-semibold hover:opacity-80 transition"
            >
              hello@kalisloka.com
            </a>
          </p>
          <p className="text-sm opacity-90">
            Phone / WhatsApp:{" "}
            <a
              href="https://wa.me/6285121383435"
              target="_blank"
              className="font-semibold hover:opacity-80 transition"
            >
              +62-851-2138-3435
            </a>
          </p>
        </div>

        {/* RIGHT SIDE (OFFICE LOCATION) */}
        {/* RIGHT SIDE — Office Location + Copyright */}
        <div
          className="
            w-full
            md:w-auto
            flex flex-col
            justify-center md:justify-end
            md:items-end
            mt-10 md:mt-0
            text-center md:text-right
          "
        >
          <p className="text-xs md:text-sm opacity-80">Office Location</p>
          <p className="text-xs md:text-sm font-semibold opacity-90">
            Cianjur, West Java
          </p>

          {/* SPACING */}
          <div className="h-6"></div>

          {/* COPYRIGHT */}
          <p className="text-xs md:text-sm opacity-70">
            © 2025 Kalisloka. All rights reserved.
          </p>
          <p className="text-xs md:text-sm opacity-70">
            Legal entity registered as PT Sujana Kalis Loka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
