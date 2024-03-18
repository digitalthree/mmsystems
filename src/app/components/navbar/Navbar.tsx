'use client'

import React, {useState} from 'react';
import Image from "next/image";
import logo from "../../../../public/img/logo.png"
import logoDark from "../../../../public/img/logodark.png"
import Link from "next/link";
import NavbarLink from "@/app/components/navbar/components/NavbarLink";
import NavbarDropdown from "@/app/components/navbar/components/NavbarDropDown";
import {MobileMenu} from "@/app/components/navbar/MobileMenu";
import {globalStore} from "@/store/globalStore";

export interface NavbarProps{

}

const Navbar: React.FC<NavbarProps> = ({}) => {

    const showNavbarOrFooter = globalStore((state:any) => state.showNavbarOrFooter)
    const navbarBackgroundColor = globalStore((state:any) => state.navbarBackgroundColor)
    const updateNavbarBackgroundColor = globalStore((state:any) => state.updateNavbarBackgroundColor)
    const updateActiveMenuItem = globalStore((state:any) => state.updateActiveMenuItem)
    return(
        <>
            {showNavbarOrFooter &&
                <div className="w-full sticky top-0 z-[100] shadow-xl" style={{backgroundColor: navbarBackgroundColor}}>
                    <div className="xl:flex hidden xl:justify-between xl:md:container xl:mx-auto py-3 xl:items-center xl:h-[7vh]"
                        style={{backgroundColor: navbarBackgroundColor}}
                    >
                        <Link href={"/"} className="w-1/2 md:w-1/4" onClick={() => {
                            updateNavbarBackgroundColor("#04203b")
                            updateActiveMenuItem("/")
                        }}>
                            <Image src={navbarBackgroundColor === "#04203b" ? logo : logoDark} alt="logo MM Systems" className="w-28"/>
                        </Link>
                        <div className={`flex justify-evenly items-baseline gap-10 capitalize ${navbarBackgroundColor === "#04203b" ? 'text-white' : "#3f3f3f"}`}>
                            <NavbarLink link={'/'} title={"Home"}/>
                            <NavbarLink link={'chisiamo'} title={"Chi Siamo"}/>
                            <NavbarDropdown textDropdown={"Progettazione"} itemsArray={["elettrica", "meccanica", "dinamica", "progettazione software"]} linkArray={["elettrica", "meccanica", "dinamica", "progettazioneSoftware"]} linkable={true}/>
                            <NavbarDropdown textDropdown={"Attività"} itemsArray={["Metrologia", "Programmazione", "Robotica", "Robot Collaborativi", "Banchi Semiautomatici", "Linee assemblaggio automatizzate", "Sistemi di visione ed intelligenza artificiale"]} linkArray={["metrologia", "programmazione", "robotica", "robotCollaborativi", "banchiSemiautomatici", "lineeAssemblaggio", "intelligenzaArtificiale"]} linkable={false}/>
                            <NavbarLink link={'certificazioni'} title={"Certificazioni"}/>
                        </div>

                    </div>

                    <MobileMenu />
                </div>
            }

        </>

    )
}

export default Navbar