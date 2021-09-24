/* Learning unknown type
   tipado desconocido
*/

export let userInput:unknown = null;
//let userInput:any = null;
userInput = "Hello";
userInput = 4;
userInput = true;

//const number:number = userInput;

if (typeof userInput === "number"){
  const number:number = userInput;
}