/* Learning literal data and alias type 
   datos literales y alias de tipo
*/
function calcularRectArea(base: number, height: number) {
    console.log("Calculando...");
    return base * height;
  }
  
  let Calculo: (b: number, h: number) => number;
  Calculo = calcularRectArea;
  
  console.log(Calculo(5, 2));