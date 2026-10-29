// import {users} from './data.js'


// // Bo'sh foydalanuvchilar massivi


// function addUser(arr, name, lastname, age, job, email, password) {
//   let newUser = {
//     // Massiv uzunligiga qarab har safar avtomatik har xil ID beramiz
//     id: arr.length + 1, 
//     name,
//     lastname,
//     age,
//     job,
//     email,
//     password,
//   };

//   // Yangi foydalanuvchini massiv ichiga qo'shib qo'yamiz (push orqali)
//   arr.push(newUser);

//   return newUser;
// }

// // Funksiyani chaqirib tekshirib ko'ramiz
// console.log(
//   addUser(
//     users,
//     "john",
//     "macgregor",
//     34,
//     "boxer",
//     "johndoe@gmail.com",
//     "1234",
//   ),
// );

// // Hamma foydalanuvchilar ro'yxatini ko'rish
// console.log(users);
// =======================================================================================================
// let users = [];

// // 1. Foydalanuvchi qo'shish funksiyasi
// function addUser(arr, name, lastname, age, job, email, password) {
//   let newUser = {
//     id: arr.length + 1, 
//     name,
//     lastname,
//     age,
//     job,
//     email,
//     password,
//   };
//   arr.push(newUser);
//   return newUser;
// }

// // 2. Foydalanuvchini ID bo'yicha o'chirish funksiyasi
// function deleteUser(arr, id) {
//   let index = arr.findIndex(user => user.id === id);

//   if (index === -1) {
//     return "user not found";
//   }

//   arr.splice(index, 1);
//   return "user successful";
// }

// // --- Sinovdan o'tkazish ---

// // Foydalanuvchilar qo'shamiz
// addUser(users, "john", "macgregor", 34, "boxer", "johndoe@gmail.com", "1234");
// addUser(users, "alex", "smith", 28, "developer", "alex@gmail.com", "5678");

// console.log("Boshlang'ich massiv:", users);

// // 1-ID egasini o'chiramiz
// console.log(deleteUser(users, 1)); // "user successful" chiqadi

// // YAKUNIDA YANGILANGAN USERS MASSIVINI KONSOLGA CHIQARISH:
// console.log("Yangilangan users massivi:", users);
// ========================================================================================================================
// 100-masala
// function namuna(str) {
//     // Stringni '*' belgisi bo'yicha bo'lib olamiz (masalan: ["div", "2"])
//     let parts = str.split('*');
//     let tag = parts[0];
//     let count = Number(parts[1]);
    
//     // Kerakli tegni takrorlanish sonicha hosil qilib birlashtiramiz
//     return `<${tag}></${tag}>`.repeat(count);
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna("div*2")); // <div></div><div></div>
// console.log(namuna("p*1"));   // <p></p>
// console.log(namuna("li*3"));  // <li></li><li></li><li></li>
// ===========================================================================================================================
// 101-masala
// function namuna(n) {
//     let yigindi = 0;
//     for (let i = 1; i <= n; i++) {
//         yigindi += i;
//     }
//     return yigindi;
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(3));  // 6
// console.log(namuna(10)); // 55
// console.log(namuna(7));  // 28
// // ==============================================================================================
// 102-masala
// function namuna(son, obj) {
//     // Son min va max orasida yotganligini tekshiramiz
//     return son >= obj.min && son <= obj.max;
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(4, { min: 0, max: 5 }));  // true
// console.log(namuna(4, { min: 4, max: 5 }));  // true
// console.log(namuna(4, { min: 6, max: 10 })); // false
// console.log(namuna(5, { min: 5, max: 5 }));  // true
// ============================================================================================================
// 103-masala
// function namuna(son) {
//     let kvadrat = son * son;
//     // Sonni stringga o'girib, kvadratning oxiri shu string bilan tugashini tekshiramiz
//     let sonStr = son.toString();
//     let kvStr = kvadrat.toString();
    
//     return kvStr.endsWith(sonStr);
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(1));  // true
// console.log(namuna(3));  // false
// console.log(namuna(6));  // true
// console.log(namuna(95)); // false
// =====================================================================================================================
// 104-masala
// function namuna(arr) {
//     // map metodi yordamida har bir elementga uning indexini qo'shamiz
//     return arr.map((element, index) => element + index);
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna([0, 0, 0, 0, 0])); // [0, 1, 2, 3, 4]
// console.log(namuna([1, 2, 3, 4, 5])); // [1, 3, 5, 7, 9]
// console.log(namuna([5, 4, 3, 2, 1])); // [5, 5, 5, 5, 5]
// ==============================================================================================================
// 105-masala
// function namuna(ichimliklar) {
//     // filter metodi yordamida 'cola' va 'fanta' bo'lmaganlarini qoldiramiz
//     return ichimliklar.filter(item => item !== "cola" && item !== "fanta");
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(["fanta", "cola", "water"]));                 // ["water"]
// console.log(namuna(["fanta", "cola"]));                          // []
// console.log(namuna(["lemonade", "beer", "water"]));             // ["lemonade", "beer", "water"]
// ======================================================================================================
// 106-masala
// function namuna(son) {
//     // Sonni stringga o'girib, uning uzunligini (length) olamiz
//     return son.toString().length;
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(123));          // 3
// console.log(namuna(56));           // 2
// console.log(namuna(7154));         // 4
// console.log(namuna(61217311514));  // 11
// console.log(namuna(0));            // 1
// ===============================================================================================================
// 107-masala
// function namuna(son) {
//     // 1. Sonni stringga o'girib, har bir raqamini massivga ajratamiz
//     // 2. Massivni kamayish tartibida saralaymiz (sort)
//     // 3. Qaytadan stringga birlashtirib, Number ga o'tkazamiz
//     return Number(son.toString().split('').sort((a, b) => b - a).join(''));
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(123));   // 321
// console.log(namuna("001")); // 100
// console.log(namuna(999));   // 999
// console.log(namuna(784));   // 874
// =========================================================================================================================
// 108-masala
// function namuna(min, max) {
//     // Math.random() yordamida min va max orasidan tasodifiy butun son hosil qilamiz
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(5, 9)); // 5 dan 9 gacha bo'lgan ixtiyoriy son
// console.log(namuna(5, 9)); 
// console.log(namuna(5, 9));
// =============================================================================================================================
// 109-masala
// function namuna(son) {
//     let sonStr = son.toString();
//     let uzunlik = sonStr.length;
//     let yigindi = 0;
    
//     for (let i = 0; i < uzunlik; i++) {
//         // Har bir raqamni uzunlik darajasiga ko'tarib yig'indiga qo'shamiz
//         yigindi += Math.pow(Number(sonStr[i]), uzunlik);
//     }
    
//     return yigindi === son;
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna(153));  // true
// console.log(namuna(370));  // true
// console.log(namuna(1652)); // false
// ===============================================================================================================================
// 110-masala
// function namuna(str) {
//     let sanoq = 0;
//     for (let i = 0; i < str.length; i++) {
//         // Har bir belgi o'zining katta shakliga teng bo'lsa va u harf bo'lsa
//         if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
//             sanoq++;
//         }
//     }
//     return sanoq;
// }

// // Yoki juda qisqa usulda (Regular Expression orqali):
// function namunaQisqa(str) {
//     let match = str.match(/[A-Z]/g);
//     return match ? match.length : 0;
// }

// // Sinchiklab ko'rish uchun namunalar:
// console.log(namuna("fvLzpxmgXSDrobbgMVrc")); // 6
// console.log(namuna("JMZWCneOTFLWYwBWxyFw")); // 14
// console.log(namuna("mqeytbbjwqemcdrdsyvq")); // 0
