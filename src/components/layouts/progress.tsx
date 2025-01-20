import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import React from "react";
import ColoredDot from "./coloredDot";

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})`;
type Color = string | RGBA | HSLA;
export default function Progress(props:{percent:number,text:string, color?:Color}){
    return (
        <div className={'w-[70px] h-[70px]'}>
            <CircularProgressbar value={props.percent} text={`${props.percent}%`} strokeWidth={10}
                                 styles={buildStyles({pathColor: props.color || '#d6d6d6'})}/>
            <div className={'flex gap-[10px] items-center justify-center'}>
                <ColoredDot color={props.color as string} size={10}/>
                <p className={'capitalize text-[11px]  font-[650] text-nowrap mt-[5px]'}>{props.text}</p>
            </div>
        </div>
    )
}