"use client";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { FC, useEffect, useRef } from "react";

const Intro: FC = () => {
  // const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="px-[1rem] md:px-[2rem] lg:px-[4rem]">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]" ref={scope}>
          We blend clean code with modern design to build websites that not only
          look stunning but drive results for your business.
        </h2>
      </div>
    </section>
  );
};

export default Intro;

// "use client";
// import { useRef, useEffect } from "react";
// import { motion, useAnimation, useInView } from "motion/react";

// const sentence = `We blend clean code with modern design to build websites that not only look stunning but drive results for your business.`;

// const Intro = () => {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { once: true });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) controls.start("visible");
//   }, [isInView, controls]);

//   return (
//     <section ref={ref} className="section mt-12 md:mt-16 lg:mt-20" id="intro">
//       <div className="px-4 md:px-8 lg:px-16">
//         <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%] flex flex-wrap gap-x-2 overflow-hidden leading-tight">
//           {sentence.split(" ").map((word, i) => (
//             <motion.span
//               key={i}
//               className="inline-block"
//               initial="hidden"
//               animate={controls}
//               variants={{
//                 hidden: { y: "100%", opacity: 0 },
//                 visible: {
//                   y: 0,
//                   opacity: 1,
//                   transition: {
//                     duration: 0.5,
//                     delay: i * 0.04,
//                     ease: "easeOut",
//                   },
//                 },
//               }}
//             >
//               {word}&nbsp;
//             </motion.span>
//           ))}
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default Intro;
