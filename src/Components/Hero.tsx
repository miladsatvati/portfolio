import myphoto from "../assets/downloaded/pexels-pramodtiwari-14016664.jpg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visibale: {
    x: 0,
    opacity: 1,
    transition: { duration: delay, delay: delay },
  },
});

const SecondContainer = (delay:number) => ({
  hidden: {x: 100, opacity: 0},
  visibale:{
    x: 0,
    opacity: 1,
    transition: {duration: delay, delay: delay}
  }
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visibale"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Milad satvati
            </motion.h1>
            <motion.span
              variants={SecondContainer(1)}
              initial="hidden"
              animate="visibale"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1.2)}
              initial="hidden"
              animate="visibale"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Hi, I'm Milad Satvati, a 26-year-old frontend developer from Iran
              with a bachelor's degree in IT. I'm new to programming but
              passionate about learning and growing in this field. My current
              skills include HTML, CSS, JavaScript, TypeScript, Tailwind, and
              React, and I'm excited to continue expanding my knowledge and
              abilities in web development.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={SecondContainer(1.5)}
              initial='hidden'
              animate='visibale'
              src={myphoto}
              alt="milad"
              className="rounded-lg lg:h-[36rem] md:h-[30rem] sm:h-[26rem]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// className="rounded-2xl lg:h-96 h-44 "
