register_user=JSON.parse(localStorage.getItem("userdeatails"))
// console.log(register_user)
// {email: 'souravdhawa610@gmail.com', password: '646464', name: 'Sourav Dhawa'
function user(e,p){
    this.email=e;
    this.password=p;
    
}

function userdetails(e){
    e.preventDefault();

    let form=document.querySelector("#user")
    let email=form.email.value
    let password=form.password.value;
   


    let obj= new user(email,password)
    
    // console.log(obj)
    for(let i=0;i<register_user.length;i++){
        console.log(register_user[i])
       

        if(register_user[i].email==email && register_user[i].password==password){
            alert("login sucessfull")
            window.location.href="index.html"
            break;
        }else{
            alert("login faild")
           window.location.reload()
           
        }
       

    }
}
// user {email: 'souravdhawa610@gmail.com', password: '234'}