import React from 'react';
import './App.css'
import MyButton from './MyButton';
import MyList from './MyList';
import Default from './MyButton';

function App(){
    const content = <div>
        <p>Hello Kostix</p><br></br>
        {/* THIS IS JSX COMMENT, we go into JS MODE  */}
        <MyButton bgc="orange" txt="Txt 1"></MyButton>
        <MyButton bgc="hotpink" txt="Txt 2"></MyButton>
        <MyButton txt="Dis di 3">{Default}</MyButton>
        <MyList></MyList>
    </div>;
    return content;
}


export default App;