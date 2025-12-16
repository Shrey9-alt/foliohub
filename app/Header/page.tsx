"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/Hero.png";
import { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

export default function Header() {
  const statsData = [
    { value: 1, label: "Year of\nExperience" },
    { value: 10, label: "Projects\nBuilt" },
    { value: 12, label: "Technologies\nUsed" },
    { value: 500, label: "Code\nCommits" },
  ];

  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
        });
        if (!countUp.error) {
          countUp.start();
        }
      }
    });
  }, []);

  return (
    <header className="min-h-screen text-white py-10 lg:py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[240px] h-[240px] rounded-full 
        bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[120px] -z-10" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full 
        bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[140px] -z-10" />

      <div className="absolute bottom-0 left-[15%] w-[400px] h-[400px] rounded-full 
        bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[140px] -z-10" />

      <div className="flex flex-col lg:flex-row items-center justify-between px-[6%] sm:px-[8%] lg:px-[16%]">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-left">
          <p className="text-sm sm:text-base mb-2 text-gray-400">
            Software Engineer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
            font-unbounded font-normal mb-4 leading-tight">
            Hello I&apos;m{" "}
            <span className="text-[color:var(--primary-color)] block sm:inline">
              Shreyansh Patel
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl 
            font-normal font-sora my-6 max-w-xl">
            I build reliable, scalable software with care and purpose.
            I learn fast, adapt quickly, and focus on creating systems
            teams can trust and grow with.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border border-[var(--primary-color)] font-semibold 
                text-[color:var(--primary-color)] px-6 py-3 rounded 
                hover:bg-[var(--primary-color)] hover:text-white 
                transition-all duration-300"
            >
              Download Resume
            </Link>

            <div className="flex gap-5 items-center">
              <Link
                href="https://github.com/Shrey9-alt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-2xl text-gray-400 hover:text-[var(--primary-color)] transition"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shreyanshpatel09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-gray-400 hover:text-[var(--primary-color)] transition"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center">
          <div
            className="relative 
              w-[260px] h-[260px] 
              sm:w-[320px] sm:h-[320px] 
              lg:w-[400px] lg:h-[400px] 
              rounded-full overflow-hidden 
              bg-gradient-to-r from-[var(--hero-image-from)] to-[var(--hero-image-to)]"
          >
            <Image
              src={Hero}
              alt="Profile Picture"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats (Desktop only) */}
      <div className="stats px-[8%] lg:px-[16%] mt-24 hidden lg:grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <div key={index} className="flex gap-3 items-center">
            <h1
              ref={(el) => {
                countRefs.current[index] = el;
              }}
              className="text-6xl font-unbounded font-bold"
            >
              0
            </h1>
            <p className="text-lg ps-3 text-gray-400 font-semibold whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
