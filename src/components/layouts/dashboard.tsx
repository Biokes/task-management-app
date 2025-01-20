import React from 'react'
import Summary from "./summary";
import Todos from "./todos";

export default function Dashboard() {
    return (
        <div>
            <Summary/>
            <Todos/>
        </div>
    )
}
