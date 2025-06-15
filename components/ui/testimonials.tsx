"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonialData = [
  {
    name: "Arun Kumar",
    position: "Project Manager",
    image: "/about/teams/1.png",
  },
  {
    name: "Sneha Reddy",
    position: "Operations Head",
    image: "/about/teams/2.png",
  },
  {
    name: "Rahul Sharma",
    position: "CTO",
    image: "/about/teams/3.png",
  },
  {
    name: "Priya Menon",
    position: "Design Lead",
    image: "/about/teams/4.png",
  },
  {
    name: "Vikram Patel",
    position: "Business Analyst",
    image: "/about/teams/5.png",
  },
  {
    name: "Anjali Desai",
    position: "Marketing Manager",
    image: "/about/teams/6.png",
  },
  {
    name: "Karthik Nair",
    position: "Technical Support",
    image: "/about/teams/7.png",
  },
];

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
            {testimonialData.map((testimonial, index) => (
              <CarouselItem className="lg:basis-1/5" key={index}>
                <div className="flex flex-col items-center justify-between h-full select-none rounded-xl">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={250}
                    height={250}
                    className="object-cover h-full "
                  />
                  <div className="flex flex-col items-center w-full text-center">
                    <h3 className="text-xl font-semibold text-black">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </span>
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
