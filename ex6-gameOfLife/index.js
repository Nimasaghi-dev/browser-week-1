'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-6-conways-game-of-life

THIS IS A PREP EXERCISE FOR THE Q&A SESSION, IT SHOULD NOT BE PART OF THE ASSIGNMENT

Adapted from: https://spicyyoghurt.com/tutorials/javascript/conways-game-of-life-canvas
Refactored from ES6 Class syntax to regular functions
------------------------------------------------------------------------------*/
const CELL_SIZE = 10;
const NUM_COLUMNS = 75;
const NUM_ROWS = 40;

function createCell(x, y) {
  const alive = Math.random() > 0.5;
  return {
    x,
    y,
    alive,
  };
}

function createGame(context, numRows, numColumns) {
  const grid = [];

  function createGrid() {
    for (let y = 0; y < numRows; y++) {
      const row = [];
      for (let x = 0; x < numColumns; x++) {
        const cell = createCell(x, y);
        row.push(cell);
      }
      grid.push(row);
    }
  }

  function forEachCell(callback) {
    grid.forEach((row) => {
      row.forEach((cell) => callback(cell));
    });
  }

  function drawCell(cell) {
    context.fillStyle = '#303030';
    context.fillRect(
      cell.x * CELL_SIZE,
      cell.y * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    );

    if (cell.alive) {
      context.fillStyle = `rgb(24, 215, 236)`;
      context.fillRect(
        cell.x * CELL_SIZE + 1,
        cell.y * CELL_SIZE + 1,
        CELL_SIZE - 2,
        CELL_SIZE - 2
      );
    }
  }

  function isAlive(x, y) {

    if (x < 0 || x >= numColumns || y < 0 || y >= numRows) {
      return 0;
    }

    return grid[y][x].alive ? 1 : 0;
  }

  function countLivingNeighbors(cell) {
    const { x, y } = cell;
    return (
      isAlive(x - 1, y - 1) +
      isAlive(x, y - 1) +
      isAlive(x + 1, y - 1) +
      isAlive(x - 1, y) +
      isAlive(x + 1, y) +
      isAlive(x - 1, y + 1) +
      isAlive(x, y + 1) +
      isAlive(x + 1, y + 1)
    );
  }

  function updateGrid() {
    forEachCell((cell) => {
      const numAlive = countLivingNeighbors(cell);

      if (numAlive === 2) {
        cell.nextAlive = cell.alive;
      } else if (numAlive === 3) {
        cell.nextAlive = true;
      } else {
        cell.nextAlive = false;
      }
    });

    forEachCell((cell) => {
      cell.alive = cell.nextAlive;
    });
  }

  function renderGrid() {
    forEachCell(drawCell);
  }

  function gameLoop() {
    updateGrid();
    renderGrid();
    setTimeout(() => {
      window.requestAnimationFrame(gameLoop);
    }, 200);
  }

  function start() {
    createGrid();
    renderGrid();
    window.requestAnimationFrame(gameLoop);
  }

  return { grid, updateGrid, start };
}

function main() {
  const canvas = document.getElementById('canvas');
  canvas.height = NUM_ROWS * CELL_SIZE;
  canvas.width = NUM_COLUMNS * CELL_SIZE;

  const context = canvas.getContext('2d');

  const { start } = createGame(context, NUM_ROWS, NUM_COLUMNS);
  start();
}

// ! Do not change or remove any code below
try {
  window.addEventListener('load', main);
} catch {
  // ignore if running in node with jest
}

module.exports = createGame;

