"use client";
import FirstSection from "@/app/components/home/components/FirstSection";
import React, { useEffect, useRef, useState } from "react";
import ThirdSection from "@/app/components/home/components/ThirdSection";
import ClientiVideoSection from "@/app/components/home/components/ClientiVideoSection";
import ProjectsSection from "@/app/components/home/components/ProjectsSection";
import { motion } from "framer-motion";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { globalStore } from "@/store/globalStore";
import SecondSection from "@/app/components/home/components/SecondSection";
import Seo from "./components/Seo";

export default function Home() {
  const loading = globalStore((state: any) => state.loading);
  const updateLoading = globalStore((state: any) => state.updateLoading);

  const showAnimation1 = globalStore((state: any) => state.showAnimation1);
  const updateShowAnimation1 = globalStore(
    (state: any) => state.updateShowAnimation1
  );

  const showAnimation2 = globalStore((state: any) => state.showAnimation2);
  const updateShowAnimation2 = globalStore(
    (state: any) => state.updateShowAnimation2
  );

  const showVideo = globalStore((state: any) => state.showVideo);
  const updateShowVideo = globalStore((state: any) => state.updateShowVideo);

  const updateShowNavbarOrFooter = globalStore(
    (state: any) => state.updateShowNavbarOrFooter
  );

  const navbarBackgroundColor = globalStore(
    (state: any) => state.navbarBackgroundColor
  );
  const updateNavbarBackgroundColor = globalStore(
    (state: any) => state.updateNavbarBackgroundColor
  );
  const updateFooterBackgroundColor = globalStore(
    (state: any) => state.updateFooterBackgroundColor
  );

  useEffect(() => {
    updateFooterBackgroundColor("#04203b");
    updateNavbarBackgroundColor("#04203b");
    if (loading) {
      updateShowNavbarOrFooter(false);
      updateNavbarBackgroundColor("black");
      setTimeout(() => {
        updateShowAnimation1(true);
        setTimeout(() => {
          updateShowAnimation1(false);
          updateShowAnimation2(true);
        }, 1500);
      }, 1000);

      setTimeout(() => {
        updateLoading(false);
        updateShowAnimation1(false);
        updateShowAnimation2(false);
        updateShowVideo(true);
      }, 4000);
    }
  }, []);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 1,
      loop: 0,
    },
  };

  const seo = {
    title: "Soluzioni Industriali",
    description:
      "La MM Systems Srl fornisce all’Industria impianti nel campo dell’automazione e dell’impiantistica generale.",
    url: "",
    index: true,
  };
  
  return (
    <>
      <Seo metadata={seo} />
      <div
        className="w-full"
        style={{ backgroundColor: navbarBackgroundColor }}
      >
        {loading ? (
          <div
            className="flex justify-center items-center h-[100vh] w-full absolute top-0 left-0 bg-black"
            style={{ backgroundColor: navbarBackgroundColor }}
          >
            {!showAnimation1 && !showAnimation2 && (
              <span className="loading loading-bars loading-lg text-white" />
            )}
            {showAnimation1 && (
              <div className="flex flex-col items-center">
                <motion.img
                  src={"/img/logo.png"}
                  alt={"logo"}
                  className="w-1/5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>
            )}
            {showAnimation2 && !showAnimation1 && (
              <div className="flex flex-col items-center">
                <motion.span
                  className="text-3xl text-white mt-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  SOLUZIONI INDUSTRIALI
                </motion.span>
              </div>
            )}
            {/*<Image src={logo} alt={"logo"}/>*/}
          </div>
        ) : (
          <>
            {showVideo ? (
              <div className="flex justify-center w-full h-[100vh]">
                <YouTube
                  videoId="yhdL4jz74WM"
                  opts={opts}
                  className="absolute top-0"
                  iframeClassName="w-[1920px] h-[100vh]"
                  onEnd={() => {
                    updateShowVideo(false);
                    updateShowNavbarOrFooter(true);
                    updateNavbarBackgroundColor("#04203b");
                  }}
                />
                <div className="flex flex-col items-center gap-2 absolute bottom-5 p-2 hover:cursor-pointer hover:border hover:border-white hover:rounded">
                  <span
                    className="text-white z-50 shadow-xl text-xl font-medium"
                    onClick={() => {
                      updateShowVideo(false);
                      updateShowNavbarOrFooter(true);
                      updateNavbarBackgroundColor("#04203b");
                    }}
                  >
                    SKIP VIDEO
                  </span>
                  <hr className="border border-white w-full" />
                </div>

                {/*<video autoPlay controls className="w-full h-[100vh] absolute top-0">
                          <source src="https://www.youtube.com/watch?v=pd6HNSh0TJw" type="video/mp4"/>
                      </video>*/}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ClientiVideoSection />
                <ProjectsSection />
              </motion.div>
            )}
          </>
        )}
      </div>
    </>
  );
}
