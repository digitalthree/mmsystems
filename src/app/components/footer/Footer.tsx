"use client"
import logo from "../../../../public/img/logo.png"
import React, {useState} from 'react';
import Image from "next/image";
import NavbarLink from "@/app/components/navbar/components/NavbarLink";
import { RiFacebookLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";




export interface FooterProps{

}

const Footer: React.FC<FooterProps> = ({}) => {

    const [hrVisibility, setHrVisibility] = useState<'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined>("/")

    return(
        <div className="w-full bg-secondary p-20">
            <div className="container flex mx-auto items-center justify-between">
                    <div className="flex gap-10">
                        <Image src={logo} alt={"logo"} className="w-[70px]"/>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <NavbarLink link={'/'} title={"Home"} hrVisibility={undefined} setHrVisibility={undefined}/>
                                <span className="text-white mx-1 text-sm">|</span>
                                <NavbarLink link={'chisiamo'} title={"Chi Siamo"} hrVisibility={undefined} setHrVisibility={undefined}/>
                                <span className="text-white mx-1 text-sm">|</span>
                                <NavbarLink link={'contattaci'} title={"Contattaci"} hrVisibility={undefined} setHrVisibility={undefined}/>
                                <span className="text-white text-sm mx-1">|</span>
                                <NavbarLink link={'contattaci'} title={"Contattaci"} hrVisibility={undefined} setHrVisibility={undefined}/>
                            </div>
                            <span className="text-white text-sm">© 2020 MM Systems, Inc. All Rights Reserved</span>
                            <span className="text-white text-sm">Sito realizzato da <span className="text-sm text-primary">Digital Three</span></span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 bg-white">
                            <RiFacebookLine className="text-secondary" size={20}/>
                        </div>
                        <div className="p-2 bg-white">
                            <RiLinkedinLine className="text-secondary" size={20}/>
                        </div>
                        <div className="p-2 bg-white">
                            <RiYoutubeLine className="text-secondary" size={20}/>
                        </div>
                    </div>
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <span className="text-white text-sm text-right">info@groupmm.net | +39 0872 57398</span>
                        <span className="text-white text-sm text-right">Contrada Castel di sette snc - 66030 Mozzagrogna (CH) - Italia</span>
                        <span className="text-white text-sm text-right">p.iva 02187370693</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer