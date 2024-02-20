"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import { FiTrendingUp, FiSettings, FiPenTool  } from "react-icons/fi";

export default function Home() {
  return (
    <section 
      className="mt-32 lg:mt-24 xl:mt-28 2xl:mt-28 flex flex-col items-center"
    >

      <motion.div 
        className="max-w-auto w-auto lg:max-w-screen-lg rounded"
        initial={{ opacity: 1, x: "-300%" }}
        animate={{ x: "0",
        position: "fixed",
        transition: {duration: 0.7,delay:0.8}
       }}

      >
      <article className="flex flex-col lg:flex-row lg:w-full lg:px-24 2xl:px-0 justify-center">
       <div>
       <div className="px-6 py-4 mt-0 lg:mt-14">
            <h1 className="font-bold text-xl xl:text-2xl mb-4">Generamos soluciones que orquestan resultados para tu negocio</h1>
            <p className="text-white text-[15px] xl:text-[16px]">
              Utilizamos nuestro pensamiento estratégico para ayudar en la toma de decisiones de tu negocio
            </p>
        </div>
        <div className="px-6 py-4">
          <button 
              className="bg-gradient-to-r hover:bg-gradient-to-r from-[#664BC0] hover:from-[#5a5697] to-[#B155B5] hover:to-[#98439b] hover:transition hover:duration-500 hover:text-slate-300 uppercase py-3 px-8 text-[15px] xl:text-[18px] rounded"
            >
            Agendar un meeting
          </button>

          <section className="mt-12 lg:mt-24 xl:mt-24 2xl:mt24 flex flex-row gap-8">
            <div className="block gap-1">
              <span className="p-3 bg-[#3b3e41] rounded inline-block text-xl"><FiTrendingUp /></span>
              <div>
                <span className="text-white text-[12px] block">Más</span>
                <span className="font-bold">Resultados</span>
              </div>
            </div>
            <div className="block gap-1">
              <span className="p-3 bg-[#3b3e41] rounded inline-block text-xl"><FiSettings /></span>
              <div>
                <span className="text-white text-[12px] block">Más</span>
                <span className="font-bold">Estrategía</span>
              </div>
              
            </div>
            <div className="block gap-1">
               <span className="p-3 bg-[#3b3e41] rounded inline-block text-xl"><FiPenTool /></span>
               <div>
                <span className="text-white text-[12px] block">Más</span>
                <span className="font-bold">Desing</span>
              </div>
            </div>
          </section>
        </div>
       </div>
       <div className=" lg:bg-[#6244C6] lg:rounded-t-full">
        <Image 
          width={400} 
          height={400}
          className="w-[250px] lg:w-[400px] "
          src="https://i.postimg.cc/ht22zSyt/buisness.png" alt="Imagen de la tarjeta" />
       </div>
      
        </article>
    </motion.div>
    </section>
  );
}
