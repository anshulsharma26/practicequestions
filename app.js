// const numbers = [5, 12, 8, 130, 44];
// //Output: [12, 130, 44]
// console.log(numbers.filter(num => num>10));

// const numbers = [1, 2, 3, 4];
// // Output: [2, 4, 6, 8]
// console.log(numbers.map( number => number*2))

// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Doe' }
// ];

// const arr = users.map( user => user.name)
// console.log(arr)
// // Output: ['John', 'Jane', 'Doe']

// const people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 15 },
//     { name: 'Daisy', age: 19 }
// ];

// people.forEach(people => {
//     if(people.age > 18){
//         console.log(people.name.toUpperCase())
//     }    
// });
// Output: BOB, DAISY

// const users = [
//     { id: 1, address: { city: 'New York' } },
//     { id: 2, address: { city: 'Los Angeles' } },
//     { id: 3, address: { city: 'Chicago' } }
// ];

// const cities = users.map(user => user.address.city)
// console.log(cities)

// const users = [
//     { id: 1, address: { city: 'New York', country: 'USA' } },
//     { id: 2, address: { city: 'Los Angeles', country: 'USA' } },
//     { id: 3, address: { city: 'Chicago', country: 'USA' } },
//     { id: 4, address: { city: 'Toronto', country: 'Canada' } },
//     { id: 5, address: { city: 'Chicago', country: 'USA' } },
//     { id: 6, address: { city: 'Boston', country: 'USA' } }
// ];
// const usaCountries = users.filter(user => user.address.country == 'USA');
// const usaCities = usaCountries.map(user => user.address.city);
// let set = new Set(usaCities);
// console.log([...set].sort())
// console.log(usaCities);

// Bubble Sort 

let arr = [81,111,78,23,105,99,80];
bubbleSort(arr)
console.log(arr)
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(j=i; j<arr.length; j++){
            if(arr[i]>arr[j]){
                arr[i] = arr[i] + arr[j]
                arr[j] = arr[i] - arr[j]
                arr[i] = arr[i] - arr[j]
            }
        }
    }
}

