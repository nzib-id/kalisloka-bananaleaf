import type { Photo } from "react-photo-album";

const files = [
  "banana-1.png",
  "banana-2.png",
  "banana-3.png",
  "banana-4.png",
  "banana-5.jpg",
  "banana-6.jpg",
  
];

const RATIOS: [number, number][] = [
  [1, 1], // square
  [4, 3], // landscape
  [3, 4], // portrait
  [5, 4], // soft landscape
];

const photos: Photo[] = files.map((file, index) => {
  const [w, h] = RATIOS[index % RATIOS.length];

  return {
    src: `/images/gallery/${file}`,
    width: w,
    height: h,
    alt: file.replace(/\.(png|jpe?g|webp)$/i, ""),
  };
});

export default photos;
