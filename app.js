import {users} from './data.js'


// Bo'sh foydalanuvchilar massivi


function addUser(arr, name, lastname, age, job, email, password) {
  let newUser = {
    // Massiv uzunligiga qarab har safar avtomatik har xil ID beramiz
    id: arr.length + 1, 
    name,
    lastname,
    age,
    job,
    email,
    password,
  };

  // Yangi foydalanuvchini massiv ichiga qo'shib qo'yamiz (push orqali)
  arr.push(newUser);

  return newUser;
}

// Funksiyani chaqirib tekshirib ko'ramiz
console.log(
  addUser(
    users,
    "john",
    "macgregor",
    34,
    "boxer",
    "johndoe@gmail.com",
    "1234",
  ),
);

// Hamma foydalanuvchilar ro'yxatini ko'rish
console.log(users);
=======================================================================================================
let users = [];

// 1. Foydalanuvchi qo'shish funksiyasi
function addUser(arr, name, lastname, age, job, email, password) {
  let newUser = {
    id: arr.length + 1, 
    name,
    lastname,
    age,
    job,
    email,
    password,
  };
  arr.push(newUser);
  return newUser;
}

// 2. Foydalanuvchini ID bo'yicha o'chirish funksiyasi
function deleteUser(arr, id) {
  let index = arr.findIndex(user => user.id === id);

  if (index === -1) {
    return "user not found";
  }

  arr.splice(index, 1);
  return "user successful";
}

// --- Sinovdan o'tkazish ---

// Foydalanuvchilar qo'shamiz
addUser(users, "john", "macgregor", 34, "boxer", "johndoe@gmail.com", "1234");
addUser(users, "alex", "smith", 28, "developer", "alex@gmail.com", "5678");

console.log("Boshlang'ich massiv:", users);

// 1-ID egasini o'chiramiz
console.log(deleteUser(users, 1)); // "user successful" chiqadi

// YAKUNIDA YANGILANGAN USERS MASSIVINI KONSOLGA CHIQARISH:
console.log("Yangilangan users massivi:", users);
========================================================================================================================
100-masala
function namuna(str) {
    let parts = str.split('*');
    let tag = parts[0];
    let count = Number(parts[1]);
    
    return `<${tag}></${tag}>`.repeat(count);
}
console.log(namuna("div*2")); 
console.log(namuna("p*1"));   
console.log(namuna("li*3"));  
===========================================================================================================================
101-masala
function namuna(n) {
    let yigindi = 0;
    for (let i = 1; i <= n; i++) {
        yigindi += i;
    }
    return yigindi;
}

console.log(namuna(3));  // 6
console.log(namuna(10)); // 55
console.log(namuna(7));  // 28
// ==============================================================================================
102-masala
function namuna(son, obj) {
    
    return son >= obj.min && son <= obj.max;
}


console.log(namuna(4, { min: 0, max: 5 }));  // true
console.log(namuna(4, { min: 4, max: 5 }));  // true
console.log(namuna(4, { min: 6, max: 10 })); // false
console.log(namuna(5, { min: 5, max: 5 }));  // true
============================================================================================================
103-masala
function namuna(son) {
    let kvadrat = son * son;
    let sonStr = son.toString();
    let kvStr = kvadrat.toString();
    
    return kvStr.endsWith(sonStr);
}


console.log(namuna(1));  
console.log(namuna(3));  
console.log(namuna(6));  
console.log(namuna(95)); 
=====================================================================================================================
104-masala
function namuna(arr) {
    return arr.map((element, index) => element + index);
}

console.log(namuna([0, 0, 0, 0, 0])); 
console.log(namuna([1, 2, 3, 4, 5])); 
console.log(namuna([5, 4, 3, 2, 1])); 
==============================================================================================================
105-masala
function namuna(ichimliklar) {
    
    return ichimliklar.filter(item => item !== "cola" && item !== "fanta");
}


console.log(namuna(["fanta", "cola", "water"]));                 
console.log(namuna(["fanta", "cola"]));                          
console.log(namuna(["lemonade", "beer", "water"]));             
======================================================================================================
106-masala
function namuna(son) {
    return son.toString().length;
}

console.log(namuna(123));          
console.log(namuna(56));           
console.log(namuna(7154));         
console.log(namuna(61217311514));  
console.log(namuna(0));            
===============================================================================================================
107-masala
function namuna(son) {
    
    return Number(son.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(namuna(123));   
console.log(namuna("001")); 
console.log(namuna(999));   
console.log(namuna(784));   
=========================================================================================================================
108-masala
function namuna(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(namuna(5, 9));
console.log(namuna(5, 9)); 
console.log(namuna(5, 9));
=============================================================================================================================
109-masala
function namuna(son) {
    let sonStr = son.toString();
    let uzunlik = sonStr.length;
    let yigindi = 0;
    
    for (let i = 0; i < uzunlik; i++) {
        yigindi += Math.pow(Number(sonStr[i]), uzunlik);
    }
    
    return yigindi === son;
}

console.log(namuna(153));  
console.log(namuna(370));  
console.log(namuna(1652)); 
===============================================================================================================================
110-masala
function namuna(str) {
    let sanoq = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            sanoq++;
        }
    }
    return sanoq;
}

function namunaQisqa(str) {
    let match = str.match(/[A-Z]/g);
    return match ? match.length : 0;
}
console.log(namuna("fvLzpxmgXSDrobbgMVrc")); // 6
console.log(namuna("JMZWCneOTFLWYwBWxyFw")); // 14
console.log(namuna("mqeytbbjwqemcdrdsyvq")); // 0
