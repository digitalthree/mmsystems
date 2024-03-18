import React from 'react';
import Link from "next/link";
import {globalStore} from "@/store/globalStore";

export interface NavbarLinkProps{
    link: '/' | 'chisiamo' | 'progettazione' | 'attivita' | 'certificazioni' | 'privacy',
    title: string
    footer?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = ({link, title, footer}) => {
    const updateLoading = globalStore((state:any) => state.updateLoading)
    const updateNavbarBackgroundColor = globalStore((state:any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state:any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state:any) => state.navbarBackgroundColor)
    const activeMenuItem = globalStore((state:any) => state.activeMenuItem)
    const updateActiveMenuItem = globalStore((state:any) => state.updateActiveMenuItem)
    return(
        <Link href={link ? "/"+link : '/'} className={`uppercase ${footer ? 'text-white' : navbarBackgroundColor === "#04203b" ? 'text-white' : "text-[#3f3f3f]"} hover:opacity-50`} onClick={() => {
            updateActiveMenuItem(link)
            updateLoading(false)
            updateNavbarBackgroundColor("#04203b")
            updateFooterBackgroundColor("#04203b")
        }}>
            <div className={`flex flex-col ${activeMenuItem === link ? 'font-bold text-lg' : 'font-normal sm:text-base text-[13px]'}`}>
                {title}
            </div>
        </Link>
    )
}

export default NavbarLink