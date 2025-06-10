class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50; // Width of the player sprite
        this.height = 50; // Height of the player sprite
        this.speed = PLAYER_SPEED; // Movement speed from constants.js
        // this.sprite = loadImage('assets/sprites/characters/player.png'); // Load player sprite
    }

    move() {
        // Handle keyboard movement
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
        
        // Keep player within bounds
        this.x = constrain(this.x, 0, width - this.width);
        this.y = constrain(this.y, 0, height - this.height);
    }

    display() {
        // Draw the player
        fill(0, 0, 255);
        rect(this.x, this.y, this.width, this.height);
        
        // If we had a sprite:
        // image(this.sprite, this.x, this.y, this.width, this.height);
    }

    resetPosition() {
        this.x = width / 2; // Reset to center of the screen
        this.y = height - this.height - 10; // Reset to bottom of the screen
    }
}