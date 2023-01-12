let sheetArea=document.getElementById("sheet-area");
let inputText=document.getElementById("input-text");
let submit=document.getElementById("submit");

// addEventListener('click',getMessage);
let xhttp;

//  function getDataFromApi()
// {
//    xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=()=>{
//        if( status==200 && readyState==4)
//        {
//          let resText=this.responseText;
//          console.log(resText);
//        }     
//     } 
//     xhttp.open("","api.json");
//     xhttp.send;
//    }
async function getDataFromApi()
{
   const resText=await fetch('api.json');
   console.log(resText);
}
getDataFromApi();