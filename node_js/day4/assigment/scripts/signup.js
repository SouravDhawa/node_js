

arr=JSON.parse(localStorage.getItem("userdeatails"))||[]
function user(e,p,n,u){
    this.email=e;
    this.password=p;
    this.name=n;
    this.number=u;
}

function userdetails(e){
    e.preventDefault();

    let form=document.querySelector("#user")
    let email=form.email.value
    let password=form.password.value;
    let name=form.name.value;
    let number=form.number.value;


    let obj= new user(email,password,name,number)
    
    // console.log(arr)
    let count=0;
    for(let key in obj){
        if(obj[key]==""){
            count++
        }
    }
    if(count>0){
        alert("pleas fill all")
    }else{
        arr.push(obj)
    localStorage.setItem("userdeatails",JSON.stringify(arr))
    alert("thank you for signing up")
    window.location.href="login.html"
    }
}