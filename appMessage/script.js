let appMessage=document.querySelector(".app-message");
let inpText=document.querySelector("#text");
let submit=document.querySelector(".submit");
let showMessage=document.querySelector(".show-message");
// submit.addEventListener("click",getMess);
submit.onclick=function getMess(e)
{
  let tabel;
  let inpVal=inpText.value;
   e.preventDefault();
   if(inpVal!="")
   {
    localStorage.setItem("Keytabel",inpVal);
    tabel=  
    `<p class="show-message-content">
       ${localStorage.getItem("Keytabel")}
    </p>`;
    showMessage.innerHTML=tabel;
    inpText.value="";   
  }
else{alert("enter value");}
}
