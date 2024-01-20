"use client"
import React, {ReactNode, useEffect, useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

export interface ImageLightBoxProps{
    data: any
}

const ImageLightBox: React.FC<ImageLightBoxProps> = ({data}) => {
    const [open, setOpen] = React.useState(false);
    const [images, setImages] = useState<{ src: string }[]>([])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        data.forEach((d: { src: { original: string; }; }) => {
            setImages((prevState:any) => [...prevState, {src: d.src.original}])
        })
    }, []);
    return(
        <>
            {data.map((d:any, index:number)  => {
                return(
                    <Image key={d.id} src={d.src.large} width={d.width} height={d.height} className="mt-4 rounded-xl hover:scale-105 duration-500"  alt={"IMAGE"}
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