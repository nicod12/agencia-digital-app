"use client"
import { motion } from 'framer-motion';
import { PiHouse } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { Poppins } from "next/font/google";
import useScrollAnimation from '@/hooks/useScrollAnimation';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const InfoClientContainer = () => {
  
  const { ref, controls, variants } = useScrollAnimation();

  return (
  <motion.section 
    className="flex flex-col justify-center lg:h-screen bg-white py-16 2xl:p-0"
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
    transition={{ duration: 2, delay: 0.5 }}
  >
  <h2 className="text-black text-center lg:text-start lg:ml-[350px] font-bold mb-12 2xl:mb-24 2xl:text-[26px]">
    <span className="text-[#5B47C0] pt-2 border-t-4 border-black">Para quién es</span> nuestro servicio?
  </h2>
  <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto lg:w-[70%] xl:w-[80%] 2xl:w-[70%]">

    <div className="bg-[#121212] w-full mx-auto py-12 px-6 rounded-lg shadow-lg mt-12 h-56 relative">
      <PiHouse className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#7866C7] text-6xl p-2 rounded-full border-8 border-[#5B47C0]" />
      <h2 className="text-center text-[15px] 2xl:text-[20px] font-bold">Empresas</h2>
      <p className={`text-center ${poppins.className} text-[10px] 2xl:text-[12px] mt-4`}>
        Pequeñas y medianas empresas que desean aumentar las ventas en internet
      </p>
    </div>

    <div className="bg-[#121212] w-full mx-auto py-12 px-6 rounded-lg shadow-lg mt-12 h-56 relative">
      <RiUser3Line className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D866BD] text-6xl p-2 rounded-full border-8 border-[#D35CB0]" />
      <h2 className="text-center text-[15px] 2xl:text-[20px] font-bold">Emprendedores</h2>
      <p className={`text-center ${poppins.className} text-[10px] 2xl:text-[12px] mt-4`}>
        Empresarios que desean escalar sus ventas y destacar su empresa en el mercado
      </p>
    </div>

    <div className="bg-[#121212] w-full mx-auto py-12 px-6 rounded-lg shadow-lg mt-12 h-56 relative">
      <AiOutlineWifi className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#45AFD9] text-6xl p-2 rounded-full border-8 border-[#019FE3]" />
      <h2 className="text-center text-[15px] 2xl:text-[20px] font-bold">Influencers</h2>
      <p className={`text-center ${poppins.className} text-[10px] 2xl:text-[12px] mt-4`}>
        Influenciadores digitales que desean utilizar sus redes sociales como un negocio de ventas
      </p>
    </div>

  </div>

  <div className="flex items-center justify-center mt-16 lg:mt-28 lg:mx-auto xl:mx-auto 2xl:mx-auto">
  <button className="bg-gradient-to-r hover:bg-gradient-to-r from-[#664BC0] hover:from-[#5a5697] to-[#B155B5] hover:to-[#98439b] hover:transition hover:duration-500 hover:text-slate-300 text-[12px] lg:text-[12px] rounded-full lg:rounded-none uppercase py-4 px-8 text-center">
    Agendar un meeting
  </button>
</div>


</motion.section>

  )
}
