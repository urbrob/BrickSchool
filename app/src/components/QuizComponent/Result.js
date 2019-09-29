import React from 'react';


function Result(props) {
    return (
        <div>
            <h1>Twój typ inteligencji to {props.type}</h1>
            <p>Charakterystyka: {props.characteristic}</p>
            <p>Przykładowe zawody: {props.job}</p>
        </div>
    );
}

export default Result;