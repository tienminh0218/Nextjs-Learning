import { useRouter } from "next/router";
import React from "react";
import request from "../Common/navbar";

interface Props {}

const NavBar = (props: Props) => {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10  sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(request).map(([key, { title, url }]) => (
                    <h2
                        onClick={() => router.push(`/?genre=${key}`)}
                        className=" cursor-pointer flex-grow transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 "
                        key={key}
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 h-8 w-2/12 sm:w-1/12 bg-gradient-to-l from-gray-800  " />
        </nav>
    );
};

export default NavBar;
