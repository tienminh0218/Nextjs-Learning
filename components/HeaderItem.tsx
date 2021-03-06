import React from "react";
import { HeaderItemType } from "../Common/header-item";

const HeaderItem = ({ Icon, title }: HeaderItemType) => {
    return (
        <div className="group flex flex-col items-center hover:text-white cursor-pointer w-12 sm:w-20">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100  tracking-widest">{title}</p>
        </div>
    );
};

export default HeaderItem;
