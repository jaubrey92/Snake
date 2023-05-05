/*----- constants -----*/
const COLOR = {
  snake: '#32CD32',
  board: 'black',
  apple: 'red'
}
const snakeSpeed = 2 // squares per second?
const apple = {
  score: 10
}

/*----- state variables -----*/

let board // an array of arrays of 0 or 1
let gameOver // game over = -1 if game over, 1 if game is on going
let highScore // updated if score > high score
let score // updated after every apple eaten
let snake // value of 1 in board array of arrays indicates snake body layout
let appleLocation // randomized row and column index

/*----- cached elements -----*/

let playAgain = document.querySelector('button')
let snakeHead = document.getElementById('c2r2')
// Do I need a snake head and snake body of different values, different arrays so I can write functions that show where the snake goes and where to remove value
//or in response to keypresses, the computer will know to start changing c or r values
// start game button
// play again button
// head of the snake: to allow for listening to arrow buttons

/*----- event listeners -----*/
playAgain.addEventListener('click', init)
snakeHead.addEventListener('keydown', handleMove)
/*
click event listener for button to start game
click event listener for button to play again
keyboard event listeners to direct snake: only L, R, up, down buttons, return out of function if button is pressed that is the opposite of the snake's current direction for example if the snake is moving up, the user pressing down will exit out of the function below*/

/*----- functions -----*/
// for the snake direction, maybe it is set bsed on the alignment of the first two values
// timed function (setInterval(movesnakefxn), 500ms) to move the snake every interval, i need a compass or direction setter the snaker is facing and that compass will direct the snake, clearInterval when game over
// moving the snake every half a second, value in front is changed from 0 to 1 and in back from 0 to 1
const handleMove = () => {}

const init = () => {
  board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
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

const renderBoard = () => {}
const renderScore = () => {}
const checkEndOfGame = () => {}

/*initialize function: initialize board array of arrays, game over value = 1, score, randomized apple position, snake starting position
event function in reponse to the user, calls render function
render board function
render score including high score if applicable
check game over function, leads to game over screen and pay again button
*/

init()

//credits: CSS flex and grid guides,
