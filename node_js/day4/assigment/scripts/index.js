
// ----------------------------emage slide shere---------------------------------------------
image_div=document.querySelector("#slideshow")

let i=0;
let id

// function start() {
    let image_arr=JSON.parse(localStorage.getItem("movies"));
    let img=document.createElement("img")
    id=setInterval(function(){
        if(i===image_arr.length){
            i=0
        }
        image_div.innerHTML=null
        img.src=image_arr[i]
        image_div.append(img)
        
        i++;
    },2000)
// }

function stop(){
    clearInterval(id)
}



let moviesArr = [
    {   poster:"https://cdn.gulte.com/wp-content/uploads/2021/07/RRRR.jpg",
        name:"RRR",
        release_date : "15 March,2022",
        IMDb : 9.0,
    },
    {   poster:"https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        name:"Uncharted",
        release_date : "18 February 2022",
        IMDb : 6.7,
    },
    {   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4CogqKQvZA3BXk3-tDtBGjbngcwarEqcJRl-EyFDcdAu1eZUnMK62JxE9jAleBSrUxHMTOCn&s=10",
        name:"Radhe Shyam",
        release_date : "11 March 2022",
        IMDb : 6.6,
    },
    {   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgitWtiyDIbBbCH8TcP_JCQnBZ8FcuePCTFpQHCCDWhDtOwJ9K-PEk4aPB&s",
        name:"Spider-Man: Homecoming",
        release_date : "7 July 2017",
        IMDb : 7.1,
    },
    {   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZBcMIv2EKPCgLPvqf7EKsgBval1EEETp5xwh8Wgnv1qRMYRXRTGT8sz5w&s",
        name:"Captain Marvel",
        release_date : "15 March,2022",
        IMDb : 6.8,
    },
    {   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KOpOYJPXP10kzdoOdfD6HzIYIloYzoZaLVRmoW1PItxB8ZBhdgHJzeA&s",
        name:"Guardians of the Galaxy Vol. 3",
        release_date : "23 May 2023",
        IMDb : 8.0,
    },
    {   poster:"https://cdn.gulte.com/wp-content/uploads/2021/07/RRRR.jpg",
        name:"RRR",
        release_date : "15 March,2022",
        IMDb : 7.0,
    },
    {   poster:"https://cdn.gulte.com/wp-content/uploads/2021/07/RRRR.jpg",
        name:"RRR",
        release_date : "15 March,2022",
        IMDb : 3.0,
    },
    {   poster:"https://cdn.gulte.com/wp-content/uploads/2021/07/RRRR.jpg",
        name:"RRR",
        release_date : "15 March,2022",
        IMDb : 9.1,
    }
]
let image=[];
for(let key in moviesArr){
    image.push(moviesArr[key].poster)
}
// console.log(image)
localStorage.setItem("movies",JSON.stringify(image))








window.addEventListener("load",function(){
    displaydata(moviesArr)
})

// document.querySelector("#sortmovie").addEventListener("change",sortmovie)
// function sortmovie(){
//     selectmovie=document.querySelector("#sortmovie").value
//     // console.log(selectmovie)
//     if(selectmovie=="sort-hl"){
//         moviesArr.sort(function(a,b){
//             return b.IMDb - a.IMDb
//         });
//         console.log(moviesArr)
//         displaydata(moviesArr)
//     }

//     if(selectmovie=="sort-lh"){
//         moviesArr.sort(function(a,b){
//             return a.IMDb - b.IMDb
//         });
//         displaydata(moviesArr)
//     }
// }

function sorthl(){
    moviesArr.sort(function(a,b){
        return b.IMDb - a.IMDb
    });
    displaydata(moviesArr)
}
function sortlh(){
    moviesArr.sort(function(a,b){
        return a.IMDb - b.IMDb
    });
    displaydata(moviesArr)
}

function displaydata(moviesArr){
    document.querySelector("#movies").innerHTML=""
    moviesArr.map(function(el){
        var box=document.createElement("div")
    
    
        var img=document.createElement("img")
        img.src=el.poster
    
        var name=document.createElement("h2")
        name.innerText=el.name
    
        var date=document.createElement("h4")
        date.innerText=el.release_date
    
        var imdb=document.createElement("p")
        imdb.innerText=el.IMDb
    
        box.append(img,name,date,imdb)
        document.querySelector("#movies").append(box)
    })
    
}


