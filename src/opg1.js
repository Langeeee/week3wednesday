var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
const men = ["Hans", "Kurt"];
const all = boys.concat(girls);

console.log(all);

console.log(all.join());

console.log(all.join('-'));

all.push('Lone','Gitte');
console.log(all);


const all2 = men.concat(all);

console.log(all2);

const firstname = all2.shift();
console.log(all2);

console.log(all2.pop());

console.log(all2);

all2.splice(3,2);

console.log(all2);

const girlsfirst = all2.reverse();

console.log(girlsfirst);

girlsfirst.sort();

console.log(girlsfirst);

const uppercased = girlsfirst.map(all2 => all2.toUpperCase());

console.log(uppercased);



let startsWithIL = all2.filter(function (namewithoutIL) {
  return namewithoutIL[0].toLowerCase() === 'l';
});

console.log(startsWithIL);
