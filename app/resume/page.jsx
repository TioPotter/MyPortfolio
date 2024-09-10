"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import CoolAnimation from "@/app/looties/CoolAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  icon: <CoolAnimation />,
  title: "About me",
  description:
    "I'm a dedicated and results-oriented professional with a passion for software developing. I thrive in fast-paced environments and enjoy working collaboratively with teams to achieve common goals. My ability to adapt to new challenges and seek innovative solutions drives me to excel in every project. When I'm not immersed in work, I enjoy unwinding with a good video game.",
  info: [
    {
      filedName: "Name",
      filedValue: "Erick Hidalgo",
    },
    {
      filedName: "Phone",
      filedValue: "(+591)68000629",
    },
    {
      filedName: "Email",
      filedValue: "tu.me.achou@gmail.com",
    },
    {
      filedName: "Nationality",
      filedValue: "Bolivia",
    },
    {
      filedName: "Freelance",
      filedValue: "Available",
    },
    {
      filedName: "Languages",
      filedValue: "Spanish, English, Portuguese",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Not a lot of experience but I can make your web app, that's important.",
  items: [
    {
      company: "ICEI TECH SRL",
      position: "Front End Developer",
      duration: "2024/03 - Present",
    },
  ],
};

const education = {
  icon: <CoolAnimation />,
  title: "My Education",
  description: "University, Courses and more...",
  items: [
    {
      institution: "UDABOL (Universidad de Aquino Bolivia)",
      degree: "System Engineering",
      duration: "2020 - Present",
    },
    {
      institution: "Google - Coursera",
      degree: "Foundations of User Experience UX Design",
      duration: "2021",
    },
    {
      institution: "Google Cloud Training - Coursera",
      degree: "Introduction to Digital Transformation with Google Cloud",
      duration: "2021",
    },
    {
      institution: "FreeCodeCamp ",
      degree: "Responsive Web Design",
      duration: "2021",
    },
    {
      institution: "Centro Boliviano Americano",
      degree: "English",
      duration: "2012 - 2014",
    },
    {
      institution: "Instituto Comercial Superior de la Nacion",
      degree: "Accounting",
      duration: "2010 - 2012",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "These are some of my skills...",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <IoLogoGithub />,
      name: "github",
    },

    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <GrMysql />,
      name: "mysql",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/70 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[40px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-neon-yellow">
                            {item.duration}
                          </span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-neon"></span>
                            <p className="text-white/70">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/70 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[40px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-neon-yellow">
                            {item.duration}
                          </span>
                          <h3 className="min-h-[60px] max-w-[400px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px] rounded-full bg-neon"></span>
                            <p className="text-white/70">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/70 xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-neon-yellow">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-neon-yellow">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex items-center gap-14">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                </div>
                <p className="mx-auto max-w-[600px] text-white/70 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/70">{item.filedName}:</span>
                        <span className="">{item.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
