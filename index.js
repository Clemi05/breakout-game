const gameBoard = document.querySelector('.game-board')
const BLOCK_WIDTH = 100;
const BLOCK_HEIGHT = 20;

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

// Add my block
function addBlocks() {
  for (let index = 0; index < blocks.length; index++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = `${blocks[index].bottomLeft[0]}px`;
    block.style.bottom = `${blocks[index].bottomLeft[1]}px`;
    gameBoard.appendChild(block);
  }
}

addBlocks();

// Add player
const player = document.createElement('div');
player.classList.add('player')
