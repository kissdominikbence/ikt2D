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
        push();
        translate(this.x + this.width/2, this.y + this.height/2);
        if (!this.facingRight) scale(-1, 1);
        
        // Draw medieval knight
        // Helmet
        fill(150, 150, 150);
        ellipse(0, -15, 25, 20);
        
        // Visor
        fill(100, 100, 100);
        rect(-8, -20, 16, 8);
        
        // Body armor
        fill(180, 180, 180);
        rect(-12, -5, 24, 30);
        
        // Arms
        fill(160, 160, 160);
        ellipse(-15, 5, 12, 20);
        ellipse(15, 5, 12, 20);
        
        // Sword
        fill(200, 200, 200);
        rect(20, -10, 3, 25);
        fill(139, 69, 19);
        rect(19, 15, 5, 8);
        
        // Legs
        fill(100, 100, 100);
        rect(-8, 25, 6, 20);
        rect(2, 25, 6, 20);
        
        // Cape
        fill(150, 0, 0);
        ellipse(0, 0, 35, 40);
        
        pop();
    }
}