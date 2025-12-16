"use client";

import { useState } from "react";

// Icons
import {
  FaJs,
  FaNodeJs,
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
      date: "Fall 2025",
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
      degree: "M.S. in Computer Science",
      gpa: "3.91 / 4.0",
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
    <section className="px-[6%] lg:px-[16%] py-16 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Sidebar */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-unbounded font-bold mb-4">
            Why hire me?
          </h2>

          <p className="text-gray-400 mt-4 mb-8 text-sm sm:text-base leading-relaxed">
            I learn fast, take ownership, and build software with discipline and intent.
            I focus on clarity, reliability, and long-term impact, not just shipping code.
          </p>

          <div className="flex flex-row lg:flex-col gap-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-md text-sm sm:text-base font-semibold transition
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

        {/* Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl lg:text-4xl font-unbounded font-bold mb-3">
            {activeTab}
          </h2>

          <p className="text-gray-400 mb-8 text-sm sm:text-base">
            A snapshot of my background, experience, and technical strengths.
          </p>

          {/* Experience */}
          {activeTab === "Experience" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-500/5 border border-gray-800 rounded-lg px-5 py-7
                  hover:border-[var(--primary-color)] transition"
                >
                  <h3 className="text-[color:var(--primary-color)] font-semibold mb-1 text-sm">
                    {exp.date}
                  </h3>
                  <h4 className="text-xl font-unbounded mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === "Education" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-500/5 border border-gray-800 rounded-lg px-5 py-7
                  hover:border-[var(--primary-color)] transition"
                >
                  <h3 className="text-[color:var(--primary-color)] font-semibold mb-1 text-sm">
                    {edu.year}
                  </h3>

                  <h4 className="text-xl font-unbounded mb-1">
                    {edu.degree}
                  </h4>

                  {edu.gpa && (
                    <p className="text-gray-300 text-sm mb-1">
                      GPA: <span className="font-semibold">{edu.gpa}</span>
                    </p>
                  )}

                  <p className="text-gray-400 text-sm">
                    {edu.institute}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === "Skills" && (
            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-gray-500/5 rounded-lg py-6 flex flex-col items-center
                  hover:text-[var(--primary-color)] transition"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <span className="text-xs text-gray-400">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* About Me */}
          {activeTab === "About me" && (
            <div className="text-gray-400 space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I’m{" "}
                <span className="text-[color:var(--primary-color)] font-semibold">
                  Shreyansh Patel
                </span>
                . I am a software engineer driven by systems thinking and intelligent automation.
                I enjoy turning complex problems into clean, scalable solutions.
              </p>

              <ul className="space-y-2">
                <li><strong>Experience:</strong> 1+ years</li>
                <li><strong>Nationality:</strong> Indian</li>
                <li><strong>Email:</strong> shrey9779@gmail.com</li>
                <li><strong>Languages:</strong> English, Gujarati, Hindi</li>
              </ul>

              <p>
                I work across C, C++, Python, and Java, focusing on performance,
                reliability, and maintainability.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
