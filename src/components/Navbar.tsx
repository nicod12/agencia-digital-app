"use client"

import { useState } from "react";
import { Poppins } from "next/font/google";
import { FiAlignJustify } from "react-icons/fi";
import { FcBusiness } from "react-icons/fc";
import { RiCloseLine } from "react-icons/ri";
import 'animate.css';


const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function Navbar() {

    const [open,setOpen] = useState(false)
    
    const openMenu = () => {
        setOpen((prev) => !prev)
    }

    const mobileMenu = (
        <section 
         className={`flex flex-col items-start justify-items-start  fixed top-[70px] ${open ? "right-0 animate__animated animate__slideInRight animate__fast " : ""}  w-[300px] h-[100vh] pt-[40px] pl-[10px] bg-[#1a1818] `}
        >
           <div>
            <ul className={`grid grid-cols-1 items-center justify-center text-center text-xl p-20 ${poppins.className} uppercase`}>
                    <li className="my-4 py-4 px-2 border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                        Portafolio
                    </li>
                    <li className="my-4 py-4 px-2  border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                        Servicios
                    </li >
                    <li className="my-4 py-4 px-2  border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                        Como funciona
                    </li>
                    <li className="my-4 py-4 px-2  border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                        Sobre nosotros
                    </li>
                </ul>
           </div>
        </section>
    )
    return (
        <nav className="shadow-md lg:shadow-none lg:py-4">
            <section className="flex justify-between items-center fixed lg:static top-4 lg:top-0 left-0 right-0 z-50 px-8 lg:px-0">
                <div className="flex items-center gap-1 font-bold">
                    <span className="text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl"><FcBusiness /></span>
                    <h1 className="text-2xl lg:text-5xl xl:text-5xl 2xl:text-5xl">DK</h1>
                    <span className={`lg:text-2xl xl:text-2xl 2xl:text-2xl ${poppins.className}`}>Agencia Digital</span>
                    
                </div>
                <div>
                        <ul className={`hidden lg:flex xl:flex 2xl:flex flex-row gap-6 justify-between lg:text-lg  ${poppins.className} uppercase`}>
                            <li className=" hover:border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Portafolio
                            </li>
                            <li className="  hover:border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Servicios
                            </li >
                            <li className="  hover:border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Como funciona
                            </li>
                            <li className="  hover:border-b border-[#30302f] hover:bg-[#252b2e] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Sobre nosotros
                            </li>
                        </ul>
                    <button
                      aria-label="icon"
                      type="button"
                      className="text-3xl py-2 lg:hidden"
                      onClick={openMenu}
                    >
                        {
                            open? (<RiCloseLine />) : (<FiAlignJustify />)
                        }
                    </button>
                </div>
                {
                    open? mobileMenu : null
                }
            </section>
        </nav>
   )

}