'use client'
import React, {ReactNode} from 'react';
import {globalStore} from "@/store/globalStore";
import Link from "next/link";
import {motion} from 'framer-motion';
import {FaTimes} from "react-icons/fa";

export interface PageStructureProps {
    children: ReactNode
}

const ChildComponent: React.FC<PageStructureProps> = ({children}) => {
    const dropdownProgVisibility = globalStore((state: any) => state.dropdownProgVisibility);
    const dropdownProgItems = globalStore((state: any) => state.dropdownProgItems);
    const dropdownProgLinks = globalStore((state: any) => state.dropdownProgLinks);
    const dropdownAttivitaVisibility = globalStore((state: any) => state.dropdownAttivitaVisibility);
    const dropdownAttivitaItems = globalStore((state: any) => state.dropdownAttivitaItems);
    const dropdownAttivitaLinks = globalStore((state: any) => state.dropdownAttivitaLinks);
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)
    const updateDropdownProgVisibility = globalStore((state: any) => state.updateDropdownProgVisibility);
    const updateDropdownAttivitaVisibility = globalStore((state: any) => state.updateDropdownAttivitaVisibility);
    return (
        <>
            {!dropdownProgVisibility && !dropdownAttivitaVisibility ?
                children :
                <>
                    <motion.div
                        initial={{x: "-100vw"}}
                        animate={{x: 0}}
                        transition={{duration: .5}}
                    >
                        <div className="h-screen relative flex flex-col gap-10 p-20 justify-center items-center text-center"
                             style={{backgroundColor: navbarBackgroundColor}}>
                            {
                                dropdownProgVisibility &&
                                <>
                                    {dropdownProgItems.map((dp: string, index: number) => {
                                        return (
                                            <Link key={dp} className="uppercase text-xl font-semibold"
                                                  style={{color: navbarBackgroundColor === "#04203b" ? "white" : "#3f3f3f"}}
                                                  onClick={() => {
                                                      updateDropdownProgVisibility(!dropdownProgVisibility)
                                                  }}
                                                  href={`${dropdownProgLinks[index] === 'progettazione' ? '/progettazione' : `/progettazione/${dropdownProgLinks[index]}`}`}
                                            >
                                                {dp}
                                            </Link>
                                        )
                                    })}
                                </>
                            }
                            {
                                dropdownAttivitaVisibility &&
                                <>
                                    {dropdownAttivitaItems.map((dp: string, index: number) => {
                                        return (
                                            <Link key={dp} className="uppercase text-xl font-semibold"
                                                  style={{color: navbarBackgroundColor === "#04203b" ? "white" : "#3f3f3f"}}
                                                  onClick={() => {
                                                      updateDropdownAttivitaVisibility(!dropdownAttivitaVisibility)
                                                  }}
                                                  href={`/${dropdownAttivitaLinks[index]}`}
                                            >{dp}</Link>
                                        )
                                    })}
                                </>
                            }
                            <FaTimes className="absolute top-3 right-3" color={navbarBackgroundColor === "#04203b" ? "white" : "#3f3f3f"} size={25}
                                     onClick={() => {
                                         updateDropdownAttivitaVisibility(false)
                                         updateDropdownProgVisibility(false)
                                     }}
                            />
                        </div>
                    </motion.div>
                </>

            }
        </>
    )
}

export default ChildComponent