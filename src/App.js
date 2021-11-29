import React from 'react';
import { Counter } from './counter';
import counterSlice from './counterSlice';

const App = () => {
    return (
        <div>
            <counterSlice/>
            <Counter/>
        </div>
    );
};

export default App;