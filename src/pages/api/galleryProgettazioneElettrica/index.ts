import type { NextApiRequest, NextApiResponse } from 'next'
import {images, imagesElettrica, Img} from "@/data/images";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Img[]>
) {
    const imagesElettrica = await fetchImages()

    res.status(200).json(imagesElettrica)
}

export async function fetchImages() {
    return imagesElettrica;
}
