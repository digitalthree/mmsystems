import type { NextApiRequest, NextApiResponse } from 'next'
import {images, imagesDinamica, imagesElettrica, imagesMeccanica, Img} from "@/data/images";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Img[]>
) {
    const imagesDinamica = await fetchImages()

    res.status(200).json(imagesDinamica)
}

export async function fetchImages() {
    return imagesDinamica;
}
