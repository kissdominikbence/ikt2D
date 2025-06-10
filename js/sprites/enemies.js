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
        push();
        translate(this.x + this.width/2, this.y + this.height/2);
        
        // Demon body
        fill(255, 0, 0);
        ellipse(0, 0, this.width, this.height);
        
        // Horns
        fill(50, 0, 0);
        triangle(-10, -15, -5, -25, -15, -20);
        triangle(10, -15, 5, -25, 15, -20);
        
        // Eyes
        fill(255, 255, 0);
        ellipse(-8, -5, 6, 8);
        ellipse(8, -5, 6, 8);
        
        // Pupils
        ellipse(-8, -5, 3, 4);
        ellipse(8, -5, 3, 4);
        
        // Mouth
        arc(0, 5, 15, 10, 0, PI);
        
        // Fangs
        fill(255);
        triangle(-5, 5, -3, 12, -7, 8);
        triangle(5, 5, 3, 12, 7, 8);
        
        pop();
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