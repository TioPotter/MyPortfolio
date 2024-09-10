"use client";

import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "From simple web pages, to complex web apps ",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Good design, good colors, good experience ",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description: "Everybody can find you. ",
    href: "",
  },
  {
    num: "04",
    title: "Logo Design",
    description: "Have a nice logo design ",
    href: "",
  },
];

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoverIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.8, duration: 0.4, ease: "easeOut" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            const isHovered = index === hoverIndex;
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6"
              >
                <div className="flex w-full items-center justify-between">
                  <div
                    className={`text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500 ${isHovered ? "text-outline-hover" : "text-neon"}`}
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className={`flex h-[50px] w-[50px] items-center justify-center rounded-full bg-neon transition-all duration-500 hover:-rotate-45 group-hover:bg-neon ${isHovered ? "bg-neon" : "bg-white"}`}
                  >
                    <GoArrowDownRight className="text-3xl text-black" />
                  </Link>
                </div>
                <h2
                  className={`text-[42px] font-bold leading-none text-white transition-all group-hover:text-neon-yellow ${isHovered ? "text-neon-yellow" : ""}`}
                >
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div
                  className={`w-full border-b border-[#EAB308] transition-all duration-200 ${isHovered ? "border-b-2 border-white" : ""}`}
                ></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
