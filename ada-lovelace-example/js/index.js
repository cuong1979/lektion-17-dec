import React from 'react';
import ReactDOM from 'react-dom'

import Image from './image';
import About from './about';

function App() {
    return (
        <section>
            <h1>Ada Lovelace</h1>
            <Image />
            <About />
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));