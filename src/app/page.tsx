"use client"
import FirstSection from "@/app/components/home/components/FirstSection";
import Image from "next/image";
import React from "react";
import SecondSection from "@/app/components/home/components/SecondSection";
import clienti from "../../public/img/clienti/clienti.png"
import video from "../../videos/videoHome.mp4"
import Video from 'next-video';
import ClientiVideoSection from "@/app/components/home/components/ClientiVideoSection";
import ProjectsSection from "@/app/components/home/components/ProjectsSection";


export default function Home() {

  return (
      <>
          <FirstSection/>
          <SecondSection/>
          <ClientiVideoSection/>
          <ProjectsSection/>
      </>

  )
}
