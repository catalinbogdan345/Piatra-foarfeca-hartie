const selectionOne= document.querySelector('.player1-stone')
const area = document.querySelector('.first-player-option')
const areaTwo = document.querySelector('.second-player-option')
const winner = document.querySelector('.winner-container')
const checkWinner= document.querySelector('.check')
const playerTwoDisplay = document.querySelector('.player2') 
const playerOne = document.querySelector('.player1')
const imDone =document.querySelector('.finish')
const imDoneTwo =document.querySelector('.finishTwo')
const theGame= document.querySelector('.game')
const theBody = document.querySelector('body')
playersOptions=[]

const showPlayer2 = ()=>{
    playerTwoDisplay.style.display = 'block'
    playerOne.style.display = 'none'
}
imDone.addEventListener('click', showPlayer2)

const showTheWinner = ()=>{
    playerTwoDisplay.style.display = 'none'
    winner.style.display = 'block'
}
imDoneTwo.addEventListener('click', showTheWinner)
const theFunctionforPlayerOne =(argument)=>{
    area.innerHTML = `<img class="selection" src="/pfc/images/${argument}.png" ></img>`
    playersOptions.push(argument)


}   
theFunctionforPlayerOne()

const theFunctionforPlayerTwo =(argument)=>{
    areaTwo.innerHTML = `<img class="selection" src="/pfc/images/${argument}.png" ></img>`
    playersOptions.push(argument)
    playersOptions.splice(0,1)
    winner.style.display='none'
    console.log(playersOptions)
    if(playersOptions[0]==='stone' & playersOptions[1]==='scissor') {
        winner.innerText = "Player 1 câștigă!"
    }
    if(playersOptions[0]==='scissor' & playersOptions[1]==='paper'){
        winner.innerText = 'Player 1 câștigă!'
    }
    if(playersOptions[0]==='paper' & playersOptions[1]==='stone'){
        winner.innerText = 'Player 1 câștigă!'
    }
    if(playersOptions[0]==='stone' & playersOptions[1]==='paper'){
        winner.innerText = 'Player 2 câștigă!'
    }
    if(playersOptions[0]==='scissor' & playersOptions[1]==='stone'){
        winner.innerText = 'Player 2 câștigă!'
    }
    if(playersOptions[0]==='paper' & playersOptions[1]==='scissor'){
        winner.innerText = 'Player 2 câștigă!'
    }
    if(playersOptions[0] ===playersOptions[1]){
        winner.innerText += 'Egalitate'
    }
}

theFunctionforPlayerTwo(playersOptions)


// const decideWinner = (array)=>{
//         if(array[2] === 'stone' ){  
//             console.log('yes')
//     }
// // }
// decideWinner(playersOptions)
// checkWinner.addEventListener('submit', decideWinner(playersOptions))
