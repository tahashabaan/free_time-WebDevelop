
let submit=document.getElementById("submit");
let userName=document.getElementById("text");
let email=document.getElementById("email");
let password=document.getElementById("password");
let form=document.getElementById("form");
let dataUser=(localStorage.user!=null)?JSON.parse(localStorage.user):[];
//  import {flag } from "./login.js";
function showUser()
{
  let navLogin=document.querySelector(".nav-login");
  let navLinks=document.querySelector(".nav-login-links");
  let navUser =document.querySelector(".nav-login-user");
  console.log(navLinks);
  if(localStorage.getItem("userName"))
  {
    navLinks.remove();
    navLinks.style.display="none";
    navUser.style.display="block";
  }
}
showUser();
// console.log(flag);
// background sumbit in file register&& login with 


