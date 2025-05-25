// "use client";

// import { motion } from "framer-motion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import LeadForm from "@/components/forms/lead-form";
// import { ShineBorder } from "@/components/magicui/shine-border";
// import { BorderBeam } from "@/components/magicui/border-beam";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "@/components/ui/input";

// export default function ConsultationPage() {
//   return (
//     <div className="min-h-screen pt-20">
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">
//               Get Your Free Solar Consultation
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Fill out the form below and our experts will provide you with a
//               customized solar solution.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="max-w-md mx-auto"
//           >
//             <Tabs defaultValue="residential" className="w-full">
//               <TabsList className="grid w-full grid-cols-3">
//                 <TabsTrigger value="residential">Residential</TabsTrigger>
//                 <TabsTrigger value="housing_society">
//                   Housing Society
//                 </TabsTrigger>
//                 <TabsTrigger value="commercial">Commercial</TabsTrigger>
//               </TabsList>
//               <div className="mt-8">
//                 <TabsContent value="residential">
//                   <LeadForm type="residential" title={""} description={""} />
//                 </TabsContent>
//                 <TabsContent value="housing_society">
//                   <LeadForm
//                     type="housing_society"
//                     title={""}
//                     description={""}
//                   />
//                 </TabsContent>
//                 <TabsContent value="commercial">
//                   <LeadForm type="commercial" title={""} description={""} />
//                 </TabsContent>
//               </div>
//             </Tabs>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";
import LeadForm from "@/components/forms/lead-form";
import RippleBackground from "@/components/RippleBackground";
import { Building2, HomeIcon, Users2 } from "lucide-react";

export default function ConsultationPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formType, setFormType] = useState<
    "residential" | "housing_society" | "commercial"
  >("residential");

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Save Money with Solar",
      description: "Reduce your monthly electricity bills with clean energy.",
    },
    {
      src: "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Power Your Society",
      description:
        "Bring efficient and sustainable power to your entire community.",
    },
    {
      src: "https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=3658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Solar for Your Business",
      description:
        "Boost your bottom line with solar energy solutions for commercial spaces.",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative min-h-screen px-4 pb-[50%] pt-[20%] lg:py-[8%]  md:px-12 lg:px-20 overflow-hidden">
      <RippleBackground />

      <section className="relative container mx-auto mt-12 sm:mt-20 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
        >
          {/* Carousel Section */}
          <div className="w-full lg:max-w-xl">
            <div className="mb-6 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Get Your Free Solar Consultation
              </h1>
              <p className="text-sm sm:text-base text-white/70">
                Fill out the form below and our experts will provide you with a
                customized solar solution.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl relative" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div
                    className="min-w-full relative h-48 sm:h-64 md:h-72 lg:h-[40vh]"
                    key={index}
                  >
                    <Image
                      src={slide.src}
                      alt={`Slide ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    {/* Overlay Heading and Description */}
                    <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col justify-end p-4 sm:p-6">
                      <h3 className="text-white text-lg sm:text-xl font-semibold">
                        {slide.heading}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    selectedIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:max-w-xl  text-white">
            {/* Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 mb-6">
              <div
                onClick={() => setFormType("residential")}
                className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                  formType === "residential"
                    ? "bg-white text-black font-semibold"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <HomeIcon size={16} className="hidden lg:flex" /> Residential
              </div>
              <div
                onClick={() => setFormType("housing_society")}
                className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                  formType === "housing_society"
                    ? "bg-white text-black font-semibold"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Users2 size={16} className="hidden lg:flex" /> Housing Society
              </div>
              <div
                onClick={() => setFormType("commercial")}
                className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                  formType === "commercial"
                    ? "bg-white text-black font-semibold"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Building2 size={16} className="hidden lg:flex" /> Commercial
              </div>
            </div>

            {/* Dynamic Form */}
            {formType === "residential" && (
              <LeadForm
                type="residential"
                title="Residential Solar Solutions"
                description="Optimize your home's energy with our customized residential solar plans."
              />
            )}
            {formType === "housing_society" && (
              <LeadForm
                type="housing_society"
                title="Housing Society Solutions"
                description="Affordable solar solutions designed for housing societies and communities."
              />
            )}
            {formType === "commercial" && (
              <LeadForm
                type="commercial"
                title="Commercial Solar Plans"
                description="Efficient solar power options tailored for your commercial needs."
              />
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
