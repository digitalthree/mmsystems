"use client"
import {globalStore} from "@/store/globalStore";

export default function Page() {
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)
    const loading = globalStore((state: any) => state.loading)
    return (
        <div className="w-full h-[85vh] flex justify-center items-center" style={{backgroundColor: navbarBackgroundColor}}>
            <h1>Contattaci</h1>
        </div>
    )
}