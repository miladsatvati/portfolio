import mePhoto from "../assets/downloaded/pexels-negativespace-169573.jpg";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visibale: {
    x: 0,
    opacity: 1,
    transition: { duration: delay, delay: delay },
  },
});
const SecondContainer = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visibale: {
    x: 0,
    opacity: 1,
    transition: { duration: delay, delay: delay },
  },
});
function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center  justify-center">
            <img src={mePhoto} className="rounded-2xl w-[34rem]" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center items-center lg:justify-start">
            <p className="flex my-2 max-w-xl py-6">
              Hi, I'm Milad Satvati, a 26-year-old frontend developer from Iran
              with a bachelor's degree in IT. I'm new to programming but
              passionate about learning and growing in this field. My current
              skills include HTML, CSS, JavaScript, TypeScript, Tailwind, and
              React, and I'm excited to continue expanding my knowledge and
              abilities in web development. Hi, I'm Milad Satvati, a 26-year-old
              frontend developer from Iran with a bachelor's degree in IT. I'm
              new to programming but passionate about learning and growing in
              this field. My current skills include HTML, CSS, JavaScript,
              TypeScript, Tailwind, and React, and I'm excited to continue
              expanding my knowledge and abilities in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
