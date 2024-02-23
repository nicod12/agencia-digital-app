import { AboutContainer } from "@/components/AboutContainer";
import MainContainer from "@/components/MainContainer";
import { SecondaryContainer } from "@/components/SecondaryContainer";
import { ServiceContainer } from "@/components/ServiceCotainer";



export default function Home() {
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      <ServiceContainer />
      <AboutContainer />
      <section className="lg:h-screen">

      </section>
    </>
  );
}


