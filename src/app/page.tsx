import MainContainer from "@/components/MainContainer";
import { SecondaryContainer } from "@/components/SecondaryContainer";
import { ServiceComp } from "@/components/ServiceComp";
import { PiHouse } from "react-icons/pi";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { Poppins } from "next/font/google";

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
      <ServiceComp />
      <section className="flex flex-col justify-center lg:h-screen bg-white py-16">
        <div className="px-6">
          <h2 className="text-black text-center font-bold" ><span className="text-[#5B47C0] pt-2 border-t-4 border-black">Para quién es</span> nuestro servicio?</h2>
          <div className="bg-[#121212] w-full mx-auto py-12 px-6 rounded-lg shadow-lg mt-12 relative">
            <PiHouse className="absolute -top-8 left-1/2 -translate-x-1/2  bg-[#7866C7] text-6xl p-2 rounded-full border-8 border-[#5B47C0]" />
            <h2 className="text-center text-[15px] font-bold">Empresas</h2>
            <p className={`text-center ${poppins.className} text-[10px] mt-4`}>Pequeñas y medianas empresas que desean aumentar las ventas en internet</p>
          </div>

          <div className="bg-[#121212] w-full mx-auto py-12 px-6 rounded-lg shadow-lg mt-12 relative">
            <RiUser3Line className="absolute -top-8 left-1/2 -translate-x-1/2  bg-[#D866BD] text-6xl p-2 rounded-full border-8 border-[#D35CB0]" />
            <h2 className="text-center text-[15px] font-bold">Emprendedores</h2>
            <p className={`text-center ${poppins.className} text-[10px] mt-4`}>Empresarios que desean escalar sus ventas y destacar su empresa en el mercado</p>
          </div>

          <div className="bg-[#121212] w-full mx-auto py-12 px-6 rounded-lg shadow-lg mt-12 relative">
            <AiOutlineWifi className="absolute -top-8 left-1/2 -translate-x-1/2  bg-[#45AFD9] text-6xl p-2 rounded-full border-8 border-[#019FE3]" />
            <h2 className="text-center text-[15px] font-bold">Influencers</h2>
            <p className={`text-center ${poppins.className} text-[10px] mt-4`}>Influenciadores digitales que desean utilizar sus redes sociales como un negocio de ventas</p>
          </div>
    
        </div>
      </section>
    </>
  );
}


