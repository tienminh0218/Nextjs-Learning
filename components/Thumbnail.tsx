import React, { forwardRef } from "react";
import Image from "next/image";
import { IMAGE_URL } from "../Common/url";
import { ThumbUpIcon } from "@heroicons/react/outline";

interface Props {
    result: any;
}

const Thumbnail = forwardRef(({ result }: Props, ref: any) => {
    return (
        <div ref={ref} className="p-2 group cursor-pointer">
            <Image
                className=" sm:group-hover:scale-105 transform hover:z-50 transition-all duration-100"
                layout="responsive"
                height={1080}
                width={1920}
                placeholder="blur"
                blurDataURL="loading.gif"
                src={`${IMAGE_URL}${result.backdrop_path || result.poster_path}`}
            />
            <div>
                <p className="truncate mt-1 max-w-md">{result.overview}</p>

                <h2 className="mt-1 text-white text-2xl transition-all group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>

                <p className="max-w-sm flex tracking-widest items-center opacity-0 group-hover:opacity-100 transition duration-100">
                    {result.release_date || result.first_air_date} • <ThumbUpIcon className="h-5 mx-1" />{" "}
                    {result.vote_count}
                </p>
            </div>
        </div>
    );
});

export default Thumbnail;
