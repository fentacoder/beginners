const tuna = [
    {
        name: 'Jamar',
        age: 20
    },
    {
        name: 'John',
        age: 25
    },
    {
        name: 'Jane',
        age: 23
    }
];

const newArr = tuna.map(profile => ({...profile,'favoriteFood': 'pizza'}));
console.log(newArr);
const finalArr = [...newArr, {name: 'Tom',age: 23,favoriteFood: 'pasta'}];
console.log(finalArr);