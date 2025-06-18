import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

function Feature() {
  return (
    <div className="w-full py-16 lg:pb-[10%] pb-[80%]">
      <div className="container mx-auto">
        <div className="container grid items-center grid-cols-1 gap-8 p-8 border rounded-lg shadow-lg lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div>
                <Badge variant="outline">Types</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="max-w-xl text-3xl font-bold text-left lg:text-5xl">
                  Society Solar Types
                </h2>
                <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left text-muted-foreground">
                  Experience the benefits of clean, renewable energy for your
                  home
                </p>
              </div>
            </div>
            <div className="grid items-start grid-cols-1 gap-6 lg:pl-6 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex flex-row items-start gap-6">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Centralized System</p>
                  <p className="text-sm text-muted-foreground">
                    One large plant for entire society
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Rooftop for Individual Blocks</p>
                  <p className="text-sm text-muted-foreground">
                    Smaller systems installed per block
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-muted aspect-square">
            <Image
              src={"/Housing society page/housing (3).webp"}
              width={100}
              height={100}
              className="object-cover w-full h-full"
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
