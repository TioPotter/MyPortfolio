"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "This is the first landing page that I created",
    stack: [{ name: "Html 5" }, { name: "Css3" }],
    image: "/imagesweb/first.png",
    live: "https://erick-firstweb.netlify.app",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "This landing page is for a restaurant that I used to work",
    stack: [
      { name: "Html 5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "Jquery" },
    ],
    image: "/imagesweb/bambu.png",
    live: "https://tiopotter20.netlify.app",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "This web page was for practice using some libraries",
    stack: [{ name: "Html 5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/imagesweb/code.png",
    live: "https://tiopotter9.netlify.app",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description: "This web page has some animations using vanilla javascript",
    stack: [{ name: "Html 5" }, { name: "Css3" }, { name: "Javascript" }],
    image: "/imagesweb/EHC.png",
    live: "https://tiopotter15.netlify.app",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-neon-yellow">
                {project.category} project
              </h2>
              <p className="text-white/70">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-neon-yellow">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-neon-yellow" />
                        
                      </TooltipTrigger>
                      <span className="hover:text-neon-yellow ">Click to see the project</span>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                      <div className="absolute bottom-0 top-0 z-10 h-full w-full bg-black/10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-orange-200 hover:bg-neon text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
