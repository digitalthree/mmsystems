'use client'

import React, {useState} from 'react';
import Image from "next/image";
import logo from "../../../../public/img/logo.png"
import Link from "next/link";
import NavbarLink from "@/app/components/navbar/components/NavbarLink";
import NavbarDropdown from "@/app/components/navbar/components/NavbarDropDown";

export interface NavbarProps{

}

const Navbar: React.FC<NavbarProps> = ({}) => {

    const [hrVisibility, setHrVisibility] = useState<'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined>("/")

    return(
        <div className="flex justify-between md:w-3/4 mx-auto py-3 items-center h-[15vh]">
            <Link href={"/"} className="w-1/2 md:w-1/4" onClick={() => setHrVisibility("/")}>
                <Image src={logo} alt="logo MM Systems" className="w-24"/>
            </Link>
            <div className="flex justify-evenly gap-10 capitalize text-white">
                <NavbarLink link={'/'} title={"Home"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                <NavbarLink link={'chisiamo'} title={"Chi Siamo"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                <NavbarLink link={'progettazione'} title={"Progettazione"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                <NavbarDropdown textDropdown={"Attività"} itemsArray={["Metrologia", "Programmazione", "Robotica"]} linkArray={["metrologia", "programmazione", "robotica"]} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
                <NavbarLink link={'contattaci'} title={"Contattaci"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
            </div>

        </div>
    )
}

export default Navbar