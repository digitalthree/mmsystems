"use client"
import {globalStore} from "@/store/globalStore";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import icon1 from "../../../../../public/img/progettazione/elettrica/icon1.png";
import icon2 from "../../../../../public/img/progettazione/elettrica/icon2.png";
import icon3 from "../../../../../public/img/progettazione/elettrica/icon3.png";
import backgroundLeft from "../../../../../public/img/backgroundLeft.png"
import backgroundRight0 from "../../../../../public/img/backgroundRight0.png"
import MyCarousel from "@/app/components/carousel/MyCarousel";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
import {Img} from "@/data/images";
import {fetchImages} from "@/pages/api/gallery";


export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#2A5FE9")
    }, []);

    const [images, setImages] = useState<Img[]>([])
    useEffect(() => {
        fetchImages().then(res => {
            setImages(res)
        })
    }, []);
    return (
        <div className="w-full relative" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="elettrica h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-[#2A5FE9] xl:text-2xl lg:text-xl uppercase">progettazione elettrica</span>
                    <hr className="border border-[#3f3f3f] w-1/6"/>
                    <h1 className="text-[#3f3f3f] font-bold uppercase">progettazione<br/> realizzazione
                        e <br/> certificazione</h1>
                </div>
            </div>

            <div
                className="flex mx-auto py-20 flex-col items-center xl:items-start text-center xl:text-start gap-20 xl:w-4/5 px-10 lg:px-0">
                <div className="flex flex-col gap-3 items-center mx-auto">
                    <Image src={icon1} alt={"icon1"} className="lg:w-20 w-16"/>
                    <span className="text-[#2A5FE9] xl:text-2xl lg:text-xl uppercase">progettazione</span>
                    <hr className="w-1/6 border border-white"/>
                    <p className="text-[#3F3F3F] text-center">
                        La MM Systems progetta e realizza impianti elettrici industriali e quadri di distribuzione, di
                        comando e controllo con sviluppo software in grado di soddisfare svariate esigenze: regolazione,
                        manovra, monitoraggio, acquisizione dati e supervisione degli impianti. Progettiamo e realizziamo
                        cabine di trasformazione MT/BT con distribuzione delle linee elettriche di BT ed impianti di
                        illuminazione. L’esperienza ormai decennale nella progettazione, costruzione e installazione di
                        quadri elettrici di media e bassa tensione consente alla MM Systems di operare in questo settore
                        con la massima flessibilità, estendendo l’impegno alle specifiche necessità dei clienti.
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-center mx-auto">
                    <Image src={icon2} alt={"icon1"} className="lg:w-20 w-16"/>
                    <span className="text-[#2A5FE9] xl:text-2xl lg:text-xl uppercase">realizzazione</span>
                    <hr className="w-1/6 border border-white"/>
                    <p className="text-[#3F3F3F] text-center">
                        I principali settori di attività dell&apos;azienda, operativa in tutti i campi, sono::
                        progettazione, cablaggio bordo macchina, messa in servizio, quadri di distribuzione e
                        automazione. Le nostre esperienze partono dagli ambiti industriali di automazione e di robotica
                        dove abbiamo grande specializzazione, ma la nostra gamma di interventi si è ampliata fino ad
                        includere qualsiasi tipo di progetto. La nostra azienda è specializzata in cablaggi per quadri
                        elettrici di comando e di controllo per automazione industriale, tutti gli impianti a bordo
                        macchina vengono forniti con etichette, cartellini, scritte per siglature cavi, fili e
                        pulsantiere.
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-center mx-auto">
                    <Image src={icon3} alt={"icon1"} className="lg:w-20 w-16"/>
                    <span className="text-[#2A5FE9] xl:text-2xl lg:text-xl uppercase">certificazione</span>
                    <hr className="w-2/3 border border-white"/>
                    <p className="list-disc w-fit mx-auto text-center text-[#3F3F3F]">
                        <li>Progettazione e realizzazione della rete</li>
                        <li>Conformità alle normative e agli standard</li>
                        <li>Svolgiamo interventi su apparati attivi / passivi</li>
                        <li>Verifica e gestione del progetto</li>
                    </p>
                </div>
            </div>

            <MyCarousel images={images}/>
            <div className="container flex flex-col py-20 mx-auto items-center relative z-50">
                <Link href="/galleria"
                      className="py-1 xl:py-2 px-2 text-white rounded-[100px] bg-[#2A60E9] flex justify-between items-center xl:gap-1 hover:cursor-pointer">
                    <span className="px-5">Sfoglia la Gallery</span>
                    <div className="p-2 rounded-3xl bg-white">
                        <MdKeyboardArrowRight className="text-[#2A60E9] xl:w-7 xl:h-7 w-5 h-5"/>
                    </div>
                </Link>
            </div>
            <Image src={backgroundLeft} alt={"background left"} className="absolute bottom-0 left-0 w-1/2"/>
            <Image src={backgroundRight0} alt={"background right"} className="absolute bottom-0 right-0 w-1/2"/>
        </div>
    )

}