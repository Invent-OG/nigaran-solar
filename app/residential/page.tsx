// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Sun, Battery, PiggyBank, Leaf } from "lucide-react";
// import LeadForm from "@/components/forms/lead-form";

// export default function ResidentialPage() {
//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg"
//             alt="Residential Solar Installation"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
//         </div>

//         <div className="container relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-2xl text-white"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Switch to Affordable, Eco-Friendly Solar Energy
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 mb-8">
//               Enjoy up to 90% savings on electricity with our residential solar
//               solutions. We provide expert installation and support across Tamil
//               Nadu.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Lead Form Section */}
//       <section className="py-16 bg-muted/30">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               Get Your Free Quote
//             </h2>
//             <LeadForm type="residential" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Why Choose Residential Solar?
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Experience the benefits of clean, renewable energy for your home
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Sun className="h-8 w-8" />,
//                 title: "Energy Independence",
//                 description:
//                   "Generate your own electricity and reduce dependency on the grid",
//               },
//               {
//                 icon: <Battery className="h-8 w-8" />,
//                 title: "24/7 Power Supply",
//                 description:
//                   "Never worry about power cuts with battery backup systems",
//               },
//               {
//                 icon: <PiggyBank className="h-8 w-8" />,
//                 title: "Cost Savings",
//                 description:
//                   "Significant reduction in monthly electricity bills",
//               },
//               {
//                 icon: <Leaf className="h-8 w-8" />,
//                 title: "Eco-Friendly",
//                 description:
//                   "Reduce your carbon footprint and help protect the environment",
//               },
//             ].map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-card rounded-lg p-6 text-center"
//               >
//                 <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//                 <p className="text-muted-foreground">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-primary text-primary-foreground">
//         <div className="container">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="md:w-2/3"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Ready to Start Your Solar Journey?
//               </h2>
//               <p className="text-primary-foreground/90 text-lg">
//                 Our experts are here to help you transition to clean, renewable
//                 energy.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Button size="lg" variant="secondary" className="group">
//                 Contact Us Now
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sun,
  Battery,
  PiggyBank,
  Leaf,
  Home,
  Zap,
  Wrench,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import LeadForm from "@/components/forms/lead-form";

export default function ResidentialPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg"
            alt="Residential Solar Installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Switch to Affordable, Eco-Friendly Solar Energy
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Enjoy up to 90% savings on electricity with our residential solar
              solutions. We provide expert installation and support across Tamil
              Nadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Get Your Free Quote
            </h2>
            <LeadForm type="residential" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Residential Solar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of clean, renewable energy for your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="h-8 w-8" />,
                title: "Energy Independence",
                description:
                  "Generate your own electricity and reduce dependency on the grid",
              },
              {
                icon: <Battery className="h-8 w-8" />,
                title: "24/7 Power Supply",
                description:
                  "Never worry about power cuts with battery backup systems",
              },
              {
                icon: <PiggyBank className="h-8 w-8" />,
                title: "Cost Savings",
                description:
                  "Significant reduction in monthly electricity bills",
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Eco-Friendly",
                description:
                  "Reduce your carbon footprint and help protect the environment",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-muted/10">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Installation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              {
                step: "Site Survey & Proposal",
                icon: <Home />,
                desc: "We evaluate your property and energy needs for a tailored plan.",
              },
              {
                step: "Design & Development",
                icon: <Zap />,
                desc: "Custom solar systems designed for efficiency and compatibility.",
              },
              {
                step: "Procurement & Installation",
                icon: <Wrench />,
                desc: "We use high-quality materials and install with expert precision.",
              },
              {
                step: "Commissioning & Grid Connect",
                icon: <ShieldCheck />,
                desc: "Final system checks and seamless connection to the power grid.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="font-semibold text-xl mb-2">{item.step}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need for Solar */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Residential Solar Is Needed
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6">
            <li>
              Rising electricity bills place a financial burden on homeowners.
            </li>
            <li>
              Power outages and increasing demand make the grid less reliable.
            </li>
            <li>
              Environmental awareness is pushing homeowners to choose greener
              alternatives.
            </li>
            <li>
              Solar reduces reliance on external energy sources and lowers
              monthly costs.
            </li>
          </ul>
        </div>
      </section>

      {/* Uses of Solar */}
      <section className="py-16 bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How Can Solar Be Used at Home?
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6">
            <li>
              Powering lights, fans, TVs, refrigerators, and even electric cars.
            </li>
            <li>
              Running air conditioners and water heaters—high-energy
              devices—cost-efficiently.
            </li>
            <li>
              Providing backup power through solar battery systems during
              blackouts.
            </li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <ol className="list-decimal pl-6 text-lg space-y-4 text-muted-foreground">
            <li>
              Solar panels absorb sunlight and convert it into Direct Current
              (DC) electricity.
            </li>
            <li>
              The inverter converts DC electricity into usable Alternating
              Current (AC).
            </li>
            <li>
              Excess power is sent back to the grid through net metering,
              earning credits.
            </li>
          </ol>
        </div>
      </section>

      {/* Example Case Study */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Customer Success Story
          </h2>
          <div className="bg-card p-6 rounded-lg shadow-lg text-lg text-muted-foreground">
            <p>
              Our client, living in a 4BHK home with 2 air conditioners and an
              electric car, used to pay around ₹13,000 bi-monthly in electricity
              bills. After installing a 5kW solar system, the bill dropped to
              just ₹490—over 98% in savings. This is a clear example of how
              impactful and cost-effective solar energy can be.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
