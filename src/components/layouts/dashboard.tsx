import React from 'react'
import Summary from "./summary";
import Todos from "./todos";

export default function Dashboard() {
    return (
        <div className={'bg-[var(--background-color)] flex flex-col gap-[10px] mb-[30px] h-full overflow-y-auto'}>
            <Summary/>
            <Todos/>
        </div>
    )
}
