/* Learning Type Functions
   Funciones Tipadas
*/
import { side, text, user, respond, skills } from "./1 - DataTypes";

function CalcSquareArea(
  side: number,
  text: string,
  respond: boolean,
  user: string
) {
  const area: number = side * side;
  if (respond) {
    return user + text + area;
  }
}

console.log(CalcSquareArea(side, text, respond, user.name));
console.log(`Habilidades de ${user.name}: `);
for (let skill of skills) {
  console.log(skill);
}
