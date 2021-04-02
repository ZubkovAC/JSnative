import React, {useState, useEffect} from 'react';
import './lesson3.css';

// @ts-ignore
console.log('lesson 3');

// https://learn.javascript.ru/obtaining-event-object
// https://learn.javascript.ru/introduction-browser-events#event-object
// https://ru.reactjs.org/docs/handling-events.html
// https://ru.reactjs.org/docs/events.html
// https://developer.mozilla.org/ru/docs/Web/API/Event/currentTarget


const Lesson3 = () => {
    const [input, setInput] = useState('Hello!');
    const [textarea, setTextarea] = useState('');
    useEffect(() => {
        let localValue: string | null = localStorage.getItem('test');
        localValue = localValue ? localValue : '';
        setInput(localValue);
    })

    const clickBig = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Big e.target: ', e.target);
        console.log('Big e.currentTarget: ', e.currentTarget);
    };
    const clickMiddle = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Middle e.target: ', e.target);
        console.log('Middle e.currentTarget: ', e.currentTarget);
    };
    const clickSmall = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Small e.target: ', e.target);
        console.log('Small e.currentTarget: ', e.currentTarget);
    };

    const setRandomBackground = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const randomNumber = () => Math.floor(Math.random()*256);
        e.currentTarget.style.backgroundColor=`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    };

    const inputOnChangeEvent = (e:React.FormEvent<HTMLInputElement>) => {
        localStorage.setItem('test', e.currentTarget.value);
        setInput(e.currentTarget.value);
    };
    const inputOnChangeEvent2 = (e:React.FormEvent<HTMLTextAreaElement>) => {
        setTextarea(e.currentTarget.value);
    };

    const inputOnKeyPressEvent = (e:React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
    };

    const inputOnKeyDownEvent = (e:React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        if (e.keyCode === 27) {
            console.log('Canceled');
        } else if (e.keyCode === 13) {
            console.log('accepted');
        }
    };

    const mouseOver = (e: React.MouseEvent<HTMLTextAreaElement>) => {
        console.log(e);
    }

    const inputOnBlureEvent = (e:React.FormEvent) => {}

    return(
        <div>
            <h2>Lesson3</h2>
            <h3>e.targe/currenttarget/preventdefault</h3>
            <div className='big' onClick={(e) => {
                clickBig(e);
                setRandomBackground(e);
            }}>
                <div className='middle' onClick={(e) => {
                    clickMiddle(e);
                    setRandomBackground(e);
                }}>
                    <div className='small' onClick={(e) => {
                        clickSmall(e);
                        setRandomBackground(e);
                    }}/>
                </div>
            </div>
            <h3>Form tag event</h3>
            <form>
                <p>
                    <input type="text" value={input} onChange={inputOnChangeEvent} onKeyDown={inputOnKeyDownEvent} onKeyPress={inputOnKeyPressEvent}/>
                </p>
                <p>
                    <textarea cols={30} rows={10} value={textarea} onChange={inputOnChangeEvent2} onMouseOver={mouseOver}/>
                </p>
                <button type='submit' onClick={(e) => e.preventDefault()}>Submit</button>
            </form>
        </div>
    );
};

export default Lesson3;