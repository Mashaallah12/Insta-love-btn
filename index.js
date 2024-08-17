let con = document.querySelector("#container")
let love = document.querySelector("i")

// this code works same as insta heart icone
// con.addEventListener("dblclick",()=>{
//     love.style.transform = "translate(-50%,-50%) scale(1)"
//     love.style.opacity = 1
//     love.style.color = "#fff"

//     setTimeout(()=>{
//         love.style.opacity = 0

//     },1000)
//     setTimeout(()=>{
//         love.style.transform = "translate(-50%,-50%) scale(1)"
//     },2000)

// })

//this code is same w have use some transtion property 
con.addEventListener("dblclick",()=>{
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.color ="#fff";
    setTimeout(()=>{
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },2000);
});