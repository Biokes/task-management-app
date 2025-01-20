import React from "react";

export default function ColoredDot({ color, size }: { color: string; size?: number }) {
    const dotStyle = {
        backgroundColor: color,
        width: size || 10,
        height: size || 10,
        borderRadius: "50%",
        display: "inline-block",
    };
    return <span style={dotStyle}></span>;
}