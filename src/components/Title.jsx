import React from 'react';

function Title( props ){
    return ( 
        <>
            <hr/>
            <h2 style={{
                 borderBottom: "5px dotted black",
                 display: "inline-block"
                 }}>{props.children}</h2>
            <hr/>
        </>
    );
}

export default Title;