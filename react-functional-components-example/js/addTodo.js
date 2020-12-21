import React from 'react';
import { render } from 'react-dom';

class AddTodo extends React.Component {
    constructor (props) {
        super(props);
    }


render(){
    return(
        <section>
            <input type="text" placeholder="skriv en Todo" />
            <button>Lägg Till</button>
        </section>
        )
    }
}

export default AddTodo;