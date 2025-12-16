"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

import { FiGithub, FiExternalLink, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ProjectSlider() {
  const projects = [
    {
      id: "01",
      title: "Audio Quality Analyzer",
      desc: "Built an audio processing pipeline to record, denoise, and evaluate speech quality using automated metrics and waveform analysis. Designed to simulate real-world audio testing and validation workflows.",
      img: "/Project-1.jpg",
      live: "#",
      github: "https://github.com/Shrey9-alt",
    },
    {
      id: "02",
      title: "Swift Crash Logger & Analyzer",
      desc: "Developed a Swift-based telemetry generator and Python analysis pipeline to simulate OS update failures. Analyzed crash patterns and demonstrated low-level debugging workflows using LLDB.",
      img: "/Project-2.jpg",
      live: "#",
      github: "https://github.com/Shrey9-alt",
    },
    {
      id: "03",
      title: "Open Source Contributions & Experiments",
      desc: "Active contributor to open-source projects and personal repositories on GitHub, working across system-level utilities, backend scripts, and experimental tools focused on reliability and performance.",
      img: "/Project-3.jpg",
      live: "#",
      github: "https://github.com/Shrey9-alt",
    },
  ];

  return (
    <section className="px-[6%] lg:px-[16%] py-16 text-white">
      <Swiper
        modules={[Navigation]}
        loop
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">

              {/* Image FIRST on mobile */}
              <div className="w-full flex justify-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={360}
                  className="rounded-xl shadow-lg w-full max-w-[420px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-8xl font-bold text-gray-700">
                  {project.id}
                </h2>

                <h3 className="text-2xl lg:text-5xl font-unbounded font-semibold mt-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 text-sm lg:text-lg leading-relaxed">
                  {project.desc}
                </p>

                {/* Links */}
                <div className="flex justify-center lg:justify-start gap-5 mt-6">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10
                    hover:bg-white hover:text-black transition"
                  >
                    <FiExternalLink className="text-xl" />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10
                    hover:bg-white hover:text-black transition"
                  >
                    <FiGithub className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="flex justify-center lg:justify-end gap-4 mt-10">
          <button className="custom-prev w-11 h-11 flex items-center justify-center bg-[var(--primary-color)]
          text-white rounded hover:bg-white hover:text-black transition">
            <FiArrowLeft className="text-xl" />
          </button>

          <button className="custom-next w-11 h-11 flex items-center justify-center bg-[var(--primary-color)]
          text-white rounded hover:bg-white hover:text-black transition">
            <FiArrowRight className="text-xl" />
          </button>
        </div>
      </Swiper>
    </section>
  );
}
