/* Learning callback functions
   Callbakcs
*/
function add(n1: number, n2: number, callback: (resultado: number) => void) {
    const result = n1 + n2;
    callback(result);
  }
  
  add(7,7,(result)=>{
    console.log(result);
  })