/* Variables */
const gameBoard = document.querySelector('.game-board')
const BLOCK_WIDTH = 100;
const BLOCK_HEIGHT = 20;
const BOARD_WIDTH = 560;

// Player starting position
const playerStart = [230, 10];
let playerCurrentPosition = playerStart;

// Ball starting position
const ballStart = [270, 32];
let ballCurrentPosition = ballStart;

// create block
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + BLOCK_WIDTH, yAxis];
    this.topLeft = [xAxis, yAxis + BLOCK_HEIGHT];
    this.topRight = [xAxis + BLOCK_WIDTH, yAxis + BLOCK_HEIGHT];
  }
}

// All my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
]

// Draw my block
function drawBlocks() {
  for (let index = 0; index < blocks.length; index++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = `${blocks[index].bottomLeft[0]}px`;
    block.style.bottom = `${blocks[index].bottomLeft[1]}px`;
    gameBoard.appendChild(block);
  }
}

drawBlocks();

// Add player
const player = document.createElement('div');
player.classList.add('player');
drawPlayer();
gameBoard.appendChild(player);

// Draw player
function drawPlayer() {
  player.style.left = `${playerCurrentPosition[0]}px`;
  player.style.bottom = `${playerCurrentPosition[1]}px`;
}

// Draw ball
function drawBall() {
  ball.style.left = `${ballCurrentPosition[0]}px`;
  ball.style.bottom = `${ballCurrentPosition[1]}px`;
}

// Move player
function movePlayer(event) {
  switch (event.key) {
    case 'ArrowLeft':
      if (playerCurrentPosition[0] > 0) {
        playerCurrentPosition[0] -= 10;
        drawPlayer();
      }
      break;
    case 'ArrowRight':
      if (playerCurrentPosition[0] < BOARD_WIDTH - BLOCK_WIDTH ) {
        playerCurrentPosition[0] += 10;
        drawPlayer();
      }
      break;
  }
}

document.addEventListener('keydown', movePlayer)

// Add ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
gameBoard.appendChild(ball);


// Move ball
function moveBall() {
  ballCurrentPosition[0] += 2;
  ballCurrentPosition[1] += 1;
  drawBall();
}
