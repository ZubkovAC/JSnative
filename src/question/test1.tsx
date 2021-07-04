import React, {useState} from "react";
import {useEffect} from "react";
import './test.css'

export const Test = () => {

    // const [c, setC] = useState<number>(1)
    // useEffect(() => {
    //     setInterval(() => setC(c => c + 1), 1000)
    // }, [])

    return (

        <div>
            {/*<div>{c}</div>*/}
            <div className='red blue'>RED</div>
            <div className='blue red '>BLUE</div>
        </div>
    )
}

export const Test1 = () => {
    return (
        <span>
            <img src="https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg" alt="cat"/>
            <img src="https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg" alt="cat"/>
            <img src="https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg" alt="cat"/>
        </span>

    )
}



