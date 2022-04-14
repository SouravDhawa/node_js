arr=JSON.parse(localStorage.getItem("product"))
console.log(arr.length)
// catagory: "nike"
// gender: "male"
// image: "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp"
// name: "shoe"
// price: "12123"
document.querySelector("#total").innerHTML=`you have ${arr.length} products`
arr.map(function(ele,index){
    box=document.createElement("div")

    img=document.createElement("img")
    img.src=ele.image
    var name=document.createElement("h2")
    name.innerText=ele.name
    var catagory=document.createElement("h4")
    catagory.innerText="the brand is "+ele.catagory
    var price=document.createElement("h5")
    price.innerText="$ "+ele.price
    var gender=document.createElement("p")
    gender.innerText="this is for "+ele.gender

    button=document.createElement("button")
    button.innerText="remove"
    button.setAttribute("id","remove")
    button.addEventListener("click",function(){
      removeitem(ele,index)

    });
    sold=document.createElement("button")
    sold.innerText="sold"
    // sold.setAttribute("id","sold")
    sold.addEventListener("click",function(){
        sourav(ele,index)
    })

    if(ele.sold==true){
        sold.style.backgroundColor="red"
    }else if(ele.sold==false){
        sold.style.backgroundColor="green"
    }


    box.append(img,name,catagory,price,gender,button,sold)
    document.querySelector("#container").append(box)
})


function removeitem(ele,index){
    // console.log(ele,index)
    arr.splice(index,1)
    console.log(arr)
    localStorage.setItem("product",JSON.stringify(arr))
    window.location.reload()
}
function sourav(ele){
    ele.sold = !ele.sold
    // console.log(ele)
    if(ele.sold==true){
        sold.style.backgroundColor="red"
    }else if(ele.sold==false){
        sold.style.backgroundColor="green"
    }
}


