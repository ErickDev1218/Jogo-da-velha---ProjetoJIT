let position = ['','','','','','','','','']
let playerTime = 0;
let symbol = ['o','x']


function move(pos){
    position[pos] = symbol[playerTime]

    if(playerTime === 1){
        playerTime = 0
    }else{
        playerTime = 1
    }
}