"use client";

import { useEffect, useRef } from "react";

const AshParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ashParticles: AshParticle[] = [];
  let numParticles = 200;

  class AshParticle {
    x!: number;
    y!: number;
    sizeX!: number;
    sizeY!: number;
    opacity!: number;
    speedX!: number;
    speedY!: number;
    fadeSpeed!: number;
    rotationX!: number;
    rotationY!: number;
    rotationZ!: number;
    rotationXSpeed!: number;
    rotationYSpeed!: number;
    rotationZSpeed!: number;
    scaleX!: number;
    scaleY!: number;

    constructor(isInitial = false) {
      this.init(isInitial);
    }

    init(isInitial = false) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const isFromLeft = Math.random() < 0.5;

      this.x = isInitial
        ? Math.random() * canvas.width
        : isFromLeft
        ? -10
        : Math.random() * canvas.width;

      this.y = isInitial
        ? Math.random() * canvas.height
        : isFromLeft
        ? Math.random() * canvas.height
        : canvas.height + 10;

      this.sizeX = Math.random() * 2 + 0.5;
      this.sizeY = Math.random() * 8 + 2;
      this.opacity = Math.random() * 0.6 + 0.1;
      this.speedX = Math.random() * 1.5 + 0.5;
      this.speedY = -(Math.random() * 1.5 + 0.5);
      this.fadeSpeed = Math.random() * 0.0008 + 0.0003;

      this.rotationX = 0;
      this.rotationY = 0;
      this.rotationZ = 0;
      this.rotationXSpeed = Math.random() * 0.1 - 0.05;
      this.rotationYSpeed = Math.random() * 0.1 - 0.05;
      this.rotationZSpeed = Math.random() * 0.1 - 0.05;

      this.scaleX = 1;
      this.scaleY = 1;
    }

    checkBounds() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      if (this.y < -50 || this.x > canvas.width + 50 || this.opacity <= 0) {
        this.init();
      }
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity -= this.fadeSpeed;

      this.rotationX += this.rotationXSpeed;
      this.rotationY += this.rotationYSpeed;
      this.rotationZ += this.rotationZSpeed;

      const cosX = Math.cos(this.rotationX);
      const cosY = Math.cos(this.rotationY);
      this.scaleY = 0.8 + 0.2 * cosX;
      this.scaleX = 0.8 + 0.2 * cosY;

      this.checkBounds();
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotationZ);
      ctx.scale(this.scaleX, this.scaleY);

      const rot = Math.cos(this.rotationZ);
      const red = 255 - Math.abs(rot) * 80;
      const green = 100 + Math.abs(rot) * 80;
      const blue = 50 + Math.abs(rot) * 30;

      ctx.beginPath();
      ctx.ellipse(0, 0, this.sizeX, this.sizeY, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.floor(red)}, ${Math.floor(
        green
      )}, ${Math.floor(blue)}, ${this.opacity})`;
      ctx.fill();
      ctx.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      numParticles = Math.floor((canvas.width * canvas.height) / 6000);
      updateParticles();
    };

    const updateParticles = () => {
      const diff = numParticles - ashParticles.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          ashParticles.push(new AshParticle(true));
        }
      } else if (diff < 0) {
        ashParticles.length = numParticles;
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of ashParticles) {
        particle.update();
        particle.draw(ctx);
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default AshParticles;
