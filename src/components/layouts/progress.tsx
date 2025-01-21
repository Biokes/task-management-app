import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import React from "react";
import ColoredDot from "./coloredDot";

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})`;
type Color = string | RGBA | HSLA;
export default function Progress(props:{percent:number,text:string, color?:Color}){

    return (
        <div className={'w-[65px] h-[60px] sm:w-[80px] sm:h-[80px]'}>
            <CircularProgressbar value={props.percent} text={`${props.percent}%`} strokeWidth={10}
                                 styles={buildStyles({pathColor: props.color || '#d6d6d6'})}/>
            <div className={'flex gap-[10px] items-center justify-center'}>
                <ColoredDot color={props.color as string} size={8}/>
                <p className={'capitalize text-[10px]  font-[580] text-nowrap mt-[5px]'}>{props.text}</p>
            </div>
        </div>
    )
}
