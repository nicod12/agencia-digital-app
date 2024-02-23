"use client"
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Poppins } from "next/font/google";
import Image from "next/image";


const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })



export const OurJobs = () => {

  const { ref, controls, variants } = useScrollAnimation();

  return (
    <motion.section 
        className="pb-8 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:p-0"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 2, delay: 0.5 }}
    >
        <article className="text-center lg:mb-14 ">
            <h2 className="text-[18px] mt-20 2xl:text-[24px] font-bold">Nue<span className="border-t-4 border-gradient-violet pt-2">stros trab</span>ajos</h2>
            <p className={`mt-2 px-8 py-2 text-[12px] 2xl:text-[16px] ${poppins.className}`}>Algunos servicios desarrollados para nuestros socios</p>
        </article>

        <section className="flex flex-col mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                <Image
                    src="https://i.postimg.cc/pLCfQnBP/28176b26edd31e3143469a238fa15e02.jpg"
                    alt="img"
                    width={300}
                    height={200}
                    className="w-60 sm:w-72 md:w-72 lg:w-72 xl:w-80 2xl:w-96 h-52 border border-fuchsia-100 rounded-sm shadow-md shadow-slate-600"
                />
                                <Image
                    src="https://i.postimg.cc/4dD6JYtt/7c6eaa69ec3d1b390be25c6a9f45e7ca.jpg"
                    alt="img"
                    width={300}
                    height={200}
                    className="w-60 sm:w-72 md:w-72 lg:w-72 xl:w-80 2xl:w-96  h-52 border border-fuchsia-100 rounded-sm shadow-md shadow-slate-600"
                />
                                <Image
                    src="https://i.postimg.cc/fWCj9Rxc/9448924f2f66c8a816003e32fbcdcb06.jpg"
                    alt="img"
                    width={300}
                    height={200}
                    className="w-60 sm:w-72 md:w-72 lg:w-72 xl:w-80 2xl:w-96 h-52 border border-fuchsia-100 rounded-sm shadow-md shadow-slate-600"
                />
            </div>
        </section>
    </motion.section>
  )
}
