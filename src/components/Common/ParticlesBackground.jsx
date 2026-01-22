import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particlesCount = 200;

    const colors = [
      "rgba(255, 99, 132, 0.8)",   // pink
      "rgba(54, 162, 235, 0.8)",   // blue
      "rgba(255, 206, 86, 0.8)",   // yellow
      "rgba(75, 192, 192, 0.8)",   // green
      "rgba(153, 102, 255, 0.8)",  // purple
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 0.7+1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - .2) * 1;
        this.speedY = (Math.random() - .2) * 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.draw();
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle());
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dark:fixed absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;
