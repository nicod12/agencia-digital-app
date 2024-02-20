"use client"
import { useState } from "react";
import { Poppins } from "next/font/google";
import { FiAlignJustify } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";



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
        <AnimatePresence>   
           {
            open && ( <motion.section 
                className={`lg:hidden flex flex-col items-start justify-items-start  fixed top-[40px] ${open ? "right-0 shadow-lg  " : ""}  w-[300px] h-[100vh] pt-[40px] pl-[10px] bg-[#1a1818] `}
                initial={{ x: 300, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{duration: 0.5}}
                exit={{ opacity: 0 }}
               >
                   <div className="flex flex-col">
                    <ul className={`grid grid-cols-1 items-center justify-center text-center text-[14px] sm:text-xl px-20 py-16 ${poppins.className} uppercase`}>
                            <li className="my-6 sm:my-4 sm:py-4 px-2 border-b border-[#96449B] hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out ">
                                Portafolio
                            </li>
                            <li className="my-6  sm:my-4 sm:py-4  border-b border-[#96449B] hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Servicios
                            </li >
                            <li className="my-6  sm:my-4 sm:py-4  border-b border-[#96449B] hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Como funciona
                            </li>
                            <li className="my-6  sm:my-4 sm:py-4  border-b border-[#96449B] hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out">
                                Sobre nosotros
                            </li>
                        </ul>
                    <div className="flex justify-center">
                     <button className="lg:hidden xl:hidden 2xl:hidden text-[14px] sm:text-2xl border border-white hover:bg-[#96449B] hover:border-[#96449B] hover:text-slate-300 rounded-md uppercase py-3 px-6 sm:py-4 sm:px-8">Agendar</button>
                    </div>
                   </div>
               </motion.section>)
           }
     </AnimatePresence>
      
    )
    return (
        <nav 
            className="shadow-md lg:shadow-none lg:py-4 lg:px-20"
          
        >
            <motion.section 
                className="flex justify-between items-center fixed lg:static top-0 bg-[#121212] lg:top-0 left-0 right-0 z-50  px-8 lg:px-0"
                initial={{ opacity: 1, y: "-300%" }}
                animate={{ y: "0",}}
                transition={{duration: 0.5, delay:0.2}}
                
            >
                <div className="flex items-center font-bold">
                    <Image 
                        width={60}
                        height={20}
                        className="lg:w-20 xl:w-32 2xl:w-32 " 
                        src="https://i.postimg.cc/QC1rdcMT/cooltext452634920191131.png"
                        alt="logo"
                        
                    />
                    <span className={`text-[12px] md:text-[15px] lg:text-[15px]  xl:text-[30px] 2xl:text-2xl  ${poppins.className}`}>Agencia Digital</span>
                    
                </div>
                <div className="flex items-center gap-x-14">
                        <ul className={`hidden lg:flex xl:flex 2xl:flex flex-row gap-4 justify-between lg:text-[15px] xl:text-[20px] 2xl:text-[20px]  ${poppins.className} uppercase`}>
                            <li className="hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out cursor-pointer">
                                Portafolio
                            </li> 
                            <li className="hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out cursor-pointer">
                                Servicios
                            </li >
                            <li className="hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out cursor-pointer">
                                Como funciona
                            </li>
                            <li className="hover:bg-[#96449B] hover:rounded hover:text-slate-200 hover:transition hover:duration-200 hover:ease-in-out cursor-pointer">
                                Sobre nosotros
                            </li>
                        </ul>

                        <button className="hidden lg:flex xl:flex 2xl:flex border xl:text-[20px] 2xl:text-[20px] border-white rounded uppercase py-1 px-8 hover:bg-[#96449B] hover:border-[#96449B] transition duration-300  hover:text-slate-300">Agendar</button>
                    <button
                      aria-label="icon"
                      type="button"
                      className="text-3xl py-2 lg:hidden xl:hidden 2xl:hidden"
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
            </motion.section>
        </nav>
   )

}