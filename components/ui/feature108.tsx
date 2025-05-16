"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Power, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

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
      value: "on-grid",
      icon: <Power className="w-4 h-auto shrink-0" />,
      label: "On-Grid Systems",
      content: {
        badge: "Grid Connected",
        title: "On-Grid Solar Systems for Continuous Power Supply",
        description:
          "Residential and commercial solar systems are predominantly powered by on-grid solar systems...",
        buttonText: "Learn More",
        imageSrc:
          "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg",
        imageAlt: "On-grid solar system installation",
      },
    },
    {
      value: "off-grid",
      icon: <Battery className="w-4 h-auto shrink-0" />,
      label: "Off-Grid Systems",
      content: {
        badge: "Energy Independence",
        title: "Off-Grid Solar Systems for Complete Energy Independence",
        description:
          "Off-grid solar systems are ideal for regions where there is no connection to the electricity grid...",
        buttonText: "Explore Options",
        imageSrc:
          "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
        imageAlt: "Off-grid solar installation",
      },
    },
    {
      value: "hybrid",
      icon: <Zap className="w-4 h-auto shrink-0" />,
      label: "Hybrid Systems",
      content: {
        badge: "Best of Both",
        title: "Hybrid Solar Systems for the Best of Both Worlds",
        description:
          "Hybrid solar systems combine the advantages of both on-grid and off-grid systems...",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>

        <div className="relative mt-8">
          <div className="absolute left-0 -translate-y-2/4 -top-5 lg:-translate-x-1/2 -translate-x-2/4">
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
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white"
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
                {tabs
                  .filter((tab) => tab.value === selectedTab)
                  .map((tab) => (
                    <TabsContent
                      key={tab.value}
                      value={tab.value}
                      className="relative z-30"
                      asChild
                    >
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
                          <img
                            src={tab.content.imageSrc}
                            alt={tab.content.imageAlt}
                            className="absolute inset-0 object-cover w-full h-full"
                          />
                        </motion.div>
                      </motion.div>
                    </TabsContent>
                  ))}
              </AnimatePresence>
            </motion.div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { Feature108 };
