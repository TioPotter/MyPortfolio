"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    num: 1,
    text: "Year of experience",
  },
  {
    num: 3,
    text: "Spoken Languages",
  },
  {
    num: 9,
    text: "Technologies Learned",
  },
  {
    num: 60,
    text: "Code commits",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detecta si el elemento está en vista
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true); // Inicia el conteo cuando el elemento es visible
    }
  }, [isInView]);

  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none"
        >
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                {startCount && ( // Solo muestra CountUp si startCount es true
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={1}
                    className="text-4xl font-extrabold xl:text-6xl"
                  />
                )}
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
