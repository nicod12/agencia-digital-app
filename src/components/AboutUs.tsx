"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import { Raleway } from "next/font/google";
import useScrollAnimation from '@/hooks/useScrollAnimation';

const raleway = Raleway({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })
  


export const AboutUs = () => {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.section 
      id='about'
      className="grid grid-cols-1 sm:grid-cols-1 lg:h-screen bg-[#5B47C0] pb-4 lg:p-0"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center mt-4 lg:px-40 2xl:px-48">
      <img
        src="https://i.postimg.cc/4350Ygq4/laptop.webp"
        alt="laptop"
        width={400}
        height={400}
         className="w-64 md:w-72 lg:w-full 2xl:w-[50%] lg:mt-12"
      />
      <article className="lg:w-1/2 lg:max-h-max 2xl:px-20">
        <h2 className="text-center lg:text-start font-bold text-[18px] lg:text-[22px] xl:text-[25px]  2xl:text-[25px] my-6">Sobre DK Digital</h2>
        <p className={`px-8 lg:px-0 text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px]  my-4 ${raleway.className}`}>Somos una agencia <span className="font-bold">especializada en estrategias de marketing digital para pequeñas y medianas empresas</span>.
           Creemos que para alcanzar los resultados deseados, necesitamos tener una buena relación con nuestros clientes y socios.
        </p>
        <p className={`px-8 lg:p-0 text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px]  my-4 ${raleway.className}`}>Nuestro equipo de colaboradores está formado por profesionales con certificaciones internacionales en marketing y administración de empresas,
           con más de 5 años de experiencia en marketing de influencers, branding, diseño gráfico y creación de sitios y páginas de aterrizaje. 
           Estamos preparados para llevar tu proyecto al <span className="font-bold">próximo nivel.</span>
        </p>
      </article>
    </div>
  </motion.section>
  )
}
