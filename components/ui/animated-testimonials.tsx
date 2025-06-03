"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Quote, Star } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
  youtubeUrl?: string;
  rating?: number;
  company?: string;
}

export interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
  className?: string;
}

function extractYouTubeID(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it...",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const playerRef = useRef<any>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Load YouTube API
  useEffect(() => {
    if ((window as any).YT) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }, []);

  // Create player on iframe ready, always destroy previous player before creating new one
  useEffect(() => {
    if (!testimonials[activeIndex]?.youtubeUrl) return;

    if (playerRef.current) {
      playerRef.current.destroy?.();
      playerRef.current = null;
    }

    const interval = setInterval(() => {
      const iframe = document.getElementById(
        `youtube-player-${activeIndex}`
      ) as HTMLIFrameElement;

      if (iframe && (window as any).YT && !playerRef.current) {
        playerRef.current = new (window as any).YT.Player(
          `youtube-player-${activeIndex}`,
          {
            events: {
              onStateChange: (event: any) => {
                const YT = (window as any).YT;
                switch (event.data) {
                  case YT.PlayerState.PLAYING:
                    setAutoScrollPaused(true);
                    break;
                  case YT.PlayerState.PAUSED:
                  case YT.PlayerState.ENDED:
                    setAutoScrollPaused(false);
                    break;
                  default:
                    break;
                }
              },
            },
          }
        );
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
      if (playerRef.current) {
        playerRef.current.destroy?.();
        playerRef.current = null;
      }
    };
  }, [activeIndex, testimonials]);

  // Animate in on view
  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // Auto-rotate logic
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      if (!autoScrollPaused) {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval, testimonials.length, autoScrollPaused]);

  if (testimonials.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`lg:p-[5%] px-[2%] py-[10%] container overflow-hidden ${
        className || ""
      }`}
    >
      <div className="px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24"
        >
          {/* Left */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
                  <span>{badgeText}</span>
                </div>
              )}
              <h2 className="max-w-2xl text-4xl font-extrabold md:text-5xl text-black/80">
                {title}
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                {subtitle}
              </p>
              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-primary"
                        : "w-2.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={itemVariants} className=" relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full "
              >
                {/* Decorative corners */}
                <div className="absolute w-24 h-24 -bottom-6 -left-6 rounded-xl  bg-primary/50 z-10"></div>
                <div className="absolute w-24 h-24 -top-6 -right-6 rounded-xl bg-primary/50 z-10"></div>

                <div className="relative flex flex-col p-8 border z-30 shadow-lg rounded-2xl bg-white  w-full">
                  {/* Content */}
                  <div className="relative z-10 w-full flex-1 mb-6">
                    {testimonials[activeIndex].youtubeUrl ? (
                      <div className="w-full aspect-video overflow-hidden ">
                        <iframe
                          id={`youtube-player-${activeIndex}`}
                          className="w-full h-full "
                          src={`https://www.youtube.com/embed/${extractYouTubeID(
                            testimonials[activeIndex].youtubeUrl!
                          )}?enablejsapi=1`}
                          title={`Testimonial video by ${testimonials[activeIndex].name}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <>
                        <Quote className="absolute w-8 h-8 rotate-180 -top-2 -left-2 text-primary/20" />
                        <p className="relative z-30 text-lg font-medium leading-relaxed">
                          {testimonials[activeIndex].content}
                        </p>
                      </>
                    )}
                  </div>

                  <Separator className="my-4 z-30" />

                  <div className="flex items-center gap-4 z-30">
                    <Avatar className="w-12 h-12 border">
                      <AvatarImage
                        src={testimonials[activeIndex].imageUrl}
                        alt={testimonials[activeIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[activeIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].role}
                        {testimonials[activeIndex].company &&
                          `, ${testimonials[activeIndex].company}`}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
