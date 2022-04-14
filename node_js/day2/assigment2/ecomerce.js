// function nikeproduct(n,p,t){

// obj={}
//     obj.name=n;
//     obj.price=p;
//     obj.type=t;
// return obj
// }
// let p1 =nikeproduct("shoes",2552,"foot")
// console.log(p1)





// we problem

let arr=JSON.parse(localStorage.getItem("product"))||[];
function product(n,c,i,p,g,s){
this.name=n;
this.catagory=c;
this.image=i;  
this.price=p;
this.gender=g;
this.sold=s;
}


function storeproduct(e){
    e.preventDefault();


    let form=document.getElementById("products")
    let name=form.name.value
    let catagory=form.catagory.value
    let image=form.image.value
    let price=form.price.value
    
    let gender=form.gender.value
    let sold=form.sold.value


    // console.log(name,price,brand)

    let p1=new product(name,catagory,image,price,gender,sold);
    arr.push(p1)
    console.log(arr)
    localStorage.setItem("product",JSON.stringify(arr))
    // window.location.href="ecomerce2.html"
    window.location.reload()
}