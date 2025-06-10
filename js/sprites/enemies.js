// enemies.js
class Enemy {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.width = 50;  // Default width if sprite isn't loaded yet
        this.height = 50; // Default height if sprite isn't loaded yet
        this.speed = 2; // Default speed
    }

    move() {
        // Basic movement logic (can be customized)
        this.x -= this.speed;
        if (this.x < 0) {
            this.x = width; // Reset position to the right side of the screen
        }
    }

    draw() {
        if (this.sprite) {
            image(this.sprite, this.x, this.y);
        } else {
            fill(255, 0, 0);
            rect(this.x, this.y, this.width, this.height);
        }
    }

    update() {
        this.move();
        this.draw();
    }
}

class EnemyType1 extends Enemy {
    constructor(x, y) {
        super(x, y, null); // Pass null for now, will load image later
        this.speed = 3; // Faster than default
    }
}

class EnemyType2 extends Enemy {
    constructor(x, y) {
        super(x, y, null); // Pass null for now, will load image later
        this.speed = 1.5; // Slower than default
    }
}

// Remove export statement