import React, {useMemo, useState} from "react";
import {useEffect} from "react";
import './test.css'

type TestPropsType = {
    kardan:Array<number>
    sspeed:{name:string, speed:number}
}


export const Test = (props:TestPropsType) => {

    const [c, setC] = useState<number>(1)
    // const [speed, setSpeed] = useState<number>(1)
    // const [revs, setRevs] = useState<number>(1)
    let speed = 1
    let revs = 'revs'

    // let sspeed = {
    //     ...props.sspeed,
    //     wegth:1500
    // }
    let sspeed = useMemo(() =>({...props.sspeed, wegth:1500}),[props.sspeed])


        // let kard = props.kardan.filter(t => t <= 3)
     let kard = useMemo(() => props.kardan.filter(t => t <= 3), [props.kardan])

    useEffect(() => {
        //setInterval(() => setC(c => c + 1), 1000)
    }, [])

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(count + 1);
    //     }, 2000);
    //     return () => clearInterval(id);
    // }, [count]);

    return (

        <div>
            <div>{c}</div>
            <div>{count}</div>
            <button onClick={() => setC(c + 1)}>up</button>
            <div className='red blue'>RED</div>
            <div className='blue red '>BLUE</div>
            <Car speed={speed}/>
            <Wheels revs={revs}/>
            <Kardan kard={kard}/>
            <Boost sspeed={sspeed}/>
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

const Car = (props: any) => {
    console.log('Car')
    return <div>
        {props.speed}
    </div>
}
const Wheels = React.memo((props: any) => {
    console.log('Wheels')
    return <div>
        {props.revs}
    </div>
})
const Kardan = React.memo((props: any) => {
    console.log('Kardan')
    return <div>
        {props.kard}
    </div>
})
const Boost = React.memo((props: any) => {
    console.log('Boost')
    return <div>
        {props.sspeed.wegth}
    </div>
})


// analog class Component
// function Example() {
//     const [count, setCount] = useState(0);
//     const latestCount = useRef(count);
//
//     useEffect(() => {
//         // Установить мутабельное значение в самое свежее состояние count
//         latestCount.current = count;
//         setTimeout(() => {
//             // Прочитать мутабельное значение с самыми свежими данными
//             console.log(`You clicked ${latestCount.current} times`);
//         }, 3000);
//     });



