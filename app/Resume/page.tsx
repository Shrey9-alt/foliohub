"use client";

import { useState } from "react";

// Icons
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaPython,
  FaSwift,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiLinux,
  SiXcode,
  SiPostman,
  SiGooglecloud,
  SiCloudflare,
} from "react-icons/si";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabs = ["Experience", "Education", "Skills", "About me"];

  // Experience
  const experiences = [
    {
      date: "Aug 2025 – Present",
      role: "Graduate Teaching Assistant",
      company: "Cleveland State University",
    },
    {
      date: "Jun 2023 – Nov 2023",
      role: "Geospatial Software Engineer",
      company: "Preppers Infotech",
    },
    {
      date: "Jan 2022 – Apr 2022",
      role: "Software Development Intern",
      company: "CodeCrew Infotech",
    },
  ];

  // Education
  const educations = [
    {
      year: "2024 – 2025",
      degree: "M.S. in Computer Science (GPA: 3.91/4.0)",
      institute: "Cleveland State University",
    },
    {
      year: "Jun 2022",
      degree: "B.E. in Computer Engineering",
      institute: "Gujarat Technical University",
    },
  ];

  // Skills
  const skills = [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "SQL", icon: <SiPostgresql /> },

    { name: "Linux", icon: <SiLinux /> },
    { name: "Swift", icon: <FaSwift /> },
    { name: "Xcode", icon: <SiXcode /> },

    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "REST APIs", icon: <SiPostman /> },

    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },

    { name: "AWS", icon: <FaAws /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Cloudflare", icon: <SiCloudflare /> },
  ];

  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Sidebar */}
        <div>
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            Why hire me?
          </h2>
          <p className="text-gray-400 mt-6 mb-10">
            A concise overview of my academic background, professional experience,
            and technical skill set focused on building reliable and scalable software.
          </p>

          <div className="flex flex-col gap-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer
                  ${
                    activeTab === tab
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2">
          <h2 className="text-4xl font-unbounded font-bold mb-4">
            {activeTab}
          </h2>
          <p className="text-gray-400 mb-10">
            Highlights of my experience, education, technical skills, and background.
          </p>

          {/* Experience */}
          {activeTab === "Experience" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 
                    border border-gray-800 rounded-lg px-5 py-10 
                    hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {exp.date}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                        •
                      </span>
                      {exp.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === "Education" && (
            <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educations.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-500/5 hover:bg-gray-500/10 
                    border border-gray-800 rounded-lg px-5 py-10 
                    hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                  >
                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">
                      {edu.year}
                    </h3>
                    <h4 className="text-3xl font-normal font-unbounded mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 flex items-center text-sm mt-2">
                      <span className="text-[color:var(--primary-color)] text-2xl pe-2">
                        •
                      </span>
                      {edu.institute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === "Skills" && (
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer bg-gray-500/5 rounded
                  py-11 flex flex-col items-center group"
                >
                  <i className="text-6xl group-hover:text-[color:var(--primary-color)] 
                  transition-all duration-500">
                    {skill.icon}
                  </i>
                  <span
                    className="absolute bottom-[5px] scale-0 rounded bg-gray-800 px-2 py-1 
                    font-semibold text-sm text-white transition-all duration-300 
                    group-hover:scale-100 group-hover:text-[color:var(--primary-color)]"
                  >
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* About Me */}
          {activeTab === "About me" && (
            <div className="text-gray-400 space-y-4">
              <p>
                Hi, I’m{" "}
                <span className="text-[color:var(--primary-color)] font-semibold">
                  Shreyansh Patel
                </span>
                , a software engineer driven by systems thinking and intelligent
                automation. I enjoy turning complex ideas into scalable, reliable
                systems with real-world impact.
              </p>

              <ul className="space-y-2">
                <li>
                  <strong>Experience:</strong> 1+ years in software engineering
                </li>
                <li>
                  <strong>Nationality:</strong> Indian
                </li>
                <li>
                  <strong>Phone:</strong> (+1) 609 289 7279
                </li>
                <li>
                  <strong>Email:</strong> shrey9779@gmail.com
                </li>
                <li>
                  <strong>Languages:</strong> English, Gujarati, Hindi
                </li>
              </ul>

              <p>
                I work across C, C++, Python, and Java, applying them to build
                efficient and scalable solutions.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
