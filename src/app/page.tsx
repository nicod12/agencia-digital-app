import MainContainer from "@/components/MainContainer";
import { SecondaryContainer } from "@/components/SecondaryContainer";
import { ServiceComp } from "@/components/ServiceComp";



export default function Home() {
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      <ServiceComp />
      <section className="flex flex-col justify-center lg:h-screen bg-white py-20">
        <div>
          <h2 className="text-black text-center font-bold" ><span className="text-[#5B47C0] pt-2 border-t-4 border-black">Para quién es</span> nuestro servicio?</h2>
        </div>
      </section>
    </>
  );
}


