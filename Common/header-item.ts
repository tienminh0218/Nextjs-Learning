import {
    HomeIcon,
    BackspaceIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import { SVGProps } from "react";

export interface HeaderItemType {
    title: string;
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const headerItem: HeaderItemType[] = [
    {
        title: "HOME",
        Icon: HomeIcon,
    },
    {
        title: "TRENDING",
        Icon: LightningBoltIcon,
    },
    {
        title: "VERIFY",
        Icon: BackspaceIcon,
    },
    {
        title: "COLLECTIONS",
        Icon: CollectionIcon,
    },
    {
        title: "SEARCH",
        Icon: SearchIcon,
    },
    {
        title: "ACCOUNTS",
        Icon: UserIcon,
    },
];
