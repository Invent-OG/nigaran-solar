// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { ArrowRight, Users, Wallet, Trophy, BadgeCheck } from "lucide-react";

// export default function SolarProPage() {
//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Become a Nigaran Solar Pro
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Join our network of solar professionals and earn rewards while
//               helping others transition to clean energy.
//             </p>
//           </motion.div>

//           {/* Benefits */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             {[
//               {
//                 icon: <Wallet className="h-8 w-8" />,
//                 title: "Earn Rewards",
//                 description:
//                   "Attractive commissions for every successful referral",
//               },
//               {
//                 icon: <Users className="h-8 w-8" />,
//                 title: "Help Your Network",
//                 description: "Enable your community to save on energy costs",
//               },
//               {
//                 icon: <Trophy className="h-8 w-8" />,
//                 title: "Growth Opportunities",
//                 description: "Access to training and professional development",
//               },
//               {
//                 icon: <BadgeCheck className="h-8 w-8" />,
//                 title: "Expert Support",
//                 description: "Dedicated team to help you succeed",
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

//           {/* Application Form */}
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-6">Join Our Network</h2>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium mb-1 block">
//                     First Name
//                   </label>
//                   <Input placeholder="John" />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium mb-1 block">
//                     Last Name
//                   </label>
//                   <Input placeholder="Doe" />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-sm font-medium mb-1 block">Email</label>
//                 <Input type="email" placeholder="john@example.com" />
//               </div>
//               <div>
//                 <label className="text-sm font-medium mb-1 block">Phone</label>
//                 <Input type="tel" placeholder="+91 98765 43210" />
//               </div>
//               <div>
//                 <label className="text-sm font-medium mb-1 block">
//                   Location
//                 </label>
//                 <Input placeholder="City, State" />
//               </div>
//               <div>
//                 <label className="text-sm font-medium mb-1 block">
//                   Profession
//                 </label>
//                 <Input placeholder="Current Profession" />
//               </div>
//               <div>
//                 <label className="text-sm font-medium mb-1 block">
//                   Why do you want to join?
//                 </label>
//                 <Textarea
//                   placeholder="Tell us about your interest in solar energy..."
//                   className="min-h-[100px]"
//                 />
//               </div>
//               <Button className="w-full">
//                 Submit Application
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Users, Wallet, Trophy, BadgeCheck } from "lucide-react";

export default function SolarProPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become a Nigaran Solar Pro
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our network of solar professionals and earn rewards while
              helping others transition to clean energy.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Wallet className="h-8 w-8" />,
                title: "Earn Rewards",
                description:
                  "Attractive commissions for every successful referral",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Help Your Network",
                description: "Enable your community to save on energy costs",
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Growth Opportunities",
                description: "Access to training and professional development",
              },
              {
                icon: <BadgeCheck className="h-8 w-8" />,
                title: "Expert Support",
                description: "Dedicated team to help you succeed",
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

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-lg mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Join Our Network</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone</label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Location
                </label>
                <Input placeholder="City, State" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Profession
                </label>
                <Input placeholder="Current Profession" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Why do you want to join?
                </label>
                <Textarea
                  placeholder="Tell us about your interest in solar energy..."
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full">
                Submit Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="prose prose-neutral max-w-4xl mx-auto"
          >
            <h2>Solar Pro</h2>
            <p>
              Join our solar referral program and become a Solar Pro with
              Nigaran Solar. If you know someone looking to install a solar
              system, simply refer them and earn rewards when the installation
              is successful. Whether you're a customer or just someone
              passionate about sustainability, our refer and earn solar program
              is a great way to contribute to a cleaner future while benefiting
              from your network. Spread the word, share your experience, and get
              rewarded through the Nigaran Solar Pro rewards system.
            </p>

            <h3>How It Works</h3>
            <ul>
              <li>Signup</li>
              <li>Refer</li>
              <li>Earn</li>
            </ul>

            <h3>Ready to Join?</h3>
            <p>Form:</p>
            <ul>
              <li>Full Name (Required)</li>
              <li>Phone Number (Required)</li>
              <li>Email Address (Required)</li>
              <li>Location / Operating Region (Required)</li>
              <li>Profession (Required)</li>
            </ul>
            <p>CTA: Grow with us</p>

            <h3>Who Can Join Solar Pro?</h3>
            <ul>
              <li>Homeowners or customers who’ve already installed solar</li>
              <li>Electricians, plumbers, and local service providers</li>
              <li>Real estate agents and housing society managers</li>
              <li>Influencers or bloggers in the home improvement niche</li>
              <li>Anyone with a strong local network</li>
            </ul>

            <h3>Why Refer with Nigaran Solar?</h3>
            <ul>
              <li>
                Trusted Brand: MNRE-approved solar company with 500+ successful
                installations.
              </li>
              <li>
                Faster Conversions: Dedicated team ensures your leads are
                followed up professionally.
              </li>
              <li>
                Transparent Tracking: You’ll be notified at every stage — from
                lead to installation.
              </li>
              <li>
                Timely Payouts: Receive your commissions via UPI or bank
                transfer at right time.
              </li>
            </ul>

            <h3>Need</h3>
            <ul>
              <li>
                As the solar energy market grows, more and more people are
                looking to adopt renewable energy solutions.
              </li>
              <li>
                Many homeowners and businesses are interested in solar but need
                trustworthy guidance.
              </li>
              <li>
                The Solar Pro Referral Program helps spread awareness about
                solar energy while providing a way to earn commissions.
              </li>
              <li>
                This program taps into the potential for earning income from
                helping others switch to a cleaner energy source.
              </li>
            </ul>

            <h3>Uses</h3>
            <ul>
              <li>
                Referral Program: Earn commissions by referring customers who
                install with Nigaran Solar.
              </li>
              <li>
                Income Opportunity: Share solar benefits with your network and
                get paid.
              </li>
              <li>
                Spread Awareness: Promote the environmental and financial
                benefits of solar power.
              </li>
            </ul>

            <h3>Benefits</h3>
            <ul>
              <li>
                Earn Passive Income: Commission for every successful
                installation.
              </li>
              <li>No Investment Required: Just refer and earn.</li>
              <li>Support Clean Energy: Help build a sustainable future.</li>
              <li>
                Flexible Earning Potential: The more you refer, the more you
                earn.
              </li>
              <li>
                Easy Process: Get support and guidance from Nigaran Solar.
              </li>
            </ul>

            <h3>How it Works</h3>
            <ul>
              <li>Sign Up for the program.</li>
              <li>Refer potential customers.</li>
              <li>Earn Commission after installation.</li>
            </ul>

            <p>
              <strong>Solar Calculator:</strong> Curious about how much you
              could save with solar?
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
