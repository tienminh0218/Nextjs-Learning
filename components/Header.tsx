import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { headerItem } from "../Common/header-item";

interface Props {}

const NavBar = (props: Props) => {
    return (
        <div>
            <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
                {/* Header Item */}
                <div className="flex justify-evenly flex-grow max-w-2xl">
                    {headerItem.map((item) => (
                        <HeaderItem key={item.title} title={item.title} Icon={item.Icon} />
                    ))}
                </div>

                {/* Logo */}
                <Image className="object-contain" src="http://links.papareact.com/ua6" width={200} height={100} />
            </header>
        </div>
    );
};

export default NavBar;
