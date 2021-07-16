import React from 'react';
import './lessons/lesson1/lesson1';
import './lessonDegree34/lesson2/lesson2.ts';
import './lessonDegree34/lesson3/lesson_3.ts';
import './lessonDegree34/lesson4/lesson_4.ts';
import './question/test1'
import './question/Promise'
import './question/task'
import {Test, Test1} from "./question/test1";


function App() {
    let sspeed = {
        name:'vw',
        speed:50
    }

     let kardan = [1, 2, 3, 4, 5]
    return (
        <div>
            {/*<Provider store={store}>*/}
            {/*<Lesson1 />*/}
            {/*    </Provider>*/}
            <Test kardan={kardan} sspeed={sspeed}/>
            {/*<Test1/>*/}
        </div>
    );
}

export default App;
