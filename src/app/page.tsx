import Containermain from "@/components/Containermain";


export default function Home() {
  return (
    <>
      <Containermain />
      <section className="bg-white w-full h-screen">
        <div>
          <span>icono</span>
          <p>¿Por qué su negocio necesita del <span>Marketing digital?</span></p>
        </div>
        <div className="border border-black">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quos distinctio id officiis, repudiandae perspiciatis 
            eius iusto quasi assumenda quibusdam dolores ipsum? Reprehenderit maxime libero quos hic minus tempore. Neque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, atque rerum, perspiciatis, doloremque quibusdam itaque assumenda neque at nostrum est 
            mollitia rem voluptate! Quas suscipit laborum praesentium debitis, blanditiis eum iusto culpa odit pariatur eveniet veritatis vero ipsam commodi laboriosam.
          </p>
        </div>
      </section>
    </>
  );
}
