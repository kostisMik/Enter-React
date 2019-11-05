import React from 'react';
import './MyList.css';

const name = <strong>"AFDEMP !"</strong>;
const list = [ name, name, name ];



function MyList(){
    return ( <section>
        <>
        <ul>
            <li>Im a List Item</li>
            <li>Code with Luv</li>
        </ul>
        <p>The school name is {name}</p>
        <p>3 * 8 = { 3*8 }</p>
        <div>
            { list }
        </div>
        </>
    </section> )
}

export default MyList;