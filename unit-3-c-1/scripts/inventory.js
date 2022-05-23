 let data=JSON.parse(localStorage.getItem("products"))||[];

 function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    data.forEach(function(el,index) {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let desc=document.createElement("p");
        desc.innerText=el.desc;

        let type=document.createElement("p");
        type.innerText=el.type;
       
        let price=document.createElement("p");
        price.innerText=el.price;
       
        let removebtn=document.createElement("button");

        removebtn.innerText="Remove product";
        removebtn.setAttribute("id","remove_product");

        removebtn.addEventListener("click",function(){
             remove(el,index);
        });

        let all= document.getElementById("all_products");

        all.append(div);
        div.append(img,type,desc,price,removebtn);
    });
 }
 append();
 function remove(el,index){
     data.splice(index,1);
     localStorage.setItem("products",JSON.stringify(data));
     window.location.reload();
 }

//  document.getElementById("all_products").addEventListener("click",myfunction);
//  function myfunction(){
//      window.location.href="index.html"
//  }
