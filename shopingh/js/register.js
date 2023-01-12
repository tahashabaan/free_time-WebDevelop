// use terany operator
submit.addEventListener("click",addUser);
 function addUser(e)
{
  e.preventDefault();
  let userNameVal=userName.value.trim();
  let emailVal=email.value.trim();
  let passVal=password.value.trim();
  addUser={
    userName: userNameVal,
    email   : emailVal,
    password: passVal
  }
     if(userNameVal && emailVal && passVal)
      {
       dataUser.push(addUser);
       localStorage.setItem('user',JSON.stringify(dataUser));
       localStorage.setItem('userName',userNameVal);
        clearIn();
        setTimeout(()=>{
          window.location="login.html";
          },500);
        }
    
  else 
  {
    alert("enter userName and email and password");
    // submit.style.background="red";
        }

}
function clearIn()
{
  text.value="";
  email.value="";
  password.value="";
}