'use client'

import React, {useState} from 'react';
import Image from "next/image";
import logo from "../../../../public/img/logo-header.png"
import Link from "next/link";
import NavbarLink from "@/app/components/navbar/components/NavbarLink";

export interface NavbarProps{

}

const Navbar: React.FC<NavbarProps> = ({}) => {

    const [hrVisibility, setHrVisibility] = useState<'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | undefined>(undefined)

    return(
        <div className="flex justify-between w-full p-3 items-center pr-28">
            <Link href={"/"} className="w-1/5" onClick={() => setHrVisibility(undefined)}>
                <Image src={logo} alt="logo MM Systems"/>
            </Link>
            <NavbarLink link={'progettazione'} title={"Progettazione"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
            <NavbarLink link={'programmazione'} title={"Programmazione"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
            <NavbarLink link={'robotica'} title={"Robotica"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
            <NavbarLink link={'attivita'} title={"Attività"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
            <NavbarLink link={'chisiamo'} title={"Chi Siamo"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
            <NavbarLink link={'contattaci'} title={"Contattaci"} hrVisibility={hrVisibility} setHrVisibility={setHrVisibility}/>
        </div>
    )
}

export default Navbar