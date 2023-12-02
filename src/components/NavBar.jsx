"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
    let current = usePathname();
  return (
    <nav className='py-6 bg-green-50'>
        <div className="container mx-auto px-4">
            <div className='menu bg-transparent flex flex-col md:flex-row flex-wrap items-center justify-between'>
                <div>
                    <a href="#">
                        <img className='h-6' src="images/DesignAGENCY.png" alt="" />
                    </a>
                </div>
                <div className='flex justify-between flex-col md:flex-row items-center'>
                    <ul className='flex flex-col md:flex-row mb-3 md:mb-0'>
                        <li className='ml-8 font-bold'>
                            <Link className={current==="/"?" text-green-600 font-bold":"text-sm text-black hover:text-gray-500 "} href="/">Home</Link>
                        </li>
                        <li className='ml-8 font-bold'>
                            <Link className={current==="/team"?" text-green-600 font-bold":"text-sm text-black hover:text-gray-500 "} href="/team">Team</Link>
                        </li>
                        <li className='ml-8 font-bold'>
                            <Link className={current==="/services"?" text-green-600 font-bold":"text-sm text-black hover:text-gray-500 "} href="/services">Service</Link>
                        </li>
                        <li className='ml-8 font-bold'>
                            <Link className={current==="/projects"?" text-green-600 font-bold":"text-sm text-black hover:text-gray-500 "} href="/projects">Projects</Link>
                        </li>
                        <li className='ml-8 font-bold'>
                            <Link  className={current==="/testimonials"?" text-green-600 font-bold":"text-sm text-black hover:text-gray-500 "} href="/testimonials">Testimonials</Link>
                        </li>
                    </ul>
                    <div className='ml-8'>
                        <button className='text-base font-bold text-black px-6 py-2 rounded-lg box-border transition duration-500 border-green-500 hover:bg-green-500 border-2'>Login</button>
                        <button className='ml-8 text-base font-bold text-white px-6 py-2 rounded-lg box-border transition duration-500 hover:border-green-500 hover:bg-transparent hover:text-black bg-green-500 border-2'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar