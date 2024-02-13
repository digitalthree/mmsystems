import React from 'react';
import Link from "next/link";
import {FaInfoCircle, FaPhoneVolume, FaProjectDiagram} from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { HiSquare3Stack3D } from "react-icons/hi2";
import Image from "next/image";
import logo from "../../../../public/img/logo.png"


interface MobileMenuProps {
    itemsDropdownArray: string[],
    linkDropdownArray: string[],
}

export const MobileMenu: React.FC<MobileMenuProps> = ({itemsDropdownArray, linkDropdownArray}) => {
    return(
        <div className="xl:hidden block fixed inset-x-0 bottom-0 bg-gradient-to-b from-secondary to-primary py-1 z-[100]">
            <div className="flex px-2 items-center justify-evenly">
                <Link href="/chisiamo">
                    <div className="flex flex-col items-center">
                        <FaInfoCircle size="25px" className="text-white"/>
                        <span className="text-white text-[12px]">Chi siamo</span>
                    </div>
                </Link>
                <Link href="/progettazione">
                    <div className="flex flex-col items-center ">
                        <FaProjectDiagram size="25px" className="text-white"/>
                        <span className="text-white text-[12px]">Proget.</span>
                    </div>
                </Link>
                <Link href="/">
                    <div className="rounded-2xl bg-gradient-to-b from-secondary to-primary border border-secondary p-3 relative top-[-25px]">
                        <Image src={logo} width={80} height={80} alt="Fisioste Logo"/>
                    </div>
                </Link>
                <div className="dropdown dropdown-top">
                    <div tabIndex={0} role="button" className="text-white bg-transparent  hover:border-black text-base font-normal">
                        <div className="flex flex-col items-center ">
                            <HiSquare3Stack3D size="25px" className="text-white"/>
                            <span className="text-white text-[12px]">Attività</span>
                        </div>
                    </div>
                    <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-gradient-to-b from-secondary to-primary uppercase text-white text-base rounded-box w-42">
                        {itemsDropdownArray.map((i, index) => {
                            return(
                                <Link key={index} href={linkDropdownArray[index]}>
                                    {i}
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <Link href="/contatti">
                    <div className="flex flex-col items-center">
                        <GrContactInfo size="25px" className="text-white"/>
                        <span className="text-white text-[12px]">Contattaci</span>
                    </div>
                </Link>
            </div>
        </div>
    )

}