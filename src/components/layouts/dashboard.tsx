import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import Progress from "./progress";
export default function Dashboard() {


    return (
        <div className={'w-[100%] p-[20px_10px] shadow-md rounded-md'}>
            <div>
                <p>Tasks status</p>
            </div>
            <div className={'flex justify-around w-full px-[10px]'}>
                <Progress percent={0} text={'completed'} color={'green'}/>
                <Progress percent={0} text={'ongoing'} color={'blue'}/>
                <Progress percent={0} text={'pending'} color={'orange'}/>
            </div>
        </div>
    )
}
