import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

interface Props {
    data: any;
}

const Content = (props: Props) => {
    return (
        <FlipMove className="px-5 my-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
            {props.data.map((item: any) => (
                <Thumbnail key={item.id} result={item} />
            ))}
        </FlipMove>
    );
};

export default Content;
