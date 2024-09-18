"use client";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const SecondaryContainer = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.section
      id="how"
      className="flex flex-col justify-center bg-white  max-w-auto sm:max-w-full h-full lg:h-screen pb-10 w-auto px-6 relative"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div>
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full border-8 border-white shadow-sm p-4 text-white bg-gradient-to-tr from-[#664BC0] to-[#B155B5] text-lg 2xl:text-xl">
          <FaArrowDownLong />
        </span>
      </div>
      <article className="lg:flex lg:items-center lg:px-20 2xl:px-32">
        <div className="flex flex-col items-center py-6 lg:py-0">
          <img
            src="https://i.postimg.cc/HkRvSZjM/flecha.png"
            width={100}
            height={20}
            alt="flecha"
            className="hidden lg:flex w-12 absolute top-64 xl:top-76 2xl:top-80 left-[185px] xl:left-36 2xl:left-[355px]"
          />
          <p className="text-black text-center lg:text-start 2xl:ml-24 lg:ml-20 mt-16 lg:-mt-20 xl:mt-8 2xl:-mt-12 md:mt-32 w-64 xl:w-full 2xl:w-[50%] text-[18px] md:text-[20px] xl:text-2xl  font-bold">
            Por qué tu negocio necesita el{" "}
            <span className="text-[#5C47C0]">Marketing digital?</span>
          </p>
        </div>
        <div className=" flex flex-col mx-auto  lg:mt-36 border px-8 py-8 sm:py-12 md:py-16 xl:px-8 xl:py-16 2xl:px-8 2xl:py-20 border-black max-w-max sm:w-[70%] sm:h-auto md:w-[70%] md:h-auto lg:w-[40%] lg:h-[50&] xl:w-[40%] xl:h-[450px]  2xl:w-[40%] 2xl:h-[400px] h-auto text-black rounded-md shadow-lg relative">
          <p
            className={`text-start text-[12px] md:text-[15px] xl:text-[16px] mb-4 font-bold ${poppins.className}`}
          >
            Invertir en marketing digital es la forma más práctica, directa y
            actual de llegar al público adecuado para tu negocio. A través de
            una agencia de marketing como DK Digital, solo necesitarás
            proporcionar lo necesario para crear los contenidos y otros
            servicios necesarios.
          </p>
          <p
            className={`text-start text-[12px] md:text-[15px] xl:text-[16px] font-bold ${poppins.className}`}
          >
            Esto te dará más tiempo para enfocarte en las áreas de tu negocio
            que solo tú puedes hacer, mientras nosotros trabajamos en mantener a
            tus clientes bien informados y satisfechos con tu presencia digital.
          </p>
          <button className="text-white z-30 font-bold mt-6 text-[15px] bg-gradient-to-r hover:bg-gradient-to-r from-[#664BC0] hover:from-[#5a5697] to-[#B155B5] hover:to-[#98439b] hover:transition hover:duration-500 hover:text-slate-300 uppercase py-3 px-8 rounded">
            Saber más
          </button>
          <div className="absolute inset-0 overflow-hidden rounded-md group-hover:shadow-2xl">
            <div className="absolute -bottom-4 right-0 bg-violet-600 opacity-30 w-32 h-32 rounded-full blur-2xl"></div>
          </div>
        </div>
      </article>
    </motion.section>
  );
};
