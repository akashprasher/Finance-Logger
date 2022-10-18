// Arrays
const names = ['Mario', 'Yosi', 'Aayu'];
names.push('pric'); // Can not insert any other type value

const nums = [1, 2, 3, 4, 5];
nums.push(6); // Can not insert any other type value

const mixed = [1, 2, 3, 4, 'alpha'];
mixed.push(5);
mixed.push('beta'); // possible to insert two different types of values because they're present in original one

// Objects
let ninja = {
    name: 'Mario',
    belt: 'black',
    age: 24
}

// In later stages we can not add new property in the object and also can not change the type of objects property with a type value