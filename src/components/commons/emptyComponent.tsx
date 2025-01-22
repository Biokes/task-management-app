import React from 'react'

export default function EmptyComponent(props: {text:string}) {
    return (
            <p className={'py-[30px] w-full text-center capitalize border-[0.5px] shadow'}>
                {props.text}
            </p>
    )
}
