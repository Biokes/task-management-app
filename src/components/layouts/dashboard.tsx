import React from 'react'
import Summary from "./summary";
import Todos from "./todos";

export default function Dashboard() {
    return (
        <div className={'bg-[var(--background-color)]'}>
            <Summary/>
            <Todos/>
        </div>
    )
}
