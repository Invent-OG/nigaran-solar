import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const logos = [
  {
    id: "logo-1",
    description: "Polycab",
    image: "/Brand Logo/Polycab Logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-2",
    description: "ReNew",
    image: "/Brand Logo/ReNew Logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Sungrow",
    image: "/Brand Logo/Sungrow Logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-4",
    description: "Vikram_Solar_logo",
    image: "/Brand Logo/Vikram_Solar_logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-1",
    description: "Polycab",
    image: "/Brand Logo/Polycab Logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-2",
    description: "ReNew",
    image: "/Brand Logo/ReNew Logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Sungrow",
    image: "/Brand Logo/Sungrow Logo.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-4",
    description: "Vikram_Solar_logo",
    image: "/Brand Logo/Vikram_Solar_logo.png",
    className: "h-7 w-auto",
  },
];

export function LogosSlider() {
  return (
    <div className="relative h-[100px]  w-full overflow-hidden">
      <InfiniteSlider
        className="flex items-center w-full h-full"
        duration={30}
        gap={48}
      >
        {logos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex items-center justify-center w-32"
          >
            <img
              src={logo.image}
              alt={logo.description}
              className={logo.className}
            />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 left-0 h-full w-[100px] lg:w-[200px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute top-0 right-0 h-full w-[100px] lg:w-[200px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
