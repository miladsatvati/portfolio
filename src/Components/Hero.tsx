import myphoto from "../assets/downloaded/pexels-pramodtiwari-14016664.jpg"
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Milad satvati
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tighter text-transparent">
              Front End Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Hi, I'm Milad Satvati, a 26-year-old frontend developer from Iran
              with a bachelor's degree in IT. I'm new to programming but
              passionate about learning and growing in this field. My current
              skills include HTML, CSS, JavaScript, TypeScript, Tailwind, and
              React, and I'm excited to continue expanding my knowledge and
              abilities in web development.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={myphoto} alt="milad" className="rounded-lg lg:h-[36rem] md:h-[30rem] sm:h-[26rem]  " />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// className="rounded-2xl lg:h-96 h-44 "
