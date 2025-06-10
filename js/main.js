// main.js - The entry point for the game

// Game state management
let gameState = "mainMenu"; // Possible states: mainMenu, playing, gameOver, levelSelect
let game;

// Keep track of assets
let assets = {
    sprites: {},
    sounds: {}
};

function preload() {
    // Here you would load assets
    // Example: assets.sprites.player = loadImage('assets/sprites/characters/player.png');
}

function setup() {
    createCanvas(windowWidth-3, windowHeight-5);
    frameRate(FRAME_RATE);
    
    // Initialize game
    game = new Game();
    
    // Set initial game state
    setGameState("mainMenu");
}

function draw() {
    clear();
    background(220);
    
    // Handle different game states
    switch (gameState) {
        case "mainMenu":
            game.drawMainMenu();
            break;
        case "levelSelect":
            game.drawLevelSelect();
            break;
        case "instructions":
            game.drawInstructions();
            break;
        case "playing":
            game.update();
            game.draw();
            break;
        case "gameOver":
            game.drawGameOver();
            break;
        case "gameCompleted":
            game.drawGameCompleted();
            break;
    }
}

function setGameState(state) {
    gameState = state;
    
    // Do any initialization needed for the new state
    if (state === "playing") {
        game.startLevel(game.currentLevel);
    }
}

function mousePressed() {
    // Handle mouse input based on current game state
    switch (gameState) {
        case "mainMenu":
            game.handleMainMenuClick();
            break;
        case "levelSelect":
            game.handleLevelSelectClick();
            break;
        case "instructions":
            game.handleInstructionsClick();
            break;
        case "gameOver":
            game.handleGameOverClick();
            break;
        case "gameCompleted":
            game.handleGameCompletedClick();
            break;
    }
}

function keyPressed() {
    // Handle key presses for in-game controls
    if (gameState === "playing") {
        game.handleKeyPress(keyCode);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}