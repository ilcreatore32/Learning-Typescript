"use strict";
const data = [1, 2, 3, 4, 5, "Numeros", true];
function game(dificulty) {
    switch (dificulty) {
        case 1:
            console.log("Meh");
            break;
        case 2:
            console.log("Easy");
            break;
        case 3:
            console.log("Normal");
            break;
        case 4:
            console.log("Hard");
            break;
        case 5:
            console.log("Dead");
            break;
        default:
            console.log("Normal");
            break;
    }
}
console.log(game(5));
