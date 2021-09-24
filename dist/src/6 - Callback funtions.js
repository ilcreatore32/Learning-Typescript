"use strict";
function add(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
add(7, 7, (result) => {
    console.log(result);
});
