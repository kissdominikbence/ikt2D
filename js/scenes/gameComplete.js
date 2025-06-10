// This file handles the game complete scene, displaying scores and options to restart.

class GameComplete {
    constructor(playerscore) {
        this.title = "Game Completed";
        this.restartButton = "Restart";
        this.score = playerscore;
    }

    display() {
        background(0); // Set background color to black
        fill(255); // Set text color to white
        textSize(48);
        textAlign(CENTER);
        text(this.title, width / 2, height / 2 - 50);
        
        textSize(32);
        text("Score: " + this.score, width / 2, height / 2);
        
        textSize(24);
        text(this.restartButton, width / 2, height / 2 + 50);
    }

    setScore(score) {
        this.score = score;
    }

    handleMousePressed() {
        let mx = mouseX;
        let my = mouseY;

        if (mx > width / 2 - 50 && mx < width / 2 + 50 && my > height / 2 + 30 && my < height / 2 + 70) {
            // Restart the game
            this.restartGame();
        }
    }

    restartGame() {
        // Logic to restart the game
        // This could involve resetting variables, changing scenes, etc.
        gameState = "mainMenu"; // Example of changing the game state
    }
}