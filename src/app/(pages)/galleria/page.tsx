import React from 'react';
import ImageLightBox from "@/app/(pages)/galleria/components/ImageLightBox";
import {fetchImages} from "@/pages/api/gallery";


export default async function Page() {
    const photos = await fetchImages()
    return (
        <div className="w-full relative ">
            <div className="container bg-[#e4e4e4] py-20 mx-auto columns-1 gap-5 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-3">
                <ImageLightBox data={photos}/>
            </div>
        </div>

    )
}
