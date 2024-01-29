"use client";
import { globalStore } from "@/store/globalStore";
import ChiSiamoForm from "@/app/components/form/chiSiamoForm";
import Image from "next/image";
import { URL } from "url";
import clienti from "../../../../public/img/clienti/clienti.png";

export default function Page() {
  const navbarBackgroundColor = globalStore(
    (state: any) => state.navbarBackgroundColor
  );
  const loading = globalStore((state: any) => state.loading);
  return (
    <div
      className="w-full min-h-[85vh] flex flex-col justify-center items-center"
      style={{ backgroundColor: navbarBackgroundColor }}
    >
      <div className="h-[80vh] flex items-center"><h1 className=" text-white">AGGIUNGERE VIDEO</h1></div> {/* AGGIUNGERE VIDEO */}
      <div className="w-full bg-[#E4E4E4] flex justify-center">
        {" "}
        {/* chi siamo robot */}
        <div className="container flex flex-row  p-10 ">
          <div className=" overflow-visible ">
            <Image
              className=" w-8/12 md:w-[636px]"
              src="/img/chisiamo/robot/robot-sx.webp"
              alt="Robot image"
              width={636}
              height={636}
            />
            <h1 className=" text-primary text-5xl mt-8 lg:mt-12 xl:mt-24 xl:ml-10">
              chi siamo
            </h1>
            <div className=" flex flex-col lg:absolute mt-3">
              <span className=" text-[#3f3f3f] text-lg xl:text-xl font-normal xl:ml-10">
                Da oltre 10 anni MM Systems Srl fornisce all`Industria Impianti
                nel <br />
              </span>
              <span className=" text-[#3f3f3f] text-lg xl:text-xl font-normal xl:ml-10">
                campo dell`automazione e dell`impiantistica generale.
              </span>
            </div>
          </div>
          <div className=" hidden md:flex">
            <Image
              src="/img/chisiamo/robot/robot-dx.webp"
              alt="Robot image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>{" "}
      {/* fine chi siamo robot */}
      {/* Inizio sezione stats */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 p-10 my-10 text-center">
        <div className="flex flex-col mb-5 md:text-left">
          <span className=" xl:text-7xl text-5xl font-normal text-white">
            + 1550 MQ
          </span>
          <span className=" text-primary text-2xl xl:text-3xl font-normal">
            PRODUCTION AREA
          </span>
        </div>
        <div className="flex flex-col mb-5  md:text-right">
          <span className=" xl:text-7xl text-5xl font-normal text-white">
            + 30%
          </span>
          <span className=" text-primary text-2xl xl:text-3xl font-normal">
            DI FATTURATO ANNUO
          </span>
        </div>
        <div className="flex flex-col mb-5 md:text-left">
          <span className=" xl:text-7xl text-5xl font-normal text-white">
            146 PROGETTI
          </span>
          <span className=" text-primary text-2xl xl:text-3xl font-normal">
            COMPLETATI
          </span>
        </div>
        <div className="flex flex-col mb-5 md:text-right justify-center">
          <span className=" xl:text-7xl text-5xl font-normal text-white">
            16 TOP
          </span>
          <span className=" text-primary text-2xl xl:text-3xl font-normal">
            CLIENTS
          </span>
        </div>
      </div>
      {/* fine sezione stats */}
      {/* inizio sezione innovazione ed esperienza */}
      <div className=" w-full bg-[#e4e4e4] p-10 py-20">
        <div className=" container flex flex-col justify-center mx-auto bg-[url(/img/chisiamo/brain.webp)] bg-no-repeat bg-scroll bg-contain bg-right">
          <h3 className="font-normal text-4xl md:text-6xl text-[#3f3f3f] mb-12 md:pl-10">
            innovazione <br /> ed esperienza
          </h3>
          <div className="w-full flex flex-col md:pl-10">
            <span className=" text-primary text-lg font-semibold mb-3">
              NULLA E` IMPOSSIBILE
            </span>
            <span className=" text-[#3f3f3f] font-normal text-lg mb-12 w-5/6 md:w-4/6 ">
              realtà abruzzese consolidata nel panorama europeo dell`industria
              di automazione robotica. La MM systems, dal 2007 ad oggi, grazie
              al suo fondatore Miki Morleo, personalità e professionista
              particolarmente attivo nel settore della produzione di
              apparecchiature elettriche ed elettromeccaniche; si distingue sul
              territorio.
            </span>
          </div>

          <div className="w-full flex flex-col justify-end items-end md:pr-10">
            <span className=" text-primary text-lg font-semibold mb-3">
              PERCHE`?
            </span>
            <span className=" text-[#3f3f3f] text-right text-lg font-normal mb-12 w-5/6 md:w-4/6">
              Il costante interesse nei confronti della ricerca scientifica e
              tecnologica. Infatti, MM Systems diviene portavoce e precursore di
              concetti innovativi e al passo con i tempi, come l`industria 4.0.
            </span>
          </div>

          <div className="w-full flex flex-col md:pl-10">
            <span className=" text-primary text-lg font-semibold mb-3">
              COSA SI INTENDE PER INDUSTRIA 4.0?
            </span>
            <span className=" text-[#3f3f3f] font-normal text-lg mb-12 w-5/6 md:w-4/6">
              Massima espressione della quarta rivoluzione industriale, e i
              cobot, robot collaborativi antropomorfi capaci di interagire con
              l`uomo nello spazio di lavoro.
            </span>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-normal text-4xl md:text-6xl text-[#3f3f3f] mb-5 xl:mb-12"></h3>
        </div>
        <div className="full flex flex-col justify-center items-center md:p-10 xl:pb-0">
          <h3 className="font-normal text-4xl md:text-6xl text-[#3f3f3f]">
            i nostri clienti
          </h3>
          <div className="divider w-full divider-neutral mx-auto"></div>
          <Image
            className="w-full"
            src={clienti}
            width={1000}
            height={300}
            alt="All client"
          />
        </div>
      </div>
      <ChiSiamoForm />
    </div>
  );
}
