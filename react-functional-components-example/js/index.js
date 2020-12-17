import React from 'react';
import ReactDOM from 'react-dom';

import Name from './name';

//Måste alltid starta med en stor bokstav för att React ska veta att det är en komponent
//Parenteser efter return används för att kunna skriva på fler rader
function App() {
    return (
        <section className="wrapper">
            <h1>Hello World</h1>
            <Name />
        </section>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));