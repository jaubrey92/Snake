/*----- constants -----*/

/*----- state variables -----*/

let gameOver = false
let direction = 1
let currentSnake = [13, 12, 11]
let applePosition = 64
let score = 0
let tail
let newHead
let appleIndex
let newApplePositionIndex = 0
/*----- cached elements -----*/
let showScore = document.querySelector('span')
let playAgain = document.querySelector('#restart')
let footer = document.querySelector('footer')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let up = document.querySelector('#up')
let down = document.querySelector('#down')
let apple = document.querySelector('.apple')
let boardBoxes = [...document.querySelectorAll('section > div')]

showScore.innerText = score
currentSnake.forEach((value) => {
  boardBoxes[value].classList.add('snake')
})
boardBoxes[applePosition].classList.add('apple')
footer.style.visibility = 'hidden'

/*----- event listeners -----*/
playAgain.addEventListener('click', restart)
left.addEventListener('click', handleLeft)
right.addEventListener('click', handleRight)
up.addEventListener('click', handleUp)
down.addEventListener('click', handleDown)

/*----- functions -----*/

function restart() {
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.remove('snake')
  })
  if (boardBoxes[newApplePositionIndex].classList.contains('apple')) {
    boardBoxes[newApplePositionIndex].classList.remove('apple')
  }
  currentSnake = [13, 12, 11]
  applePosition = 64
  direction = 1

  score = 0
  showScore.innerText = score
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  boardBoxes[applePosition].classList.add('apple')
  footer.style.visibility = 'hidden'

  left.addEventListener('click', handleLeft)
  right.addEventListener('click', handleRight)
  up.addEventListener('click', handleUp)
  down.addEventListener('click', handleDown)

  interval = setInterval(moveSnake, 500)
}

let interval = setInterval(moveSnake, 500)
function moveSnake() {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  newHead = currentSnake[0] + direction
  currentSnake.unshift(newHead)
  checkGameOver()
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}
function handleLeft() {
  if (direction === 1 || direction === -1) {
    return
  }
  return (direction = -1)
}
function handleRight() {
  if (direction === 1 || direction === -1) {
    return
  }
  return (direction = 1)
}
function handleUp() {
  if (direction === 10 || direction === -10) {
    return
  }
  return (direction = -10)
}
function handleDown() {
  if (direction === 10 || direction === -10) {
    return
  }
  return (direction = 10)
}

/*
function handleRight(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  newHead = currentSnake[0] + 1
  currentSnake.unshift(newHead)
  checkGameOver()
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}
function handleUp(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  newHead = currentSnake[0] - 10
  currentSnake.unshift(newHead)
  checkGameOver()
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}
function handleDown(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  newHead = currentSnake[0] + 10
  currentSnake.unshift(newHead)
  checkGameOver()
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}

function handleLeft(evt) {
  tail = currentSnake.pop()
  boardBoxes[tail].classList.remove('snake')
  newHead = currentSnake[0] - 1
  currentSnake.unshift(newHead)
  checkGameOver()
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.add('snake')
  })
  eatApple()
}
*/
function eatApple() {
  currentSnake.forEach((value) => {
    if (boardBoxes[value].classList.contains('apple')) {
      boardBoxes[value].classList.remove('apple')
      score = score + 10
      showScore.innerText = score
      newApplePositionIndex = randomApple()
      boardBoxes[newApplePositionIndex].classList.add('apple')
      currentSnake.push(tail)
      boardBoxes[tail].classList.add('snake')
    } else return
  })
}

function randomApple() {
  do {
    appleIndex = Math.floor(Math.random() * 100)
  } while (
    boardBoxes[appleIndex].classList.contains('lose') ||
    boardBoxes[appleIndex].classList.contains('lose')
  )
  return appleIndex
}

function checkGameOver() {
  if (
    currentSnake.includes(90) ||
    currentSnake.includes(91) ||
    currentSnake.includes(92) ||
    currentSnake.includes(93) ||
    currentSnake.includes(94) ||
    currentSnake.includes(95) ||
    currentSnake.includes(96) ||
    currentSnake.includes(97) ||
    currentSnake.includes(98) ||
    currentSnake.includes(99) ||
    currentSnake.includes(0) ||
    currentSnake.includes(1) ||
    currentSnake.includes(2) ||
    currentSnake.includes(3) ||
    currentSnake.includes(4) ||
    currentSnake.includes(5) ||
    currentSnake.includes(6) ||
    currentSnake.includes(7) ||
    currentSnake.includes(8) ||
    currentSnake.includes(9) ||
    currentSnake.includes(19) ||
    currentSnake.includes(29) ||
    currentSnake.includes(39) ||
    currentSnake.includes(49) ||
    currentSnake.includes(59) ||
    currentSnake.includes(69) ||
    currentSnake.includes(79) ||
    currentSnake.includes(89) ||
    currentSnake.includes(10) ||
    currentSnake.includes(20) ||
    currentSnake.includes(30) ||
    currentSnake.includes(40) ||
    currentSnake.includes(50) ||
    currentSnake.includes(60) ||
    currentSnake.includes(70) ||
    currentSnake.includes(80)
  ) {
    footer.style.visibility = 'visible'
    return clearInterval(interval)
  } else if (boardBoxes[newHead].classList.contains('snake')) {
    footer.style.visibility = 'visible'
    return clearInterval(interval)
  } else {
    return
  }
}

//credits: CSS flex and grid guides, connect four HW
