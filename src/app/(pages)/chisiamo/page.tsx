"use client";
import { globalStore } from "@/store/globalStore";
import ChiSiamoForm from "@/app/components/form/chiSiamoForm";
import Image from "next/image";
import { URL } from "url";
import clienti from "../../../../public/img/clienti/clienti.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import React from "react";
import mmsystems3d from "../../../../public/img/chisiamo/mmsystems-3d.jpg";
import Seo from "@/app/components/Seo";

export default function Page() {
  const navbarBackgroundColor = globalStore(
    (state: any) => state.navbarBackgroundColor
  );
  const loading = globalStore((state: any) => state.loading);

  const seo = {
    title: "Chi Siamo",
    description: "Chi Siamo",
    url: "chisiamo",
    index: true,
  };

  return (
    <>
      <Seo metadata={seo} />
      <div
        className="w-full min-h-[85vh] flex flex-col justify-center items-center"
        style={{ backgroundColor: navbarBackgroundColor }}
      >
        <div className="lgh-[80vh] flex items-center">
          <Image src={mmsystems3d} alt={""} />
        </div>
        {/* AGGIUNGERE VIDEO */}
        <div className="h-[80vh] flex justify-center items-center relative w-full">
          <div className="absolute right-48">
            <div className="flex flex-col items-end">
              <span className="text-primary xl:text-2xl lg:text-xl">MM SYSTEMS</span>
              <hr className="w-full border border-white mb-4" />
              <h1 className="uppercase font-bold text-white lg:text-start text-center mb-10">
                chi siamo
              </h1>
              <Link
                href="/"
                className="py-1 xl:py-2 px-2 text-white z-10 lg:w-4/5 w-1/2 rounded-[100px] bg-primary flex justify-between items-center xl:gap-1"
              >
                <span className="px-5 line-clamp-1">Scopri di più</span>
                <div className="p-2 rounded-3xl bg-white">
                  <MdKeyboardArrowRight className="text-primary xl:w-7 xl:h-7 w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Inizio sezione stats */}
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 p-10 my-10 text-center">
          <div className="flex flex-col mb-5 md:text-left">
            <h1 className="font-bold text-white">
              + 1550 MQ
            </h1>
            <span className=" text-primary xl:text-2xl lg:text-xl">
              PRODUCTION AREA
            </span>
          </div>
          <div className="flex flex-col mb-5  md:text-right">
            <h1 className="font-bold text-white">
              + 30%
            </h1>
            <span className="text-primary xl:text-2xl lg:text-xl">
              DI FATTURATO ANNUO
            </span>
          </div>
          <div className="flex flex-col mb-5 md:text-left">
            <h1 className="font-bold text-white">
              146 PROGETTI
            </h1>
            <span className=" text-primary xl:text-2xl lg:text-xl">
              COMPLETATI
            </span>
          </div>
          <div className="flex flex-col mb-5 md:text-right justify-center">
            <h1 className="font-bold text-white">
              16 TOP
            </h1>
            <span className=" text-primary xl:text-2xl lg:text-xl">
              CLIENTS
            </span>
          </div>
        </div>
        {/* fine sezione stats */}

        {/* inizio sezione innovazione ed esperienza */}
        <div className=" w-full bg-[#e4e4e4] p-10 py-20">
          <div className=" container flex flex-col justify-center mx-auto bg-[url(/img/chisiamo/brain.webp)] bg-no-repeat bg-scroll bg-contain bg-right">
            <div className="w-full xl:flex xl:flex-row flex flex-col items-center">
              <Image
                className=" w-8/12 md:w-[636px]"
                src="/img/chisiamo/robot/robot-sx.webp"
                alt="Robot image"
                width={636}
                height={636}
              />
              <div className="flex flex-col items-center mt-5 xl:mt-0">
                <span className="text-primary xl:text-2xl lg:text-xl mb-3">
                  NULLA E` IMPOSSIBILE
                </span>
                <p className=" text-[#3f3f3f] text-center xl:text-left mb-12 w-5/6 md:w-full">
                  Realtà abruzzese consolidata nel panorama europeo
                  dell`industria di automazione robotica. La MM systems, dal
                  2007 ad oggi, grazie al suo fondatore Miki Morleo, personalità
                  e professionista particolarmente attivo nel settore della
                  produzione di apparecchiature elettriche ed elettromeccaniche;
                  si distingue sul territorio.
                </p>
                <span className=" text-primary text-center xl:text-right xl:text-2xl lg:text-xl mb-3">
                  PERCHE`?
                </span>
                <p className="text-[#3f3f3f] text-center xl:text-right mb-12 w-5/6 md:w-full">
                  Il costante interesse nei confronti della ricerca scientifica
                  e tecnologica. <br /> Infatti, MM Systems diviene portavoce e
                  precursore di concetti innovativi e al passo con i tempi, come
                  l`industria 4.0.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col items-center xl:items-start md:pl-10">
              <span className=" text-primary xl:text-2xl lg:text-xl mb-3">
                COSA SI INTENDE PER INDUSTRIA 4.0?
              </span>
              <p className=" text-[#3f3f3f] xl:text-left text-center mb-12 w-5/6 md:w-full">
                Massima espressione della quarta rivoluzione industriale, e i
                cobot, robot collaborativi antropomorfi capaci di interagire con
                l`uomo nello spazio di lavoro.
              </p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-normal text-4xl md:text-6xl text-[#3f3f3f] mb-5 xl:mb-12"></h3>
          </div>
          <div className="full flex flex-col justify-center items-center md:p-10 xl:pb-0">
            <h1 className="font-bold uppercase text-[#3f3f3f]">
              i nostri clienti
            </h1>
            <hr className="w-1/2 border border-black my-5"/>
            <div className="divider w-full divider-neutral mx-auto"></div>
            <Image
              className="w-3/4"
              src={clienti}
              width={1000}
              height={300}
              alt="All client"
            />
          </div>
        </div>
        <ChiSiamoForm />
      </div>
    </>
  );
}
