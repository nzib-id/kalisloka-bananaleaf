"use client";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import photos from "@/data/gallery";
/* eslint-disable @next/next/no-img-element */

export default function GallerySection() {
  return (
    <section className="bg-[#E6FFCF] py-24">
      {/* HEADER */}
      <div className="text-center mb-16 px-4">
        <h2 className="font-heading font-semibold text-[#003F38]
          text-[48px] sm:text-[64px] leading-tight">
          Gallery
        </h2>
        <p className="mt-3 text-[13px] text-[#003F38]/70">
          See how we work
        </p>
      </div>

      {/* MASONRY */}
      <div className="max-w-6xl mx-auto px-4">
        <div
        >
          <MasonryPhotoAlbum photos={photos} />;
        </div>
      </div>
    </section>
  );
}
