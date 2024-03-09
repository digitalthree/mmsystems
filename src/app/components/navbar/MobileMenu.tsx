import React, {useState} from 'react';
import Link from "next/link";
import {FaInfoCircle, FaPhoneVolume, FaProjectDiagram} from "react-icons/fa";
import {GrContactInfo} from "react-icons/gr";
import {HiSquare3Stack3D} from "react-icons/hi2";
import Image from "next/image";
import logo from "../../../../public/img/logo.png"
import {RiShieldStarLine} from "react-icons/ri";
import {globalStore} from "@/store/globalStore";


interface MobileMenuProps {

}

export const MobileMenu: React.FC<MobileMenuProps> = ({}) => {

    const dropdownProgVisibility = globalStore((state: any) => state.dropdownProgVisibility);
    const dropdownAttivitaVisibility = globalStore((state: any) => state.dropdownAttivitaVisibility);
    const updateDropdownProgVisibility = globalStore((state: any) => state.updateDropdownProgVisibility);
    const updateDropdownAttivitaVisibility = globalStore((state: any) => state.updateDropdownAttivitaVisibility);

    return (
        <>
            <div
                className="xl:hidden block fixed inset-x-0 bottom-0 bg-gradient-to-b from-secondary to-primary py-1 z-[100]">
                <div className="flex px-2 items-center justify-evenly">
                    <Link href="/chisiamo"
                          onClick={() => {
                              updateDropdownAttivitaVisibility(false)
                              updateDropdownProgVisibility(false)
                          }}
                    >
                        <div className="flex flex-col items-center">
                            <FaInfoCircle size="25px" className="text-white"/>
                            <span className="text-white text-[12px]">Chi siamo</span>
                        </div>
                    </Link>
                    <div className="dropdown dropdown-top">
                        <div tabIndex={0} role="button"
                             className="text-white bg-transparent  hover:border-black text-base font-normal">
                            <div className="flex flex-col items-center "
                                 onClick={() => {
                                     updateDropdownAttivitaVisibility(false)
                                     updateDropdownProgVisibility(!dropdownProgVisibility)
                                 }}
                            >
                                <FaProjectDiagram size="25px" className="text-white"/>
                                <span className="text-white text-[12px]">Prog.</span>
                            </div>
                        </div>
                    </div>
                    <Link href="/"
                          onClick={() => {
                              updateDropdownAttivitaVisibility(false)
                              updateDropdownProgVisibility(false)
                          }}
                    >
                        <div
                            className="rounded-full bg-gradient-to-b from-secondary to-primary border border-secondary p-4 relative top-[-25px]">
                            <Image src={logo} width={60} height={60} alt="Fisioste Logo"/>
                        </div>
                    </Link>
                    <div className="dropdown dropdown-top">
                        <div tabIndex={0} role="button"
                             className="text-white bg-transparent  hover:border-black text-base font-normal">
                            <div className="flex flex-col items-center "
                                 onClick={() => {
                                     updateDropdownProgVisibility(false)
                                     updateDropdownAttivitaVisibility(!dropdownAttivitaVisibility)
                                 }}
                            >
                                <HiSquare3Stack3D size="25px" className="text-white"/>
                                <span className="text-white text-[12px]">Attività</span>
                            </div>
                        </div>
                    </div>
                    <Link href="/certificazioni"
                          onClick={() => {
                              updateDropdownAttivitaVisibility(false)
                              updateDropdownProgVisibility(false)
                          }}
                    >
                        <div className="flex flex-col items-center">
                            <RiShieldStarLine size="25px" className="text-white"/>
                            <span className="text-white text-[12px]">Cert.</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>

    )

}