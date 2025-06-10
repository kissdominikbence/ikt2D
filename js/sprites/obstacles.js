class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isActive = true; // Indicates if the obstacle is currently active in the game
    }

    draw() {
        if (this.isActive) {
            // Draw the obstacle on the canvas
            fill(150); // Example color for the obstacle
            rect(this.x, this.y, this.width, this.height);
        }
    }

    update() {
        // Update obstacle logic if needed (e.g., movement, state changes)
    }

    deactivate() {
        this.isActive = false; // Deactivate the obstacle
    }

    reset(x, y) {
        this.x = x; // Reset position
        this.y = y;
        this.isActive = true; // Reactivate the obstacle
    }
}

// Example usage
const obstacles = [];

function createObstacle(x, y, width, height) {
    const obstacle = new Obstacle(x, y, width, height);
    obstacles.push(obstacle);
}

// Function to draw all obstacles
function drawObstacles() {
    for (let obstacle of obstacles) {
        obstacle.draw();
    }
}

// Function to update all obstacles
function updateObstacles() {
    for (let obstacle of obstacles) {
        obstacle.update();
    }
}