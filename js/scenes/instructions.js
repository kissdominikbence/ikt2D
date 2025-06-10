// This is the screen for instructions
class Instructions {
    constructor() {
        this.title = "Instructions";
        this.instructionsText = [
            "Use arrow keys to move",
            "Press space to jump",
            "Avoid enemies and obstacles",
            "Collect coins for points",
            "Reach the finish line to win"
        ];
        this.backButton = "Back to Menu";
    }

    display() {
        background(0); // Set background color to black
        fill(255); // Set text color to white
        textSize(48);
        textAlign(CENTER);
        text(this.title, width / 2, height / 2 - 50);

        textSize(24);
        for (let i = 0; i < this.instructionsText.length; i++) {
            text(this.instructionsText[i], width / 2, height / 2 + i * 30);
        }

        textSize(24);
        text(this.backButton, width / 2, height - 50);
    }

    handleMousePressed() {
        let mx = mouseX;
        let my = mouseY;

        if (mx > width / 2 - 50 && mx < width / 2 + 50 && my > height - 70 && my < height - 30) {
            // Go back to the main menu
            gameState = "mainMenu"; // Example of changing the game state
        }
    }
}