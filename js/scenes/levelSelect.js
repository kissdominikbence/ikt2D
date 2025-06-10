// levelSelect.js
class LevelSelect {
    constructor() {
        this.levels = [
            { name: "Level 1 Just for fun :))", unlocked: true },
            { name: "Level 2", unlocked: false },
            { name: "Level 3", unlocked: false }
        ];
        this.selectedLevel = 0;

        // Load completed levels from storage
        let completedLevels = storage.loadData("levelsCompleted");
        if (completedLevels) {
            for (let i = 0; i < completedLevels.length; i++) {
            let levelIndex = completedLevels[i];
            if (levelIndex >= 0 && levelIndex < this.levels.length) {
                this.levels[levelIndex].unlocked = true;
                if (levelIndex + 1 < this.levels.length) {
                this.levels[levelIndex + 1].unlocked = true; // Unlock the next level
                }
            }
            }
        }

        // Load high score from storage
        this.highScore = storage.loadData("highScore") || 0;
    }

    display() {
        textSize(32);
        fill(0);
        text("Select a Level", width / 2, 50);

        for (let i = 0; i < this.levels.length; i++) {
            let level = this.levels[i];
            if (level.unlocked) {
                fill(0, 255, 0); // Green for unlocked levels
            } else {
                fill(255, 0, 0); // Red for locked levels
            }
            text(level.name, width / 2, 100 + i * 50);
        }
    }
}