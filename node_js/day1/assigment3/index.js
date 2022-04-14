//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scop_obj={
    line1:"Scope in JavaScript refers to the current context of code",
    line2:"which determines the accessibility of variables to JavaScript",
    line3:"The two types of scope are local and global: Global variables are those declared outside of a block",
    line4:" Local variables are those declared inside of a block"
}
localStorage.setItem("scop",JSON.stringify(scop_obj));


var hoisting_obj={
    line1:"Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. ",
    line2:" Inevitably, this means that no matter where functions and variables are declared,",
    line3:"they are moved to the top of their scope regardless of whether their scope is global or local."
}
localStorage.setItem("hoisting",JSON.stringify(hoisting_obj));


var constructor_obj={
    line1:"A constructor is a special function that creates and initializes an object instance of a class",
    line2:"In JavaScript, a constructor gets called when an object is created using the new keyword",
    line3:"The purpose of a constructor is to create a new object and set values for any existing object properties"
}
localStorage.setItem("constructor",JSON.stringify(constructor_obj));


var prototype_obj={
    line1:"Objects in JavaScript have an internal property known as prototype",
    line2:" It is simply a reference to another object and contains common attributes/properties across all instances of the object",
    line3:"An object's prototype attribute specifies the object from which it inherits properties."
}
localStorage.setItem("prototype",JSON.stringify(prototype_obj));



var box1=document.createElement("div")
box1.setAttribute("id","box1")
document.querySelector("body").append(box1)


document.querySelector("#scop").addEventListener("click",scopfun)
function scopfun(){
    document.querySelector("#box1").innerHTML=""
    var sc=JSON.parse(localStorage.getItem("scop"))
    var ul=document.createElement("ul")
    document.querySelector("#box1").append(ul)
    for(let key in sc){
        var li=document.createElement("li")
        li.innerText=sc[key]
        ul.append(li)
    }
}

document.querySelector("#hoisting").addEventListener("click",hostingfun)
function hostingfun(){
    document.querySelector("#box1").innerHTML=""
    var sc=JSON.parse(localStorage.getItem("hoisting"))
    var ul=document.createElement("ul")
    document.querySelector("#box1").append(ul)
    for(let key in sc){
        var li=document.createElement("li")
        li.innerText=sc[key]
        ul.append(li)
    }
}

document.querySelector("#constructor").addEventListener("click",constructfun)
function constructfun(){
    document.querySelector("#box1").innerHTML=""
    var sc=JSON.parse(localStorage.getItem("constructor"))
    var ul=document.createElement("ul")
    document.querySelector("#box1").append(ul)
    for(let key in sc){
        var li=document.createElement("li")
        li.innerText=sc[key]
        ul.append(li)
    }
}

document.querySelector("#prototype").addEventListener("click",prototypefun)
function prototypefun(){
    document.querySelector("#box1").innerHTML=""
    var sc=JSON.parse(localStorage.getItem("prototype"))
    var ul=document.createElement("ul")
    document.querySelector("#box1").append(ul)
    for(let key in sc){
        var li=document.createElement("li")
        li.innerText=sc[key]
        ul.append(li)
    }
}
