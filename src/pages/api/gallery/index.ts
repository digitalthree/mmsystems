import type { NextApiRequest, NextApiResponse } from 'next'
import {images, Img} from "@/data/images";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Img[]>
) {
    const images = await fetchImages()

    res.status(200).json(images)
}

export async function fetchImages() {
    return images;
}
