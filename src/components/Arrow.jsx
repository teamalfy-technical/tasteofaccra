import React from 'react'
import arrowUp from '../assets/images/icons/arrow-up-right.svg';

const Arrow = () => {
    return (
        <div>
            <figure className=' bg-transparent hover:bg-Pink cursor-pointer rounded-full border border-white p-2'>
                <img src={arrowUp}></img>
            </figure>
        </div>
    )
}

export default Arrow
