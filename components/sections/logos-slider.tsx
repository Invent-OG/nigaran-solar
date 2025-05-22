// import { InfiniteSlider } from "@/components/ui/infinite-slider";
// import { ProgressiveBlur } from "@/components/ui/progressive-blur";

// const logos = [
//   {
//     id: "logo-1",
//     description: "Polycab",
//     image: "/Brand Logo/Polycab Logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-2",
//     description: "ReNew",
//     image: "/Brand Logo/ReNew Logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-3",
//     description: "Sungrow",
//     image: "/Brand Logo/Sungrow Logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-4",
//     description: "Vikram_Solar_logo",
//     image: "/Brand Logo/Vikram_Solar_logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-1",
//     description: "Polycab",
//     image: "/Brand Logo/Polycab Logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-2",
//     description: "ReNew",
//     image: "/Brand Logo/ReNew Logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-3",
//     description: "Sungrow",
//     image: "/Brand Logo/Sungrow Logo.webp",
//     className: "h-7 w-auto",
//   },
//   {
//     id: "logo-4",
//     description: "Vikram_Solar_logo",
//     image: "/Brand Logo/Vikram_Solar_logo.webp",
//     className: "h-7 w-auto",
//   },
// ];

// export function LogosSlider() {
//   return (
//     <div className="relative h-[100px]  w-full overflow-hidden">
//       <InfiniteSlider
//         className="flex items-center w-full h-full"
//         duration={30}
//         gap={48}
//       >
//         {logos.map((logo, index) => (
//           <div
//             key={`${logo.id}-${index}`}
//             className="flex items-center justify-center w-32"
//           >
//             <img
//               src={logo.image}
//               alt={logo.description}
//               className={logo.className}
//             />
//           </div>
//         ))}
//       </InfiniteSlider>
//       <ProgressiveBlur
//         className="pointer-events-none absolute top-0 left-0 h-full w-[100px] lg:w-[200px]"
//         direction="left"
//         blurIntensity={1}
//       />
//       <ProgressiveBlur
//         className="pointer-events-none absolute top-0 right-0 h-full w-[100px] lg:w-[200px]"
//         direction="right"
//         blurIntensity={1}
//       />
//     </div>
//   );
// }
import { Badge } from "../ui/badge";

export function LogosSlider() {
  const logos = [
    "/Brand Logo/Polycab Logo.webp",
    "/Brand Logo/ReNew Logo.webp",
    "/Brand Logo/Sungrow Logo.webp",
    "/Brand Logo/Vikram_Solar_logo.webp",
    "/Brand Logo/Polycab Logo.webp",
    "/Brand Logo/ReNew Logo.webp",
    "/Brand Logo/Sungrow Logo.webp",
    "/Brand Logo/Vikram_Solar_logo.webp",
  ];

  return (
    <div className="relative h-[200px] flex flex-col items-center justify-center pt-6   w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="max-w-2xl text-3xl text-primary font-extrabold md:text-4xl">
          Trusted By
        </h2>
        <Badge variant="outline">these companies</Badge>
      </div>

      {/* Scroll wrapper */}
      <div className="flex w-max animate-slide gap-12 items-center h-full">
        {logos.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-32 flex-shrink-0"
          >
            <img src={image} alt={`Logo ${index}`} className="h-7 w-auto" />
          </div>
        ))}
        {/* Duplicate set for seamless looping */}
        {logos.map((image, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center justify-center w-32 flex-shrink-0"
          >
            <img src={image} alt={`Logo ${index}`} className="h-7 w-auto" />
          </div>
        ))}
      </div>

      {/* Left blur */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-[100px] lg:w-[200px] bg-gradient-to-r from-white via-white/70 to-transparent backdrop-blur-sm z-10" />
      {/* Right blur */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-[100px] lg:w-[200px] bg-gradient-to-l from-white via-white/70 to-transparent backdrop-blur-sm z-10" />
    </div>
  );
}
