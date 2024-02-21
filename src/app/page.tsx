import MainContainer from "@/components/MainContainer";
import { SecondaryContainer } from "@/components/SecondaryContainer";
import { Poppins } from "next/font/google";
import { FiTarget, FiEye,FiMonitor, FiEdit3, FiMessageSquare } from "react-icons/fi";
import { BiPieChartAlt } from "react-icons/bi";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";


const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})



export default function Home() {
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      <section className="m-4">
        <article className="text-center mt-16">
          <h2 className="text-[18px] 2xl:text-[24px] font-bold">Nues<span className="relative pt-2 border-t-4 border-gradient-violet">tros servi</span>cios</h2>
          <p className={`mt-2 px-8 py-2 text-[14px] 2xl:text-[16px] ${poppins.className}`}>Principales servicios que ofrecemos y desarrollamos para nuestros clientes</p>
        </article>

        <section className={`grid grid-cols-2 mx-auto md:grid-cols-3 lg:grid-cols-4  gap-x-4 gap-y-8  w-[80%] md:w-[70%] md:mx-auto 2xl:w-[50%] mt-8 ${poppins.className}`}>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4 border-t-4 border-[#D35CB0]  w-full 2xl:w-48 rounded">
            <FiTarget className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Estratégia digital</h3>
          </div>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4   border-t-4 border-[#5B47C0]  w-full 2xl:w-48 rounded">
            <FiEye className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Identidad Visual</h3>
          </div>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4  border-t-4 border-[#019FE3]  w-full 2xl:w-48 r rounded">
            <BiPieChartAlt className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Gestión de medias</h3>
          </div>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4  border-t-4 border-[#D35CB0]  w-full 2xl:w-48 r rounded">
            <HiOutlineArrowTrendingUp className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Tráfico pagado</h3>
          </div>
          
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4  border-t-4 border-[#D35CB0]  w-full 2xl:w-48 r rounded">
            <FiMonitor  className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Lading page</h3>
          </div>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4  border-t-4 border-[#5B47C0] w-full 2xl:w-48 r rounded">
            <IoVideocamOutline className="text-[30px]" />
            <h3 className="text-[12px] w-[60%] uppercase text-start">Marketing de influencers</h3>
          </div>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4  border-t-4 border-[#019FE3] w-full 2xl:w-48 r rounded">
            <FiEdit3 className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Registro de marcas</h3>
          </div>
          <div className="flex items-center justify-center bg-white text-black font-bold text-center gap-2 py-8 px-4  border-t-4 border-[#D35CB0]  w-full 2xl:w-48 r rounded">
            <FiMessageSquare className="text-[30px]" />
            <h3 className="text-[12px] w-1/2 uppercase text-start">Consultoria digital</h3>
          </div>

        </section>
      </section>

    </>
  );
}


