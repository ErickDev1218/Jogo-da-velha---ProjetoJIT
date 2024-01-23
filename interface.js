document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            move(e.target.id)
            updateSquare();
        })
    })
})


function updateSquare(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((e) => {
        let sy = position[e.id] // " "
        if(sy !== ''){
            e.innerHTML = `<div class = "${sy}"></div>` 
        }
    })
}

document.getElementById("rei").addEventListener("click",()=>{
    let squares = document.querySelectorAll(".square")
    squares.forEach((e)=>{
        e.innerHTML = `<div class = ""></div>` 
    })
    position = ['','','','','','','','','']
    playerTime = 0;
})

let countp1 = 10;
let countp2 = 10;

document.getElementById("botao").addEventListener("click",()=>{
    let p1 = document.getElementById("p1")
    let p2 = document.getElementById("p2")

    if(p1.value !== "" && p2.value !== ""){
        let para1 = document.getElementById("p1name")
        countp1--;
        countp2--;
        para1.innerText = `Player 1: ${p1.value} ⭕. Fichas ${countp1}`
        p1.style.display = "none"

        let para2 = document.getElementById("p2name")
        para2.innerText = `Player 2: ${p2.value} ❌. Fichas ${countp2}`
        p2.style.display = "none"

        para1.style.display = para2.style.display = "inline-block"

        let sqr = document.getElementsByClassName("square")
        for(let i = 0; i < sqr.length;i++){
            setTimeout(()=>{
                sqr[i].style.display= "inline-block";

                if(sqr[sqr.length-1].style.display === "inline-block"){
                    document.getElementById("rei").style.display = "inline-block"
                }
            },i*400)

            
        }

        document.getElementById("botao").style.display = "none"
    }else{
        window.alert("ERROR: Verifique os nomes dos jogadores.")
    }
})