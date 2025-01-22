import React from 'react'

export default function EmptyComponent(props: {text:string}) {
    return (
            <p className={'py-[30px] flex justify-center items-center w-full text-center capitalize border-[0.5px] shadow sm:h-[100%]'}>
                {props.text}
            </p>
    )
}
