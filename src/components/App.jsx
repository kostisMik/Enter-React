import React, {useState} from 'react';
import Money from './Money';
import Title from './Title';
import './App.css';

function App(){
    
    const [ data , setData ] = useState([]);
    const handleClick = () =>{

        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then( ( res )=> res.json() )
        .then( ( data )=>{
            setData([ data.bpi.USD, data.bpi.GBP, data.bpi.EUR ])
        })
        .catch((error)=>{
            console.error(error);
        })
    };

    return ( 
        <main onClick={handleClick}>
           <Title>
               My <mark>Money</mark> App
               </Title>
            {/* <Money val={data[0]}/> */}
            {data.map((currency)=>{
               return <Money key={currency.code} val={currency} />
            })}
        </main>

    );

}

export default App;