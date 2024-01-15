import React from 'react';
import Link from "next/link";

export interface NavbarLinkProps{
    link: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined,
    title: string
    hrVisibility: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined,
    setHrVisibility: ((v: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined) => void) | undefined
}

const NavbarLink: React.FC<NavbarLinkProps> = ({link, title, hrVisibility, setHrVisibility}) => {
    return(
        <Link href={link ? link : '/'} className="uppercase text-white hover:opacity-50 md:block hidden" onClick={() => setHrVisibility && setHrVisibility(link)}>
            <div className="flex flex-col">
                {title}
                {hrVisibility && hrVisibility === link && <hr className="w-full border border-white"/>}
            </div>
        </Link>
    )
}

export default NavbarLink