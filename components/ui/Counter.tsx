'use client'
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    label: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, label }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, end, duration]);

    return (

        <div
            ref={counterRef}
            className={`bg-white rounded-lg p-8 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center text-center min-h-[180px] shadow-sm border border-2 border-green-400`}
        >
            <div className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">
                {count}+
            </div>
            <div className="text-gray-500 text-sm sm:text-base font-medium">
                {label}
            </div>
        </div>
    );
};

const CounterStatsSection: React.FC = () => {
    const stats = [
        { end: 500, label: 'Happy Clients' },
        { end: 1000, label: 'Completed Projects' },
        { end: 250, label: 'On Going Projects' },
        { end: 25, label: 'Offices through out GLOBE' },
    ];

    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/about/4.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Counter
                            key={index}
                            end={stat.end}
                            label={stat.label}
                            duration={2000}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterStatsSection;