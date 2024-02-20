"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import { FiTrendingUp, FiSettings, FiPenTool  } from "react-icons/fi";
import React from 'react'

const Containermain = () => {
  return (
    <section className="mt-32 lg:mt-24 xl:mt-28 2xl:mt-28 flex flex-col items-center py-4">

    <motion.div
      className="max-w-auto w-auto lg:max-w-screen-lg rounded"
      initial={{ opacity: 1, x: "-300%" }}
      animate={{
        x: "0",
        position: "fixed",
        transition: { duration: 0.7, delay: 0.8 },
      }}
    >
      <article className="flex flex-col lg:flex-row lg:w-full lg:px-24 2xl:px-0 justify-center">
  
        <div className="sm:flex md:flex md:items-center lg:flex lg:items-center">
          <div className="px-6 py-4 mt-0 sm:w-1/2 md:w-full lg:mt-4 lg:w-full">
            <h1 className="font-bold text-xl xl:text-2xl mb-4">Generamos soluciones que orquestan resultados para tu negocio</h1>
            <p className="text-white text-[15px] xl:text-[16px]">
              Utilizamos nuestro pensamiento estratégico para ayudar en la toma de decisiones de tu negocio
            </p>
            <button
              className="bg-gradient-to-r hover:bg-gradient-to-r from-[#664BC0] hover:from-[#5a5697] to-[#B155B5] hover:to-[#98439b] hover:transition hover:duration-500 hover:text-slate-300 uppercase py-3 px-8 text-[15px] xl:text-[18px] rounded mt-4"
            >
              Agendar un meeting
            </button>
            <section className="mt-4 py-4 flex flex-col md:flex-row lg:flex-row gap-7">
              <div className="flex items-center">
                <span className="p-2 text-2xl inline-block bg-gray-700 rounded">
                  <FiTrendingUp />
                </span>
                <h3 className="ml-2">Más <span>Resultados</span></h3>
              </div>
              <div className="flex items-center">
                <span className="p-2 text-2xl inline-block bg-gray-700 rounded">
                  <FiSettings />
                </span>
                <h3 className="ml-2">Más <span>Estrategia</span></h3>
              </div>
              <div className="flex items-center">
                <span className="p-2 text-2xl inline-block bg-gray-700 rounded">
                  <FiPenTool />
                </span>
                <h3 className="ml-2">Más <span>Desing</span></h3>
              </div>
            </section>
          </div>
  
          <div className="w-1/2   lg:bg-[#6244C6] lg:rounded-t-full">
            <Image
              width={400}
              height={400}
              className="w-[250px] h-auto lg:w-[400px] "
              src="https://i.postimg.cc/ht22zSyt/buisness.png"
              alt="Imagen de la tarjeta"
            />
          </div>
        </div>
      </article>
    </motion.div>
  </section>
  )
}

export default Containermain