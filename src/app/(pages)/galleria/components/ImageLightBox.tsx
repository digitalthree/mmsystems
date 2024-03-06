"use client"
import React, {ReactNode, useEffect, useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import {Img} from "@/data/images";

export interface ImageLightBoxProps{
    data: Img[]
}

const ImageLightBox: React.FC<ImageLightBoxProps> = ({data}) => {
    const [open, setOpen] = React.useState(false);
    const [images, setImages] = useState<{ src: string }[]>([])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        data.forEach((d) => {
            setImages((prevState:any) => [...prevState, {src: d.src}])
        })
    }, []);
    return(
        <>
            {data.map((d:any, index:number)  => {
                return(
                    <Image key={d.id} src={d.src} width={d.width} height={d.height} className="hover:scale-105 duration-500"  alt={d.alt}
                           onClick={() => {
                               setOpen(true)
                               setIndex(index)
                           }}
                    />
                )
            })}

            <Lightbox
                open={open}
                index={index}
                close={() => setOpen(false)}
                slides={images}
            />
        </>
    )
}

export default ImageLightBox