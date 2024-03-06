import React from 'react';
import Link from "next/link";
import {globalStore} from "@/store/globalStore";

export interface NavbarLinkProps{
    link: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined,
    title: string
    hrVisibility: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined,
    setHrVisibility: ((v: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined) => void) | undefined
    footer?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = ({link, title, hrVisibility, setHrVisibility, footer}) => {
    const updateLoading = globalStore((state:any) => state.updateLoading)
    const updateNavbarBackgroundColor = globalStore((state:any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state:any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state:any) => state.navbarBackgroundColor)
    return(
        <Link href={link ? "/"+link : '/'} className={`uppercase ${footer ? 'text-white' : navbarBackgroundColor === "#04203b" ? 'text-white' : "text-[#3f3f3f]"} hover:opacity-50`} onClick={() => {
            setHrVisibility && setHrVisibility(link)
            updateLoading(false)
            updateNavbarBackgroundColor("#04203b")
            updateFooterBackgroundColor("#04203b")
        }}>
            <div className={`flex flex-col ${hrVisibility && hrVisibility === link ? 'font-bold text-lg' : 'font-normal sm:text-base text-[13px]'}`}>
                {title}
            </div>
        </Link>
    )
}

export default NavbarLink