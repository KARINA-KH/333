//date - дописать!
/*var d = new Date();

min = d.getMinutes();
h = d.getHours();
day =d.getDate();
mon = (d.getMonth() + 1).toString;
year = d.getFullYear().toString();

var d1 = new Date1("DayOfWeek b:a - e.c.f");

console.log(`${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`);
    return `${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`;

*/




/*//sort
var flowers = ["chamomile", "rose", "pion"];
console.log(flowers);

function Flowers() {
  flowers.sort();
console.log(flowers);
  fruits.reverse();
console.log(flowers);
}*/


//properties - 3
var sb = " ";
var person = {
    name: "Karina",
    surname: "Khomyak",
    age: 18
  };
var temp;
for (temp in person) {
    sb += person[temp] + " ";
}
console.log(sb);





//unique elements
function notSimilar(array) {
    var objec = {};
    for (let i = 0; i < array.length; i++) {
      let string = array[i];
      objec[string] = true; 
    }
    return Object.keys(objec); 
  }
  
 var strings = ["rose", "rose", "chamomile", "pion", "chamomile"];
console.log( notSimilar(strings) );