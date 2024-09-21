import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-end">
          <h1 className='mx-2 text-3xl tracking-widest'>ST</h1>
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />

        </div>
    </nav>
  )
}

export default Navbar