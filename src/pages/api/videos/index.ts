import type { NextApiRequest, NextApiResponse } from 'next'
import {Video, videos} from "@/data/images";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Video[]>
) {
    const videos = await fetchVideos()

    res.status(200).json(videos)
}

export async function fetchVideos() {
    return videos;
}
