import React from 'react';
import ImageLightBox from "@/app/(pages)/galleria/components/ImageLightBox";

async function getData() {
    const res = await fetch(
        "https://api.pexels.com/v1/curated",
        {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY as string,
            },
        }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const {photos} = await getData()
    return (
        <div className="w-full relative">
            <div className="container py-20 mx-auto columns-1 gap-5 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4" style={{backgroundColor: "white"}}>
                <ImageLightBox data={photos}/>
            </div>
        </div>

    )
}
