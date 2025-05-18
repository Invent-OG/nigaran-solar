"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Home, Power, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Solar Solutions",
  heading = "Solar Systems We Offer",
  description = "Discover our range of solar solutions designed to meet your specific energy needs",
  tabs = [
    {
      value: "Residential solar",
      icon: <Home className="w-4 h-auto shrink-0" />,
      label: "Residential solar",
      content: {
        badge: "Residential solar",
        title:
          "Switch to affordable, eco-friendly solar energy to power your home.",
        description:
          "Go solar with Nigaran Solar and enjoy a steady reduction in your electricity bills. We offer affordable solar panel solutions for homes across Tamil Nadu. Whether you need a solar rooftop installation or a custom solar installation, we provide high-quality panels that ensure maximum energy efficiency.",
        buttonText: "Learn More",
        imageSrc:
          "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg",
        imageAlt: "On-grid solar system installation",
      },
    },
    {
      value: "Commercial Solar",
      icon: <Battery className="w-4 h-auto shrink-0" />,
      label: "Commercial Solar",
      content: {
        badge: "Smarter Energy",
        title: "Smarter Energy for Smarter Business",
        description:
          "At Nigaran Solar, we provide solar power systems tailored specifically for businesses. Whether you're running a manufacturing unit, a retail store, or any other commercial establishment, we offer customized solar solutions to reduce energy bills, improve sustainability, and increase operational efficiency.",
        buttonText: "Learn More",
        imageSrc:
          "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
        imageAlt: "Off-grid solar installation",
      },
    },
    {
      value: "Housing society",
      icon: <Zap className="w-4 h-auto shrink-0" />,
      label: "Housing society",
      content: {
        badge: "Housing society",
        title: "Clean, cost-effective solar for housing societies.",
        description:
          "Housing societies can drastically cut shared electricity costs by installing a community solar system. Nigaran Solar specializes in providing customized solar for housing societies, helping communities generate clean energy for common utilities like lifts, pumps, and corridor lighting. ",
        buttonText: "See Details",
        imageSrc:
          "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
        imageAlt: "Hybrid solar system",
      },
    },
  ],
}: Feature108Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  return (
    <section className="py-32 bg-background">
      <div className="container relative mx-auto">
        {/* Heading Section */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
            {heading}
          </h2>

          <div className="w-20 h-1 mx-auto mb-6 bg-primary"></div>
          {/* <p className="text-muted-foreground">{description}</p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mt-8">
            <div className="absolute left-0 -translate-y-2/4 lg:-top-5 top-32 lg:-translate-x-1/2 -translate-x-28">
              <Spline scene="https://prod.spline.design/fZXdoHZ9JramEa8D/scene.splinecode" />
            </div>

            <Tabs
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="relative mt-8"
            >
              {/* Tabs List */}
              <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <TabsList className="flex flex-col items-center justify-center gap-4 py-20 lg:py-2 bg-inherit sm:flex-row md:gap-10">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="flex items-center gap-2 bg-white border rounded-xl px-4 py-3 text-xs font-semibold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      {tab.icon} {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {/* Tabs Content */}
              <motion.div
                className="max-w-screen-xl p-6 mx-auto mt-8 rounded-2xl bg-muted lg:p-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.value}
                      value={tab.value}
                      className="relative z-30"
                      asChild
                    >
                      {selectedTab === tab.value && (
                        <motion.div
                          className="grid gap-20 place-items-center lg:grid-cols-2 lg:gap-10"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="flex flex-col gap-5">
                            <Badge
                              variant="outline"
                              className="text-white w-fit bg-primary"
                            >
                              {tab.content.badge}
                            </Badge>
                            <motion.h3
                              className="text-3xl font-semibold lg:text-5xl"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {tab.content.title}
                            </motion.h3>
                            <motion.p
                              className="text-muted-foreground lg:text-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {tab.content.description}
                            </motion.p>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Button className="mt-2.5 w-fit gap-2" size="lg">
                                {tab.content.buttonText}
                              </Button>
                            </motion.div>
                          </div>
                          <motion.div
                            className="relative h-[300px] w-full overflow-hidden rounded-xl"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Image
                              src={tab.content.imageSrc}
                              alt={tab.content.imageAlt}
                              width={500}
                              height={500}
                              className="absolute inset-0 object-cover w-full h-full"
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </TabsContent>
                  ))}
                </AnimatePresence>
              </motion.div>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Feature108 };
