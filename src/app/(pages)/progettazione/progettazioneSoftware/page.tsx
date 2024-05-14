"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect, useState} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Image from "next/image";
import icon1 from "@public/img/progettazione/software/icon1.png";
import icon2 from "@public/img/progettazione/software/icon2.png";
import icon3 from "@public/img/progettazione/software/icon3.png";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import backgroundLeft from "@public/img/backgroundLeft.png";
import MyCarousel from "@/app/components/carousel/MyCarousel";
import {Img} from "@/data/images";
import {fetchImages} from "@/pages/api/galleryProgettazioneDinamica";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#71B6AE")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    const [images, setImages] = useState<Img[]>([])
    useEffect(() => {
        fetchImages().then(res => {
            setImages(res)
        })
    }, []);

    return (
        <div className="w-full relative" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="software bg-gray-300 h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-[#71B6AE] xl:text-2xl lg:text-xl font-semibold">SPAZIO VIRTUALE</span>
                    <h1 className="text-[#3f3f3f] font-bold">PROGETTAZIONE
                        <br/>SOFTWARE</h1>
                </div>
            </div>
            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24">
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon1} alt={"icon 1"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                            <span
                                className="text-[#71B6AE] xl:text-2xl lg:text-xl uppercase">Integrazione perfetta</span>
                            <hr className="w-full border border-[#71B6AE]"/>
                            <p className="text-[#3F3F3F]">
                                Software progettato su misura per adattarsi senza soluzione di continuità alle vostre
                                macchine automatiche, migliorando la loro funzionalità e facilitando l&apos;operatività.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon1} alt={"icon 1"} className="w-[20%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon2} alt={"icon 2"} className="w-[8%]"/>}
                        <div className="xl:col-span-10 flex flex-col gap-3">
                            <span className="text-[#71B6AE] xl:text-2xl lg:text-xl uppercase">Massima Efficienza</span>
                            <hr className="w-full border border-[#71B6AE]"/>
                            <p className="text-[#3F3F3F]">
                                Miriamo a ottimizzare i processi, garantendo che il software contribuisca in modo
                                significativo alla performance e alla precisione delle vostre macchine, sfruttando le
                                potenzialità dei software PLC più avanzati.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon2} alt={"icon 2"} className="w-[20%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon3} alt={"icon 1"} className="w-[8%]"/>}
                        <div className="xl:col-span-10 flex flex-col gap-3">
                            <span
                                className="text-[#71B6AE] xl:text-2xl lg:text-xl uppercase">Affidabilità operativa</span>
                            <hr className="w-full border border-[#71B6AE]"/>
                            <p className="text-[#3F3F3F]">
                                La sicurezza e l&apos;affidabilità sono al centro della nostra progettazione software,
                                assicurando un funzionamento stabile delle vostre macchine automatiche.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon3} alt={"icon 3"} className="w-[20%]"/>}
                </div>
            </div>
            <MyCarousel images={images} centerSlidePercentage={33}/>
            <div className="container flex flex-col py-20 mx-auto items-center relative z-50">
                <Link href="/galleria"
                      className="py-1 xl:py-2 px-2 text-white rounded-[100px] bg-[#71B6AE] flex justify-between items-center xl:gap-1 hover:cursor-pointer">
                    <span className="px-5">Sfoglia la Gallery</span>
                    <div className="p-2 rounded-3xl bg-white">
                        <MdKeyboardArrowRight className="text-[#71B6AE] xl:w-7 xl:h-7 w-5 h-5"/>
                    </div>
                </Link>
            </div>
            <Image src={backgroundLeft} alt={"background left"} className="absolute bottom-0 left-0 sm:w-1/3 z-10"/>
        </div>
    )
}