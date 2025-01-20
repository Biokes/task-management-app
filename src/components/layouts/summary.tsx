import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import Progress from "./progress";
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function Summary() {


    return (
        <div className={'w-[100%] sm:ml-[20px]  sm:w-[400px] mt-[10px] p-[20px_10px] shadow-md rounded-md'}>
            <div className={'flex gap-[10px] items-center'}>
                <AssignmentIcon style={{color:'var(--icons-color)'}}/>
                <p className={'pt-[5px]'}>Tasks status</p>
            </div>
            <div className={'flex justify-around w-full px-[10px] py-[10px]'}>
                <Progress percent={10} text={'completed'} color={'green'}/>
                <Progress percent={9} text={'ongoing'} color={'blue'}/>
                <Progress percent={12} text={'pending'} color={'orange'}/>
            </div>
        </div>
    )
}
