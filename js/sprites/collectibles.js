class Collectible {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.collected = false;
    }

    display() {
        if (!this.collected) {
            // If no sprite is available, draw a simple shape
            if (!this.sprite) {
                fill(255, 255, 0); // Yellow color
                ellipse(this.x, this.y, 30, 30);
            } else {
                image(this.sprite, this.x, this.y);
            }
        }
    }

    collect() {
        this.collected = true;
    }

    isCollected(player) {
        if (this.collected) return false;

        let d = dist(this.x, this.y, player.x, player.y);
        if (d < player.width / 2) {
            this.collect();
            return true;
        }
        return false;
    }
}

function createCollectibles(num, sprite) {
    let collectibles = [];
    for (let i = 0; i < num; i++) {
        let x = random(width);
        let y = random(height);
        collectibles.push(new Collectible(x, y, sprite));
    }
    return collectibles;
}