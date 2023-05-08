/*----- constants -----*/
const COLOR = {
  snake: '#32CD32',
  board: 'black',
  apple: 'red'
}
const snakeSpeed = 2 // squares per second?
const appleScore = {
  score: 10
}

/*----- state variables -----*/

//let board // an array of arrays of 0 or 1
// let gameOver // game over = -1 if game over, 1 if game is on going
let highScore // updated if score > high score
//let score // updated after every apple eaten
// snake value of 1 in board array of arrays indicates snake body layout
let appleLocation // randomized b#
let direction = 1
let currentSnake = [13, 12, 11]
let score = 0
let tail
/*----- cached elements -----*/
let showScore = document.querySelector('span')
let playAgain = document.querySelector('#restart')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let up = document.querySelector('#up')
let down = document.querySelector('#down')
// let snake = [...document.querySelectorAll('.snake')]
let apple = document.querySelector('.apple')
let boardBoxes = [...document.querySelectorAll('section > div')]
currentSnake.forEach((value) => {
  boardBoxes[value].classList.add('snake')
})
// Do I need a snake head and snake body of different values, different arrays so I can write functions that show where the snake goes and where to remove value
//or in response to keypresses, the computer will know to start changing c or r values
// start game button
// play again button
// head of the snake: to allow for listening to arrow buttons

/*----- event listeners -----*/
// playAgain.addEventListener('click', init)
left.addEventListener('click', handleLeft)
right.addEventListener('click', handleRight)
up.addEventListener('click', handleUp)
down.addEventListener('click', handleDown)
/*
click event listener for button to start game
click event listener for button to play again
keyboard event listeners to direct snake: only L, R, up, down buttons, return out of function if button is pressed that is the opposite of the snake's current direction for example if the snake is moving up, the user pressing down will exit out of the function below*/

/*----- functions -----*/
// for the snake direction, maybe it is set bsed on the alignment of the first two values
// timed function (setInterval(movesnakefxn), 500ms) to move the snake every interval, i need a compass or direction setter the snaker is facing and that compass will direct the snake, clearInterval when game over
// moving the snake every half a second, value in front is changed from 0 to 1 and in back from 0 to 1
const moveSnake = () => {}

function handleRight(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  let newHead = currentSnake[0] + 1
  currentSnake.unshift(newHead)
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}
function handleUp(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  let newHead = currentSnake[0] - 10
  currentSnake.unshift(newHead)
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}
function handleDown(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  let newHead = currentSnake[0] + 10
  currentSnake.unshift(newHead)
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}

function handleLeft(evt) {
  /* if (evt.keyCode === 37) {
    return
    //direction = -1
    //setInterval()
    // left
  } else if (evt.keyCode === 38) {
    return
    // direction = -10
    // up
  } else if (evt.keyCode === 39) { */
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  let newHead = currentSnake[0] - 1
  currentSnake.unshift(newHead)
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  }) /*
    // direction = 1
    // right
  } else if (evt.keyCode === 40) {
    return
    // direction = 10
    //down
  } else return */
  eatApple()
}

function eatApple() {
  currentSnake.forEach((value) => {
    if (boardBoxes[value].classList.contains('apple')) {
      boardBoxes[value].classList.remove('apple')
      score = score + 10
      showScore.innerText = score
      let newApplePositionIndex = Math.floor(Math.random() * 100)
      boardBoxes[newApplePositionIndex].classList.add('apple')
      currentSnake.push(tail)
      boardBoxes[tail].classList.add('snake')
    } else return
  })
}

function gameOver() {
  currentSnake
}

const init = () => {
  /* board = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ] */
  // let snake = [1, 1, 1]
  gameOver = 1
  score = 0
  const moveSnake = () => {
    // snake = setInterval((c+ or- 1 or r + or - 1), 500)
  }
  render()
}

const render = () => {
  renderBoard()
  renderScore()
  checkEndOfGame()
}

const renderBoard = () => {
  board.forEach((box, boxIdx) => {
    boxId = `b${boxIdx}`
    //if (box ===)
  })
}
const renderScore = () => {}
const checkEndOfGame = () => {} // value of 1 in idx number 0-9, 90-99, numbers ending in 9 or 0 then gameOver = -1

/*initialize function: initialize board array of arrays, game over value = 1, score, randomized apple position, snake starting position
event function in reponse to the user, calls render function
render board function
render score including high score if applicable
check game over function, leads to game over screen and pay again button
*/

// init()

// footer.style.visibility = gameOver ? 'visible' : 'hidden'

//credits: CSS flex and grid guides, connect four HW
