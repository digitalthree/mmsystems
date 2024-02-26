import image1 from "../../public/img/galleria/img1.png"
import image2 from "../../public/img/galleria/img2.png"
import {StaticImageData} from "next/image";

export interface Img {
    id: number,
    staticImage: StaticImageData,
    src: string
    alt: string,
    width: number,
    height: number
}


export let images:Img[] = [
    {id: 1, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery1", width: 600, height: 600},
    {id: 2, staticImage: image2, src: "/img/galleria/img2.png",  alt: "gallery2", width: 600, height: 600},
    {id: 3, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
    {id: 4, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
    {id: 5, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
    {id: 6, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
    {id: 7, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
    {id: 8, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
    {id: 9, staticImage: image1, src: "/img/galleria/img1.png",  alt: "gallery3", width: 600, height: 600},
]