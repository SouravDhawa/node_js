// const student={
//     unit:3,
//     batch:"web 17",
//     instruktor:"sk",

// }

// const s1=Object.create(student)
// s1.name="sourav"
// console.log(s1)

// const s2=Object.create(student)
// const s3=Object.create(student)




function student(n,u){
    (this.name=n),(this.unit=u)
}

student.prototype.bio=function(){
    console.log(`hello from ${this.name}`)
};

let s1=new student("sourav",3);

console.log("s1",s1)


s1.bio();