import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { MdHtml } from "react-icons/md";
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-start justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <MdHtml className="text-7xl text-cyan-400 " />
        </div>
      </div>
    </div>
  )
}

export default Technologies