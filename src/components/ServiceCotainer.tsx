"use client"
import { motion } from 'framer-motion';
import { Poppins } from "next/font/google";
import { FiTarget, FiEye,FiMonitor, FiEdit3, FiMessageSquare } from "react-icons/fi";
import { BiPieChartAlt } from "react-icons/bi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import useScrollAnimation from '@/hooks/useScrollAnimation';


const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})



export const ServiceContainer = () => {

  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.section
      id='services' 
      className="m-4 lg:h-screen flex flex-col justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <article className="text-center mt-12 lg:mt-0 ">
        <h2 className="text-[18px] 2xl:text-[24px] font-bold">Nues<span className="relative pt-2 border-t-4 border-gradient-violet">tros servi</span>cios</h2>
        <p className={`mt-2 px-8 py-2 text-[14px] 2xl:text-[16px] ${poppins.className}`}>Principales servicios que ofrecemos y desarrollamos para nuestros clientes</p>
      </article>

      <section className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 w-full sm:w-full md:w-[80%] md:mx-auto 2xl:w-[70%] mt-12 ${poppins.className}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#D35CB0] rounded">
            <FiTarget className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]   sm:text-[12px] lg:text-[12px] uppercase text-center">ESTRATÉGIA DIGITAL</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#5B47C0] rounded">
            <FiEye className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]   sm:text-[12px] lg:text-[12px] uppercase text-center">IDENTIDAD VISUAL</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#019FE3] rounded">
            <BiPieChartAlt className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]   sm:text-[12px] lg:text-[12px] uppercase text-center">GESTIÓN DE MEDIAS</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#D35CB0] rounded">
            <HiOutlineArrowTrendingUp className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]   sm:text-[12px] lg:text-[12px] uppercase text-center">TRÁFICO PAGADO</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#5B47C0] rounded">
            <FiMonitor className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]  sm:text-[12px] lg:text-[12px] uppercase text-center">LADING PAGE</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#019FE3] rounded">
            <IoVideocamOutline className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]  sm:text-[12px] lg:text-[12px] uppercase text-center">MARKETING DE INFLUENCERS</h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4 border-t-4 border-[#D35CB0] rounded">
            <FiEdit3 className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]  sm:text-[12px] lg:text-[12px] uppercase text-center">REGISTRO DE MARCAS</h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center bg-white text-black font-bold text-center gap-1 py-8 px-4 border-t-4 border-[#5B47C0] rounded">
            <FiMessageSquare className="text-lg sm:text-3xl md:text-3xl lg:text-3xl" />
            <h3 className="text-[10px]  sm:text-[12px] lg:text-[12px] uppercase text-center">CONSULTORIA DIGITAL</h3>
          </div>
  
      </section>
  </motion.section>

  )
}
