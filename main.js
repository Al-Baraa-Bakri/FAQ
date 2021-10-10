let arrowIcont = document.querySelectorAll(".icon"); 
let myPs = document.querySelectorAll(".tow");
arrowIcont.forEach(function(ele) {
    ele.addEventListener("click" , function(e) {
        e.target.parentNode.querySelector("p:first-child").style.fontWeight = "500"
        let myP =  e.target.parentNode.querySelector(".tow");
        if(myP.classList.contains("show")) {
            e.target.classList.toggle("rotate")
            myP.classList.toggle("show")
        }
        else {
            e.target.parentNode.querySelector("p:first-child").style.fontWeight = "800";
            arrowIcont.forEach(function(ele) {
                if(ele.classList.contains("rotate")) {ele.classList.toggle("rotate")}
            })
            myPs.forEach(function(ele) {
                if(ele.classList.contains("show")) {ele.classList.toggle("show")
                ele.parentNode.querySelector("p:first-child").style.fontWeight = "500"
            }
            })
            e.target.classList.toggle("rotate")
            myP.classList.toggle("show"); 
        }
        

    })
})