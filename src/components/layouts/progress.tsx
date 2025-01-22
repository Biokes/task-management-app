import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import React from "react";
import ColoredDot from "./coloredDot";

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})`;
type Color = string | RGBA | HSLA;
export default function Progress(props:{percent:number,text:string, color?:Color}){

    return (
        <div className={''}>
            <CircularProgressbar value={props.percent} text={`${props.percent}%`} strokeWidth={10} className={'w-[65px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[60%] md:h-[60%]'}
                                 styles={buildStyles({pathColor: props.color || '#d6d6d6'})}/>
            <div className={'flex gap-[10px] items-center justify-center md:pt-[10px]'}>
                <ColoredDot color={props.color as string} size={8}/>
                <p className={'capitalize text-[10px]  font-[580] text-nowrap mt-[5px] md:text-[15px]'}>{props.text}</p>
            </div>
        </div>
    )
}
