
import { InfoClientContainer } from "@/components/InfoClientContainer";
import { AboutUs } from "@/components/AboutUs";
import MainContainer from "@/components/MainContainer";
import { OurJobs } from "@/components/OurJobs";
import { SecondaryContainer } from "@/components/SecondaryContainer";
import { ServiceContainer } from "@/components/ServiceCotainer";




export default function Home() {
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      <ServiceContainer />
      <InfoClientContainer />
      <OurJobs />
      <AboutUs />
    </>
  );
}


