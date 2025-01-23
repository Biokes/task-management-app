import React from 'react'

export default function EmptyComponent(props: {text:string}) {
    return (
            <p className={'flex justify-center items-center  w-full h-full text-center capitalize border-[0.5px] shadow'}>
                {props.text}
            </p>
    )
}
