var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];


namesunder3 = names.filter(name => name.length <= 3);

console.log(names);
console.log(namesunder3);

const uppercasednames = names.map(nameupper => nameupper.toUpperCase());

console.log(uppercasednames);