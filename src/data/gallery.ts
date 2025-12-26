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
  [4, 3],
  [3, 4],
  [1, 1],
  [5, 4],
];

const photos: Photo[] = files.map((file, index) => {
  const [w, h] = RATIOS[index % RATIOS.length];

  return {
    src: `/images/gallery/${file}`,
    width: w,
    height: h,
    alt: file.replace(/\.(png|jpe?g|webp)$/i, ""),
    loading: "lazy",
    decoding: "async",
  };
});

export default photos;
