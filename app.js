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