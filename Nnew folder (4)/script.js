let data=   
 [
   {
     "id":1,
    "imgUrl":"img/fifa.jpg",
     "title":"fifa",
     "price":33
  },
  {
    "id":2,
    "imgUrl":"img/red.jpg",
     "title":"Red",
     "price":200
  },
  {
    "id":3,
    "imgUrl":"img/shadow.jpg",
     "title":"shadow",
     "price":100
  },
  {
    "id":4,
    "imgUrl":"img/spider.jpg",
     "title":"spider",
     "price":34
  },
  {
    "id":6,
    "imgUrl":"img/takes.jpg",
     "title":"takes",
     "price":445
  },
];
let dataPrice=data.map(ele=>ele.price);
console.log(dataPrice);
// to show product
function showPro(data){
  const tbody=document.querySelector('tbody');
  let tabel='';
  data.forEach(element => {
      tabel+=`<tr>
      <td>
          <div class="product-info">
              <img class="photo" src="${element.imgUrl}" alt="">
              <div>
                  <p class="product-name">${element.title}</p>
                  <small>price:${element.price} </small>
                  <br>
                  <a href="">Remove</a>
              </div>
          </div>
      </td>    
       <td><input type="number" value="1" min="1"   
          onchange="calcPrice(${element.id},+this.value)" 
      ></td>
      <td class='price'><small>${element.price}</small></td>
  </tr>`  });
  //onchange=calcPrice(${element.id}) 
  tbody.innerHTML=tabel;
}
showPro(data);
    // clac price
      function calcPrice(id,quty){
        console.log(quty);
        const showPrice=document.querySelectorAll('.price');
        let price=0;
        const indexEle=data.findIndex(ele => ele.id==id);
       if(indexEle!=-1)
       {
          price= (data[indexEle].price) * quty;
          // console.log(matchPrice,totalPrice);
          //data[indexEle].price=price;
          showPrice[indexEle].innerHTML= price;
          dataPrice[indexEle]=price;
        }
       
            calcTotalPrice(dataPrice);
      }
      // return total price
   function calcTotalPrice(data)
   {
    const showTotalPrice=document.querySelector('.pra2 p');
    //  const matchPrice=data.map(ele=>ele.price );
     const totalPrice= data.reduce((preVal,curVal)=>{
     preVal+=curVal;
     return preVal;
     });
     showTotalPrice.textContent=totalPrice;
}
calcTotalPrice(dataPrice);

