# Pseudocode

---

### /_----- constants -----_/

- color{snake, board, and apple}
- speed of snake
- score increase per apple eaten: 10

### /_----- state variables -----_/

- board: an array of arrays of 0 or 1
- game over: game over = -1 if game over, 1 if game is on going
- high score: updated if score > high score
- score: updated after every apple eaten
- snake: value of 1 in board array of arrays indicates snake body layout
- apple position: randomized row and column index

### /_----- cached elements -----_/

- start game button
- play again button
- head of the snake: to allow for listening to arrow buttons

### /_----- event listeners -----_/

- click event listener for button to start game
- click event listener for button to play again
- keyboard event listeners to direct snake: only L, R, up, down buttons, return out of function if button is pressed that is the opposite of the snake's current direction for example if the snake is moving up, the user pressing down will exit out of the function below

### /_----- functions -----_/

- initialize function: initialize board array of arrays, game over value = 1, score, randomized apple position, snake starting position
- event function in reponse to the user, calls render function
- render board function
- render score including high score if applicable
- check game over function, leads to game over screen and pay again button
