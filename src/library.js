// ES6 MODULES
// import / export 
const a = 1;
const b = 2;
const c = 3;

export const b_ex = b;
export const a_ex = b;

export default function show() {
    console.log ("WOW! Im a dynamic PRINT");
}





//can be written in that order
// export {
//     b_ex: b,
//     a_ex: a
// }


// import { b_ex, a_ex } from './library';
// import show from './library';

// show();


// console.log( "Exported 'a' var is: " + a_ex );
// console.log( "Exported 'b' var is: " + b_ex );