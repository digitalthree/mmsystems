"use client"
import logo from "../../../../public/img/logo.png"
import React, {useState} from 'react';
import Image from "next/image";
import NavbarLink from "@/app/components/navbar/components/NavbarLink";
import {RiFacebookLine} from "react-icons/ri";
import {RiLinkedinLine} from "react-icons/ri";
import {RiYoutubeLine} from "react-icons/ri";
import {globalStore} from "@/store/globalStore";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";


export interface FooterProps {

}

const Footer: React.FC<FooterProps> = ({}) => {

    const showNavbarOrFooter = globalStore((state: any) => state.showNavbarOrFooter)
    const footerBackgroundColor = globalStore((state: any) => state.footerBackgroundColor)
    const dropdownProgVisibility = globalStore((state: any) => state.dropdownProgVisibility);
    const dropdownAttivitaVisibility = globalStore((state: any) => state.dropdownAttivitaVisibility);
    return (
        <>
            {showNavbarOrFooter && !dropdownProgVisibility && !dropdownAttivitaVisibility &&
                <div className="w-full bg-secondary xl:p-10 p-5 pb-32 xl:pb-10"
                     style={{backgroundColor: footerBackgroundColor}}
                >
                    <div
                        className="container flex flex-col justify-center items-center gap-8 xl:flex-row xl:mx-auto xl:justify-between">

                        <div className="flex gap-10">
                            <div className="flex flex-col text-center xl:text-start">
                                <div className="flex items-center">
                                    <NavbarLink link={'/'} title={"Home"} footer={true}/>
                                    <span className="text-white mx-1 text-sm">|</span>
                                    <NavbarLink link={'chisiamo'} title={"Chi Siamo"} footer={true}/>
                                    <span className="text-white mx-1 text-sm">|</span>
                                    <NavbarLink link={'certificazioni'} title={"Certificazioni"} footer={true}/>
                                    <span className="text-white text-sm mx-1">|</span>
                                    <NavbarLink link={'privacy'} title={"Privacy Policy"} footer={true}/>
                                </div>
                                <span className="text-white text-sm">© 2020 MM Systems, Inc. All Rights Reserved</span>
                                <span className="text-white text-sm">Sito realizzato da <span
                                    className="text-sm text-white underlinea<q">Digital Three</span></span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Image src={logo} alt={"logo"} className="w-[120px] mb-2"/>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/profile.php?id=100054522818033" target="_blank" className="p-1 bg-white">
                                    <RiFacebookLine className="text-secondary" size={20}/>
                                </a>
                                <a href="https://it.linkedin.com/company/mm-systems-srl" target="_blank" className="p-1 bg-white">
                                    <RiLinkedinLine className="text-secondary" size={20}/>
                                </a>
                                <a href="https://www.youtube.com/@m.m.systems7842" target="_blank" className="p-1 bg-white">
                                    <RiYoutubeLine className="text-secondary" size={20}/>
                                </a>
                            </div>

                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col">
                        <span
                            className="text-white text-sm xl:text-right text-center">info@groupmm.net | +39 0872 57398</span>
                                <span className="text-white text-sm xl:text-right text-center">Contrada Castel di sette snc - 66030 Mozzagrogna (CH) - Italia</span>
                                <span className="text-white text-sm xl:text-right text-center">p.iva 02187370693</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Footer