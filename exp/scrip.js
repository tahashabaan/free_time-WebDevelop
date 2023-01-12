// const search =(arr,key)=>
//          arr[0]!=key?false:arr.length && arr[0]==key||search(arr.slice(1),key);



//   // if(arr.length==0||arr[0]!==key)  {return false;}
//   // else if(arr[0]===key) {return true;}
//   // else {search(arr.slice(1),key);}
//  const key=7; let arr=[4,4,5,2];
//  const itemSearch=search(arr,key);
//  console.log(itemSearch);
//  const powerN=(base,power)=>{
//      if(power==0){
//        return 1;
//      }
//      else if(power%2){ // odd power?
//           return base * powerN(base,power-1)
//      } 
//      else {  return   powerN(base * base,power/2) }
//  } 
    //  const array=[2,3,3,45,67];
    //   [a,b,...c]=array;
    //   console.log(c)
    //   const obj={ a:20 , b:30 , c:50 , d:100 , n:120}; 
    //   const obj2=  { a:20 , b : 30};
    //    const {a,b}= obj2 ; 
    //    console.log(a);
  //  
  // const user={
  //   id:12,
  //   bool:false
  // };
  //   const {iduser , boolname}=user;
  //   console.log(iduser,boolname);

  //  const {id:iduser=10 , bool:boolname=true}=user;
  //     console.log(iduser,boolname);

  //     const people = [ {
  //         name: 'Mike Smith',
  //         family: {
  //           mother: 'Jane Smith',
  //           father: 'Harry Smith',
  //           sister: 'Samantha Smith'
  //         },
  //         age:35
  //       },
  //       {
  //         name: 'Tom Jones',
  //         family:{
  //           mother: 'Norah Jones',
  //           father: 'Richard Jones',
  //           brother: 'Howard Jones'
  //         },
  //         age:25
  //       }
  //     ];
  //     //i 
  //     for( const {name:n,family:{father:f}} of people){
  //       console.log(n +" "+f);
  //     }
//  ([a,b]=array)=>a+b;
//  console.log(a,b);
//  ([a, b] = [10, 20]) => a + b;  // result is 30
//  console.log(a,b);
// ({ a, b } = { a: 10, b: 20 }) => a + b;
// let c={ a, b } ;
// console.log(c);

fetch(documentUrl).then(response => response.json())
