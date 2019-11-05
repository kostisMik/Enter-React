import React from 'react';
// => <MyButton></MyButton>
import './MyButton.css'

function MyButton( props ){
    let color = "black";
    if ( typeof props.bgc !== "undefined" ){
       color = props.bgc;
    } 

    return ( 
        // double curlies mean that first we enter into js and then into css ;)    
    <section style={{
        backgroundColor: color,
        margin: "10px"
    }}>
        <button className="btn">{props.txt}</button>
        </section> 
    );
}

export default MyButton;
