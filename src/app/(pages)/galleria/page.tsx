import React from 'react';
import ImageLightBox from "@/app/(pages)/galleria/components/ImageLightBox";
import {fetchImages} from "@/pages/api/gallery";


export default async function Page() {
    const photos = await fetchImages()
    return (
        <div className="w-full relative ">
            <div className="container bg-[#e4e4e4] gap-4 py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <ImageLightBox data={photos}/>
            </div>
        </div>

    )
}
