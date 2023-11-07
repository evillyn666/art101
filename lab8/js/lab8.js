/*
 * Author: Evelyn Anguiano
 * Created: 5 November 2023
 */

function add(x){
    return (x + 1);
}
 
// test function

array = [ 3, 7, 50, 77, 47, 10, 8 ]
console.log("My array", array);

 result = array.map(add);
// should return [4, 8, 51, 70, 48, 11, 9]
console.log("Array plus 1:", result);

result = array.map(function(x){
    return x + 5;
})
// should return [8, 12, 55, 82, 52, 15, 13]
console.log("Array plus 5:", result);
