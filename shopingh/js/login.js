// export
// export
 let flag=false;
 let flagUser='';
submit.addEventListener('click',loginUser);
function loginUser(e)
{
  e.preventDefault();
  let emailVal=email.value.trim().toLowerCase();
  let passVal=password.value.trim().toLowerCase();
   if(localStorage.user!=null)
   {
     dataUser.forEach((item )=>{
      if(item.email==emailVal && item.password==passVal)
      {
        flag=true;
        flagUser=item.userName;
        console.log(flag,flagUser);
        }
    });
 }
 // when falg===true
 if(flag) setTimeout(()=> { 
     window.open("../index.html","_self");
  },500);
// when falg===false
    else alert("password or email not correct");
}