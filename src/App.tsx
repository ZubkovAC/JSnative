import React from 'react';
import './lessons/lesson1/lesson1';
import Lesson3 from './lessons/lesson3/lesson3';
import Lesson1 from "./lesson среда четверг/lesson1/lesson1";
import {Provider} from "react-redux";
import {store} from "./redux/state";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Lesson1 />
      {/*<Lesson2 />*/}
      {/*<Lesson3 />*/}
          </Provider>
    </div>
  );
}

export default App;
