import MainContainer from "@/components/MainContainer";
import { SecondaryContainer } from "@/components/SecondaryContainer";



export default function Home() {
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      <section className="">
    <article className="text-center mt-16">
      <h2>Nues<span className="relative pt-2 border-t-4 border-gradient-violet">tros servi</span>cios</h2>
      <p>Principales servicios que ofrecemos y desarrollamos para nuestros clientes</p>
    </article>
  </section>

    </>
  );
}


