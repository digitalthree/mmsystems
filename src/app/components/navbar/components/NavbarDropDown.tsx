import React, {useState} from 'react';
import Link from "next/link";
import {globalStore} from "@/store/globalStore";

export interface NavbarDropdownProps {
    textDropdown: string,
    itemsArray: string[],
    linkArray: string[],
    linkable: boolean
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({
                                                           textDropdown,
                                                           itemsArray,
                                                           linkArray,
                                                           linkable
                                                       }) => {
    const updateLoading = globalStore((state: any) => state.updateLoading)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)
    const footerBackgroundColor = globalStore((state: any) => state.footerBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const activeMenuItem = globalStore((state:any) => state.activeMenuItem)
    const updateActiveMenuItem = globalStore((state:any) => state.updateActiveMenuItem)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    return (
        <>
            <div className="dropdown dropdown-hover md:block hidden">
                {linkable ?
                    <Link href={"/" + textDropdown.toLowerCase()}
                          onClick={() => {
                              updateActiveMenuItem(textDropdown.toLowerCase() as ("progettazione" | "attivita"))
                              updateLoading(false)
                          }}
                    >
                        <div tabIndex={0} role="button"
                             className={`uppercase ${navbarBackgroundColor === "#04203b" ? 'text-white' : "text-[#3f3f3f]"} bg-transparent text-base ${activeMenuItem === textDropdown.toLowerCase() ? 'font-bold text-xl' : 'font-normal'}`}
                             style={{color: footerBackgroundColor !== '#04203b' && footerBackgroundColor}}
                             onClick={() => {
                                 updateFooterBackgroundColor("#04203b")
                                 setShowDropdown(false)
                             }}
                             onMouseOver={() => setShowDropdown(true)}
                        >
                            {textDropdown}

                        </div>
                    </Link> :
                    <div tabIndex={0} role="button"
                         className={`uppercase ${navbarBackgroundColor === "#04203b" ? 'text-white' : "text-[#3f3f3f]"} bg-transparent text-base ${activeMenuItem === textDropdown.toLowerCase() ? 'font-bold text-xl' : 'font-normal'}`}
                         onClick={() => setShowDropdown(false)}
                         onMouseOver={() => setShowDropdown(true)}
                    >
                        {textDropdown}
                    </div>
                }
                {showDropdown &&
                    <ul tabIndex={0}
                        className={`p-0 pt-6 menu dropdown-content z-[1] ${navbarBackgroundColor === "#04203b" ? 'text-white' : "text-[#3f3f3f]"} bg-transparent uppercase text-base rounded-box ${textDropdown === "Attività" ? 'w-[400px]' : 'w-64'}`}>
                        {itemsArray.map((i, index) => {
                            return (
                                <Link key={index} className={`text-sm ${navbarBackgroundColor === "#04203b" ? 'text-primary' : "text-[#3f3f3f]"}`}
                                      href={linkable ? "/" + textDropdown.toLowerCase() + "/" + linkArray[index] : "/" + linkArray[index]}
                                      style={{color: (footerBackgroundColor !== '#04203b' && linkable) && footerBackgroundColor }}
                                      onClick={() => {
                                          updateActiveMenuItem(textDropdown.toLowerCase() as ("progettazione" | "attivita"))
                                          updateLoading(false)
                                          setShowDropdown(false)
                                      }}>
                                    {i}
                                </Link>
                            )
                        })}
                    </ul>
                }

            </div>
        </>
    )
}

export default NavbarDropdown