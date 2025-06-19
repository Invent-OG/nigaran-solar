"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LeadForm from "@/components/forms/lead-form";
import { HomeIcon, Users2, Building2 } from "lucide-react";

export default function ContactPage() {
  const [formType, setFormType] = useState<
    "residential" | "housing_society" | "commercial"
  >("residential");

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16  lg:pb-52 pb-[80%] bg-background">
        <div className="container">
          <motion.div {...fadeInUp()} className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Ready to make the switch to clean, renewable solar energy? Contact
              us today! Whether you’re interested in residential solar panels or
              commercial solar solutions, our team at Nigaran Solar is here to
              help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div {...fadeInUp(0.2)}>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-2 text-lg font-semibold">Phone:</h2>
                  <p>+91 96007 15993</p>
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-semibold">Email:</h2>
                  <p>info@nigaransolar.com</p>
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-semibold">
                    Registered Office:
                  </h2>
                  <p>No.52, Theo Saro Villa</p>
                  <p>Vasantham Nagar, P&T Nagar Extn</p>
                  <p>Madurai-625017</p>
                </div>
                <div>
                  <h2 className="mb-2 text-lg font-semibold">Work Office:</h2>
                  <p>No.G1a/62, Periya Subbannan Street</p>
                  <p>KK Pudur, Saibaba Colony</p>
                  <p>Coimbatore-641038</p>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <div className="w-full text-white lg:max-w-xl">
              {/* Buttons */}
              <div className="flex flex-row gap-3 mb-6 sm:gap-4">
                <div
                  onClick={() => setFormType("residential")}
                  className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                    formType === "residential"
                      ? "bg-primary  font-semibold shadow-lg"
                      : "bg-white/20 shadow-lg text-black  hover:bg-white/30"
                  }`}
                >
                  <HomeIcon size={16} className="hidden lg:flex" /> Residential
                </div>
                <div
                  onClick={() => setFormType("housing_society")}
                  className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                    formType === "housing_society"
                      ? "bg-primary  font-semibold shadow-lg"
                      : "bg-white/20 shadow-lg text-black  hover:bg-white/30"
                  }`}
                >
                  <Users2 size={16} className="hidden lg:flex" /> Housing
                  Society
                </div>
                <div
                  onClick={() => setFormType("commercial")}
                  className={`cursor-pointer py-3 lg:px-4  w-full flex items-center justify-center gap-2 rounded-xl text-xs lg:text-sm sm:text-base transition ${
                    formType === "commercial"
                      ? "bg-primary  font-semibold shadow-lg"
                      : "bg-white/20 shadow-lg text-black  hover:bg-white/30"
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

            {/* Form */}
            {/* <motion.div
              {...fadeInUp(0.3)}
              className="p-6 rounded-lg shadow-lg bg-card"
            >
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="Your full name" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required placeholder="Your phone number" />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required placeholder="Enter your city" />
                </div>

                <div>
                  <Label htmlFor="bill">Monthly Electricity Bill</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your bill range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lt1500">Less than ₹1500</SelectItem>
                      <SelectItem value="1500-2500">₹1500 - ₹2500</SelectItem>
                      <SelectItem value="2500-4000">₹2500 - ₹4000</SelectItem>
                      <SelectItem value="4000-8000">₹4000 - ₹8000</SelectItem>
                      <SelectItem value="gt8000">More than ₹8000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="lookingFor">Looking For</Label>
                  <Select
                    onValueChange={(value) => setLookingFor(value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">
                        Residential Solar
                      </SelectItem>
                      <SelectItem value="commercial">
                        Commercial Solar
                      </SelectItem>
                      <SelectItem value="industry">Industry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <AnimatePresence mode="sync">
                  {lookingFor === "commercial" && (
                    <motion.div
                      key="commercial"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Label htmlFor="businessSize">Business Size</Label>
                      <Input
                        id="businessSize"
                        placeholder="e.g. Small, Medium, Large"
                      />
                    </motion.div>
                  )}

                  {lookingFor === "industry" && (
                    <motion.div
                      key="industry"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Label htmlFor="industryType">Industry Type</Label>
                      <Input
                        id="industryType"
                        placeholder="e.g. Textile, Manufacturing, IT"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button type="submit" className="w-full mt-4">
                  Submit
                </Button>
              </form>
            </motion.div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
