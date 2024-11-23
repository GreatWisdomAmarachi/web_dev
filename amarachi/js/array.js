// array

let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10  ];
let str = 'Hello, World';
let code =['3', '0', '1']
let newstr ='';
for (let i = 0; i <str.length; i++) {
    if(str[i] === 'e'){
        newstr += code[0];
    }
    else if (str[i] === 'o'){
        newstr += code[1];
    }
    else if (str[i] === 'l'){
        newstr += code[2];
    }else{
        newstr += str[i];
    }
}
console.log(newstr);
let arr1 = []
for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i])
}
console.log(arr);
console.log(arr1);
arr[5] = 200
console.log(arr)
console.log(arr1)
console.log(str)

let arr2 =''    
for (let h = arr.length - 1; h >= 0; h++) {
        arr2.push(arr[h]);
    }
console.log(arr2)

let arr3=``
for()