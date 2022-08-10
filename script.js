//Function for getting computer choice
function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors']
  const choice = Math.floor(Math.random() * options.length)
  return options[choice]
}

// Calculating score

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1

  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1

  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else {
    score = -1
  }

  return score
}

//Showing result by passing it to DOM

function showResult(score, playerChoice, computerChoice) {

  let result = document.getElementById('result')
  switch (score) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  let playerScore = document.getElementById('player-score')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`

  let hands = document.getElementById('hands')
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`



}


function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  let score = getResult(playerChoice, computerChoice)
  showResult(score, playerChoice, computerChoice)
}


// onclick listener on each button
function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')

  rpsButtons.forEach(rpsbutton => {
    rpsbutton.onclick = () => onClickRPS(rpsbutton.value)
  })

  const reset = document.getElementById('endGameButton')

  reset.onclick = () => resetGame()


}

function resetGame() {
  let result = document.getElementById('result')
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')

  result.innerText = ''
  playerScore.innerText = ''
  hands.innerText = ''

}



playGame()

