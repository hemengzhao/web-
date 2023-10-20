var foo = { bar: 1 };
var arr1 = [1, 2, foo];
var arr2 = arr1.slice(1); // [2, foo]
arr2[0]++; // arr2 => [3, foo]
arr2[1].bar++; // foo => { bar: 2 }
foo.bar++; // foo => { bar: 3 }
arr1[2].bar++; // foo => { bar: 4 }
console.log(arr[1] === arr2[0]); // 2 === 3 => false
console.log(arr1[2] === arr2[1]); // foo === foo => true
console.log(foo.bar); // 4
