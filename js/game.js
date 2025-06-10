// Game.js - Core game logic and state management

class Game {
    constructor() {
        this.score = 0;
        this.highScore = storage.loadData("highScore") || 0;
        this.currentLevel = 0;
        
        // Game objects
        this.player = null;
        this.enemies = [];
        this.collectibles = [];
        this.obstacles = [];
        
        // Game settings
        this.difficultyLevel = 1;
        this.levelCompleted = storage.loadData("levelsCompleted") || [];
        
        // UI elements
        this.mainMenu = new MainMenu();
        this.gameOverScreen = new GameOver();
        this.gameCompletedScreen = new GameComplete(this.score);
        this.levelSelectScreen = new LevelSelect();
        this.instructions = new Instructions();
    }
    
    // Game initialization
    startLevel(levelIndex) {
        this.currentLevel = levelIndex;
        this.score = 0;
        
        // Create player
        this.player = new Player(width / 2, height - 100);
        
        // Create enemies based on level
        this.enemies = [];
        for (let i = 0; i < 3 + levelIndex; i++) {
            this.enemies.push(new EnemyType1(
                random(width), 
                random(height / 2)
            ));
        }
        
        // Create collectibles
        this.collectibles = [];
        for (let i = 0; i < 5 + levelIndex; i++) {
            this.collectibles.push(new Collectible(
                random(width),
                random(height),
                null
            ));
        }
        
        // Create obstacles
        this.obstacles = [];
        for (let i = 0; i < 2 + levelIndex; i++) {
            this.obstacles.push(new Obstacle(
                random(width),
                random(height),
                50,
                50
            ));
        }
    }
    
    // Main game loop update
    update() {
        if (!this.player) return;
        
        // Update player
        this.player.move();
        
        // Update enemies
        for (let enemy of this.enemies) {
            enemy.update();
            
            // Check collision with player
            if (checkCollision(
                {x: this.player.x, y: this.player.y, width: this.player.width, height: this.player.height},
                {x: enemy.x, y: enemy.y, width: enemy.width, height: enemy.height}
            )) {
                this.gameOver();
                return;
            }
        }
        
        // Update collectibles and check collection
        for (let i = this.collectibles.length - 1; i >= 0; i--) {
            let collectible = this.collectibles[i];
            
            if (checkCollision(
                {x: this.player.x, y: this.player.y, width: this.player.width, height: this.player.height},
                {x: collectible.x, y: collectible.y, width: 30, height: 30}
            )) {
                this.score += COLLECTIBLE_POINTS;
                this.collectibles.splice(i, 1);
                
                // Check if level complete
                if (this.collectibles.length === 0) {
                    this.levelComplete();
                }
            }
        }
        
        // Check collision with obstacles
        for (let obstacle of this.obstacles) {
            if (checkCollision(
                {x: this.player.x, y: this.player.y, width: this.player.width, height: this.player.height},
                {x: obstacle.x, y: obstacle.y, width: obstacle.width, height: obstacle.height}
            )) {
                this.gameOver();
                return;
            }
        }
    }
    
    // Render game elements
    draw() {
        // Draw background
        background(200, 230, 255);
        
        // Draw player
        this.player.display();
        
        // Draw enemies
        for (let enemy of this.enemies) {
            enemy.draw();
        }
        
        // Draw collectibles
        for (let collectible of this.collectibles) {
            collectible.display();
        }
        
        // Draw obstacles
        for (let obstacle of this.obstacles) {
            obstacle.draw();
        }
        
        // Draw UI
        this.drawUI();
    }
    
    drawUI() {
        // Score
        fill(0);
        textSize(24);
        textAlign(LEFT);
        text(`Score: ${this.score}`, 20, 30);
        
        // Level
        textAlign(RIGHT);
        text(`Level: ${this.currentLevel + 1}`, width - 20, 30);
    }
    
    // Handle game over
    gameOver() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            storage.saveData("highScore", this.highScore);
        }
        
        this.gameOverScreen.setScore(this.score);
        setGameState("gameOver");
    }
    
    // Handle level completion
    levelComplete() {
        if (!this.levelCompleted.includes(this.currentLevel)) {
            this.levelCompleted.push(this.currentLevel);
            storage.saveData("levelsCompleted", this.levelCompleted);
        }
        
        // Unlock next level
        if (this.levelSelectScreen.levels[this.currentLevel + 1]) {
            this.levelSelectScreen.levels[this.currentLevel + 1].unlocked = true;
        }
        
        this.currentLevel++;
        // show level select screen or next level
        if (this.currentLevel < this.levelSelectScreen.levels.length) {
            setGameState("levelSelect");
        } else {
            // Show game completed screen
            setGameState("gameCompleted");
        }
    }
    
    // Menu handlers
    drawMainMenu() {
        this.mainMenu.draw();
    }
    
    handleMainMenuClick() {
        if (this.mainMenu.isMouseOver(this.mainMenu.startButton)) {
            setGameState("levelSelect");
        } else if (this.mainMenu.isMouseOver(this.mainMenu.instructionsButton)) {
            setGameState("instructions");
        } else if (this.mainMenu.isMouseOver(this.mainMenu.resetButton)) {
            storage.clearData();
            this.levelCompleted = [];
            this.highScore = 0;
            storage.saveData("highScore", this.highScore);
            storage.saveData("levelsCompleted", this.levelCompleted);
        }
    }

    handleInstructionsClick() {
        let mx = mouseX;
        let my = mouseY;

        if (mx > width / 2 - 50 && mx < width / 2 + 50 && my > height - 70 && my < height - 30) {
            setGameState("mainMenu");
        }
    }
    
    drawLevelSelect() {
        this.levelSelectScreen.display();
    }

    drawInstructions() {
        this.instructions.display();
    }
    
    handleLevelSelectClick() {
        // Check if a level was clicked
        for (let i = 0; i < this.levelSelectScreen.levels.length; i++) {
            let level = this.levelSelectScreen.levels[i];
            if (level.unlocked && mouseY > 80 + i * 50 && mouseY < 120 + i * 50) {
                this.currentLevel = i;
                setGameState("playing");
                return;
            }
        }
    }
    
    drawGameOver() {
        this.gameOverScreen.display();
    }

    drawGameCompleted() {
        this.gameCompletedScreen.setScore(this.score);
        this.gameCompletedScreen.display();
    }
    
    handleGameOverClick() {
        // Check if restart button was clicked
        if (mouseY > height / 2 + 30 && mouseY < height / 2 + 70 &&
            mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
            setGameState("mainMenu");
        }
    }

    handleGameCompletedClick() {
        // Check if restart button was clicked
        if (mouseY > height / 2 + 30 && mouseY < height / 2 + 70 &&
            mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
            setGameState("mainMenu");
        }
    }
}