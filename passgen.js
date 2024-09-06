let passwordbox=document.getElementById('btn')

const length =12;

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers ="1234567890";
const specialChar="!@#$%^&*()_+";

let allChairs =upperCase+lowerCase+numbers+specialChar;


function createPass(){
  let password =''
  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)]
  password += numbers[Math.floor(Math.random()* numbers.length)]
  password += specialChar[Math.floor(Math.random()* specialChar.length)]


    while (length > password.length){
    password += allChairs[Math.floor(Math.random() * allChairs.length)]
    }
    passwordbox.value=password;
    }

    function copyPass(){
        passwordbox.select();
        document.exeCommand("copy")
    }

