import React, { useEffect, useRef, useState } from 'react';

const StarryBackground = () => {
    const canvasRef = useRef(null);
    const [backgroundColor, setBackgroundColor] = useState('black'); // Initial background color

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let particles = [];
        const numParticles = 100;
        const maxLineDistance = 100;
        const mouse = { x: null, y: null, radius: 100 };

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 0.5 + 0.2;
                this.radius = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            drawLine() {
                for (let i = 0; i < particles.length; i++) {
                    let distance = Math.sqrt((this.x - particles[i].x) ** 2 + (this.y - particles[i].y) ** 2);
                    if (distance < maxLineDistance) {
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.strokeStyle = 'white';
                        ctx.lineWidth = 0.2;
                        ctx.stroke();
                    }
                }
            }

            move() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.drawLine();
                p.move();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        // Function to generate a new random color
        const generateRandomColor = () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        };

        // Interval for changing background color
        const colorChangeInterval = setInterval(() => {
            const newColor = generateRandomColor();
            setBackgroundColor(newColor);
        }, 20000); // Change color every 5000 milliseconds (5 seconds)

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
            clearInterval(colorChangeInterval);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: `linear-gradient(to right, ${backgroundColor}, indigo)`,
            transition: 'background-color 5s ease-in-out', // Smooth transition for background
            zIndex: -1
          }}>
            <canvas ref={canvasRef} style={{
              width: '100%',
              height: '100%'
            }} />
          </div>
    );
};

export default StarryBackground;
