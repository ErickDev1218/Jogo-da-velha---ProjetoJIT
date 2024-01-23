let position = ['','','','','','','','','']
let playerTime = 0;
let symbol = ['o','x']
let winCond = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let countp1 = 2;
let countp2 = 2;

function Winner(){
    for(let i of winCond){
      let test1 = i[0];
      let test2 = i[1];
      let test3 = i[2];
      
      if(position[test1] === position[test2] && position[test1] === position[test3] && position[test1] !== ''){
        return true;
      }
    }

    return false;
}

function move(pos,p1,p2,para1,para2){
    position[pos] = symbol[playerTime]

    let champion = Winner()

    setTimeout(() => {
        if(champion){
            
            if(playerTime === 0){
                window.alert("Há um vencedor! Parabéns player " + p1.value);
                countp1+=1;     
                para1.innerText = `Player 1: ${p1.value} ⭕. Fichas ${countp1}`
                countp2-=1;
                para2.innerText = `Player 2: ${p2.value} ❌. Fichas ${countp2}`
            }else if(playerTime === 1){
                window.alert("Há um vencedor! Parabéns player " + p2.value);
                countp2+=1;
                para2.innerText = `Player 2: ${p2.value} ❌. Fichas ${countp2}`
                countp1-=1;
                para1.innerText = `Player 1: ${p1.value} ⭕. Fichas ${countp1}`   
            }
            
            let squares = document.querySelectorAll(".square")
            squares.forEach((e)=>{
                e.innerHTML = `<div class = ""></div>` 
            })
            position = ['','','','','','','','','']
            playerTime = 0;
            para1.style.backgroundColor = "#24AFC1";
            para1.style.padding = "6px";
            para1.style.borderRadius = "8px";

            para2.style.backgroundColor = "";
            para2.style.padding = "";
            para2.style.borderRadius = "";
            
        }else if(!champion){
            playerTime = playerTime === 0 ? 1 : 0
        }
        
        let aux = 0;
        for(let i of position){
            if(i !== ''){
                aux++;
            }
        }
        if(aux === position.length){
            //deu velha
            window.alert("Velha! Empate, reinicie a partida!")
        }
        let squares = document.querySelectorAll(".square")
        if(countp1 === -1){
            //P1 não pode mais jogar.
            for(let i of squares){
                i.style.display = "none"
            }
            window.alert(`O player ${p1.value} não possui mais fichas!`)
            countp1 = 0;
            countp2 +=1;
            para1.innerText = `Player 1: ${p1.value} ⭕. Fichas ${countp1}`
            para2.innerText = `Player 2: ${p2.value} ❌. Fichas ${countp2}`
            document.getElementById("rei").style.display = "none"

            para2.style.backgroundColor = "#24AFC1";
            para2.style.padding = "6px";
            para2.style.borderRadius = "8px";

            para1.style.backgroundColor = "";
            para1.style.padding = "";
            para1.style.borderRadius = "";


        }
        if(countp2 === -1){
            for(let i of squares){
                i.style.display = "none"
            }
            window.alert(`O player ${p2.value} não possui mais fichas!`)
            countp2 = 0;
            countp1 +=1;
            para1.innerText = `Player 1: ${p1.value} ⭕. Fichas ${countp1}`
            para2.innerText = `Player 2: ${p2.value} ❌. Fichas ${countp2}`
            document.getElementById("rei").style.display = "none"

            para1.style.backgroundColor = "#24AFC1";
            para1.style.padding = "6px";
            para1.style.borderRadius = "8px";

            para2.style.backgroundColor = "";
            para2.style.padding = "";
            para2.style.borderRadius = "";
        }

    }, 50);
}
