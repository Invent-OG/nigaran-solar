"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem className="lg:basis-1/2" key={index}>
                <div className="flex items-center justify-between h-full select-none rounded-xl bg-muted lg:col-span-2 aspect-video">
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                    alt="User"
                    width={500}
                    height={500}
                    className="object-cover w-1/2 h-full"
                  />

                  <div className="flex flex-col justify-center w-1/2 h-full p-5 bg-black gap -4">
                    <div className="flex flex-col">
                      <h3 className="text-xl tracking-tight text-white">
                        Best decision
                      </h3>
                      <p className="max-w-xs text-base text-muted-foreground">
                        Our goal was to streamline SMB trade, making it easier
                        and faster than ever and we did it together.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export { Testimonials };
