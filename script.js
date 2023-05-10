let direction = 1
let currentSnake = [23, 22, 21]
let applePosition = 64
let score = 0
let highscore = 0
let tail
let newHead
let appleIndex
let newApplePositionIndex = 0

let showScore = document.querySelector('#total')
let showHighScore = document.querySelector('#history')
let playAgain = document.querySelector('#restart')
let footer = document.querySelector('footer')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let up = document.querySelector('#up')
let down = document.querySelector('#down')
let apple = document.querySelector('.apple')
let boardBoxes = [...document.querySelectorAll('section > div')]

const handleKeyboard = (evt) => {
  if (evt.keyCode === 37) {
    if (direction === 1 || direction === -1) {
      return
    }
    return (direction = -1)
  } else if (evt.keyCode === 38) {
    if (direction === 20 || direction === -20) {
      return
    }
    return (direction = -20)
  } else if (evt.keyCode === 39) {
    if (direction === 1 || direction === -1) {
      return
    }
    return (direction = 1)
  } else if (evt.keyCode === 40) {
    if (direction === 20 || direction === -20) {
      return
    }
    return (direction = 20)
  }
}

const restart = () => {
  currentSnake.forEach((value) => {
    boardBoxes[value].classList.remove('snake')
  })
  if (boardBoxes[newApplePositionIndex].classList.contains('apple')) {
    boardBoxes[newApplePositionIndex].classList.remove('apple')
  }
  currentSnake = [23, 22, 21]
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

  interval = setInterval(moveSnake, 333)
}

const handleLeft = () => {
  if (direction === 1 || direction === -1) {
    return
  }
  return (direction = -1)
}
const handleRight = () => {
  if (direction === 1 || direction === -1) {
    return
  }
  return (direction = 1)
}
const handleUp = () => {
  if (direction === 20 || direction === -20) {
    return
  }
  return (direction = -20)
}
const handleDown = () => {
  if (direction === 20 || direction === -20) {
    return
  }
  return (direction = 20)
}

const randomApple = () => {
  do {
    appleIndex = Math.floor(Math.random() * 200)
  } while (
    boardBoxes[appleIndex].classList.contains('lose') ||
    boardBoxes[appleIndex].classList.contains('lose')
  )
  return appleIndex
}

const eatApple = () => {
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
  if (score > highscore) {
    return (highscore = score)
  }
  showHighScore.innerText = highscore
}

const checkGameOver = () => {
  if (
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
    currentSnake.includes(10) ||
    currentSnake.includes(11) ||
    currentSnake.includes(12) ||
    currentSnake.includes(13) ||
    currentSnake.includes(14) ||
    currentSnake.includes(15) ||
    currentSnake.includes(16) ||
    currentSnake.includes(17) ||
    currentSnake.includes(18) ||
    currentSnake.includes(19) ||
    currentSnake.includes(20) ||
    currentSnake.includes(39) ||
    currentSnake.includes(40) ||
    currentSnake.includes(59) ||
    currentSnake.includes(60) ||
    currentSnake.includes(79) ||
    currentSnake.includes(80) ||
    currentSnake.includes(99) ||
    currentSnake.includes(100) ||
    currentSnake.includes(119) ||
    currentSnake.includes(120) ||
    currentSnake.includes(139) ||
    currentSnake.includes(140) ||
    currentSnake.includes(159) ||
    currentSnake.includes(160) ||
    currentSnake.includes(179) ||
    currentSnake.includes(180) ||
    currentSnake.includes(181) ||
    currentSnake.includes(182) ||
    currentSnake.includes(183) ||
    currentSnake.includes(184) ||
    currentSnake.includes(185) ||
    currentSnake.includes(186) ||
    currentSnake.includes(187) ||
    currentSnake.includes(188) ||
    currentSnake.includes(189) ||
    currentSnake.includes(190) ||
    currentSnake.includes(191) ||
    currentSnake.includes(192) ||
    currentSnake.includes(193) ||
    currentSnake.includes(194) ||
    currentSnake.includes(195) ||
    currentSnake.includes(196) ||
    currentSnake.includes(197) ||
    currentSnake.includes(198) ||
    currentSnake.includes(199)
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

const moveSnake = () => {
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

showScore.innerText = score
currentSnake.forEach((value) => {
  boardBoxes[value].classList.add('snake')
})
boardBoxes[applePosition].classList.add('apple')
footer.style.visibility = 'hidden'
let interval = setInterval(moveSnake, 333)

playAgain.addEventListener('click', restart)
left.addEventListener('click', handleLeft)
right.addEventListener('click', handleRight)
up.addEventListener('click', handleUp)
down.addEventListener('click', handleDown)
document.addEventListener('keydown', handleKeyboard)

//credits: CSS flex and grid guides, connect four HW
