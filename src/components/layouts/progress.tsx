import {CircularProgressbar} from "react-circular-progressbar";
import React from "react";
import ColoredDot from "./coloredDot";

export default function Progress(props:{percent:number,text:string, color:string}){
    return (
        <div className={'w-[70px] h-[70px] md:w-[120px] md:h-[120px]'}>
            <CircularProgressbar value={props.percent} text={`${props.percent}%`} strokeWidth={10} />
            <div className={'flex gap-[10px] items-center justify-center'}>
                <ColoredDot color={props.color} size={10}/>
                <p className={'capitalize text-[11px] md:text-[15px] font-[650] text-nowrap mt-[5px]'}>{props.text}</p>
            </div>
        </div>

    )

}