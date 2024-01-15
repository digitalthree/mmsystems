import React from 'react';
import Link from "next/link";

export interface NavbarDropdownProps{
    textDropdown: string,
    itemsArray: string[],
    linkArray: string[],
    hrVisibility: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined,
    setHrVisibility: (v: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined) => void
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({textDropdown, itemsArray, linkArray, setHrVisibility, hrVisibility}) => {
    return(
        <>
            <div className="dropdown dropdown-hover md:block hidden">
                <div tabIndex={0} role="button" className="uppercase text-white bg-transparent hover:bg-black hover:border-black text-base font-normal">
                    {textDropdown}
                    {hrVisibility && hrVisibility === "attivita" && <hr className="w-full border border-white"/>}
                </div>
                <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-primary uppercase text-white text-base rounded-box w-52">
                    {itemsArray.map((i, index) => {
                        return(
                            <Link key={index} href={linkArray[index]} onClick={() => setHrVisibility("attivita")}>
                                {i}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default NavbarDropdown