let btnAdd=document.querySelector(".btn-add");
let  dataPro=[ 
  {
   img:"work/work1.webp",
   figcaption:"we 1",
   size:"small"
  },
  {
   img:"work/work2.webp",
   figcaption:"work 1",
   size:"small"
  },
  {
   img:"work/work3.webp",
   figcaption:"work 1",
   size:"small"
  },
  {
   img:"work/work4.webp",
   figcaption:"work 1",
   size:"small"
  }]; 
  localStorage.setItem("product",JSON.stringify(dataPro));
// console.log(dataPro.length);
// btnAdd.addEventListener("click",addProToCart);
// function addPro()
// {  
// }
// addPro();
function UIPro()
{
  let contentDataPro=document.querySelector(".data-pro");
  let tabel='';
  dataPro.forEach(element => {
    tabel= `<div class="content-data-pro">
     <figure>
      <img src="${element.img}" alt="logo">
      <figcaption class="fig-cap">${element.figcaption}</figcaption>
     </figure>
     <h2 class="title-img"></h2>
     <div class="content-data-fav">
      <i class="fa fa-heart icon"></i>
      <button class="btn" id="btn"
       onclick="addProToCart()">add to cart</button>
     </div>
     </div>`
     contentDataPro.innerHTML+=tabel;
  });
}
UIPro();