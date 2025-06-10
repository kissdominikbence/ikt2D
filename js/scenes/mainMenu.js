// mainMenu.js
class MainMenu {
    constructor() {
        this.title = GAME_TITLE;
        this.startButton = { x: (screen.availWidth/2)-150, y: 200, width: 300, height: 50 };
        this.instructionsButton = { x: (screen.availWidth/2)-150, y: 300, width: 300, height: 50 };
        this.resetButton = { x: (screen.availWidth/2)-150, y: 400, width: 300, height: 50 };
    }

    setup() {
        // Set up the main menu scene
        createCanvas(400, 600);
        textAlign(CENTER);
        textSize(48);
    }

    draw() {
        background(0);
        fill(255);
        text(this.title, (screen.availWidth/2)-88, 100);
        this.drawButtons();
    }

    drawButtons() {
        textSize(24);
        fill(100);
        rect(this.startButton.x, this.startButton.y, this.startButton.width, this.startButton.height);
        fill(255);
        text("Start Game", this.startButton.x + this.startButton.width / 3.3, this.startButton.y + 30);

        fill(100);
        rect(this.instructionsButton.x, this.instructionsButton.y, this.instructionsButton.width, this.instructionsButton.height);
        fill(255);
        text("Instructions", this.instructionsButton.x + this.instructionsButton.width / 3.3, this.instructionsButton.y + 30);

        fill(100);
        rect(this.resetButton.x, this.resetButton.y, this.resetButton.width, this.resetButton.height);
        fill(255);
        text("Reset Game", this.resetButton.x + this.resetButton.width / 3.3, this.resetButton.y + 30);
    }

    mousePressed() {
        if (this.isMouseOver(this.startButton)) {
            this.startGame();
        } else if (this.isMouseOver(this.instructionsButton)) {
            this.showInstructions();
        } else if (this.isMouseOver(this.resetButton)) {
            this.resetGame();
        }
    }

    isMouseOver(button) {
        return mouseX > button.x && mouseX < button.x + button.width &&
               mouseY > button.y && mouseY < button.y + button.height;
    }

    startGame() {
        // Logic to start the game
        console.log("Game Started");
    }

    showInstructions() {
        // Logic to show instructions
        console.log("Instructions Displayed");
    }

    resetGame() {
        // Logic to reset the game
        console.log("Game Reset");
    }
}

// Create an instance of the MainMenu class
let mainMenu;

function setup() {
    mainMenu = new MainMenu();
    mainMenu.setup();
}

function draw() {
    mainMenu.draw();
}

function mousePressed() {
    mainMenu.mousePressed();
}