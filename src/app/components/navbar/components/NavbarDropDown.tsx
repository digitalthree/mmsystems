import React from 'react';
import Link from "next/link";
import {globalStore} from "@/store/globalStore";

export interface NavbarDropdownProps{
    textDropdown: string,
    itemsArray: string[],
    linkArray: string[],
    hrVisibility: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined,
    setHrVisibility: (v: 'progettazione' | 'programmazione' | 'robotica' | 'attivita' | 'chisiamo' | 'contattaci' | '/' | undefined) => void
    linkable: boolean
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({textDropdown, itemsArray, linkArray, setHrVisibility, hrVisibility, linkable}) => {
    const updateLoading = globalStore((state:any) => state.updateLoading)
    const navbarBackgroundColor = globalStore((state:any) => state.navbarBackgroundColor)
    return(
        <>
            <div className="dropdown dropdown-hover md:block hidden">
                {linkable ?
                    <Link href={"/"+textDropdown.toLowerCase()}
                          onClick={() => {
                              setHrVisibility(textDropdown.toLowerCase() as ("progettazione" | "attivita"))
                              updateLoading(false)
                          }}
                    >
                        <div tabIndex={0} role="button" className={`uppercase ${navbarBackgroundColor === "#04203b" ? 'text-white' : "#3f3f3f"} bg-transparent text-base font-normal`}>
                            {textDropdown}
                            {hrVisibility && hrVisibility === textDropdown.toLowerCase() && <hr className={`w-full border ${navbarBackgroundColor === "#04203b" ? 'border-white' : "border-[#3f3f3f]"}`}/>}
                        </div>
                    </Link> :
                    <div tabIndex={0} role="button" className={`uppercase ${navbarBackgroundColor === "#04203b" ? 'text-white' : "#3f3f3f"} bg-transparent text-base font-normal`}>
                        {textDropdown}
                        {hrVisibility && hrVisibility === textDropdown.toLowerCase() && <hr className={`w-full border ${navbarBackgroundColor === "#04203b" ? 'border-white' : "border-[#3f3f3f]"}`}/>}
                    </div>
                }

                <ul tabIndex={0} className={`p-2 shadow menu dropdown-content z-[1] ${navbarBackgroundColor === "#04203b" ? 'bg-primary text-white' : "bg-gray-300 text-[#3f3f3f]"} uppercase text-base rounded-box w-52`}>
                    {itemsArray.map((i, index) => {
                        return(
                            <Link key={index} href={linkable ? "/"+textDropdown.toLowerCase()+"/"+linkArray[index] : "/"+linkArray[index]} onClick={() => {
                                setHrVisibility(textDropdown.toLowerCase() as ("progettazione" | "attivita"))
                                updateLoading(false)
                            }}>
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