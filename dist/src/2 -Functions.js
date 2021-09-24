"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Learning Type Functions
   Funciones Tipadas
*/
const _1___DataTypes_1 = require("./1 - DataTypes");
function CalcSquareArea(side, text, respond, user) {
    const area = side * side;
    if (respond) {
        return user + text + area;
    }
}
console.log(CalcSquareArea(_1___DataTypes_1.side, _1___DataTypes_1.text, _1___DataTypes_1.respond, _1___DataTypes_1.user.name));
console.log(`Habilidades de ${_1___DataTypes_1.user.name}: `);
for (let skill of _1___DataTypes_1.skills) {
    console.log(skill);
}
