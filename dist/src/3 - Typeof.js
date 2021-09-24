"use strict";
function merge(first, second) {
    if (typeof first === "number" && typeof second === "number") {
        console.log(first + second);
    }
    else if (typeof first === "string" && typeof second === "string") {
        console.log(first.toString() + second.toString());
    }
}
merge("hola", "Mundo");
