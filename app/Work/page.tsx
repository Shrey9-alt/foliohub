"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import { FaReact, FaJsSquare, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import {
  FiGithub,
  FiExternalLink,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

export default function ProjectSlider() {
  const projects = [
    {
      id: "01",
      title: "Audio Quality Analyzer",
      desc: "Built an audio processing pipeline to record, denoise, and evaluate speech quality using automated metrics and waveform analysis. Designed to simulate real-world audio testing and validation workflows.",
      tech: ["Python", "Signal Processing", "NumPy", "librosa"],
      img: "/Project-1.jpg",
      live: "#",
      github: "https://github.com/Shrey9-alt",
    },
    {
      id: "02",
      title: "Swift Crash Logger & Analyzer",
      desc: "Developed a Swift-based telemetry generator and Python analysis pipeline to simulate OS update failures. Analyzed crash patterns and demonstrated low-level debugging workflows using LLDB.",
      tech: ["Swift", "Python", "LLDB"],
      img: "/Project-2.jpg",
      live: "#",
      github: "https://github.com/Shrey9-alt",
    },
    {
      id: "03",
      title: "Open Source Contributions & Experiments",
      desc: "Active contributor to open-source projects and personal repositories on GitHub, working across system-level utilities, backend scripts, and experimental tools focused on reliability and performance.",
      tech: ["C", "C++", "Python", "Swift", "Linux"],
      img: "/Project-3.jpg",
      live: "#",
      github: "https://github.com/Shrey9-alt",
    },
  ];

  return (
    <div className="px-[8%] lg:px-[16%] py-15 text-white">
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side */}
              <div className="work-content">
                <h2 className="text-8xl font-bold stroke-text">
                  {project.id}
                </h2>
                <h3 className="text-5xl font-semibold font-unbounded mt-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-3 text-lg leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Icons */}
                <div className="flex gap-4 mt-4">
                  {project.tech.map((tech, index) => {
                    let IconComponent = null;
                    switch (tech.toLowerCase()) {
                      case "react js":
                        IconComponent = FaReact;
                        break;
                      case "tailwind css":
                        IconComponent = SiTailwindcss;
                        break;
                      case "javascript":
                        IconComponent = FaJsSquare;
                        break;
                      case "bootstrap css":
                        IconComponent = FaBootstrap;
                        break;
                      case "figma":
                        IconComponent = FaFigma;
                        break;
                      case "motion":
                        IconComponent = SiFramer;
                        break;
                      default:
                        IconComponent = null;
                    }
                    return IconComponent ? (
                      <div
                        key={index}
                        className="text-4xl text-[color:var(--primary-color)] hover:text-white transition-all duration-300"
                        title={tech}
                      >
                        <IconComponent />
                      </div>
                    ) : null;
                  })}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-6 border-t border-gray-500 pt-5">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/5
                    hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FiExternalLink className="text-2xl" />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500/5
                    hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FiGithub className="text-2xl" />
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative work-image">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={650}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="flex gap-3 justify-end mt-6">
          <button className="custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
          text-white rounded shadow hover:bg-white hover:text-black transition-all duration-300">
            <FiArrowLeft className="text-2xl" />
          </button>

          <button className="custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
          text-white rounded shadow hover:bg-white hover:text-black transition-all duration-300">
            <FiArrowRight className="text-2xl" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
