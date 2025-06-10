// obstacles.js - Medieval themed obstacles
class Obstacle {
    constructor(x, y, w, h, type = null) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        
        // Different types of obstacles
        this.types = ['spike_trap'];
        this.type = type || random(this.types);
        
        // Animation properties
        this.animationTimer = 0;
        this.dangerous = true;
        
        // Set properties based on type
        switch(this.type) {
            case 'spike_trap':
                this.color = color(100, 100, 100);
                this.dangerColor = color(150, 0, 0);
                break;
            case 'fire_pit':
                this.color = color(200, 50, 0);
                this.dangerColor = color(255, 100, 0);
                break;
            case 'boulder':
                this.color = color(120, 120, 120);
                this.dangerColor = color(80, 80, 80);
                break;
            case 'thorns':
                this.color = color(50, 100, 50);
                this.dangerColor = color(100, 50, 50);
                break;
            case 'castle_wall':
                this.color = color(150, 150, 150);
                this.dangerColor = color(100, 100, 100);
                break;
        }
    }

    update() {
        this.animationTimer++;
        
        // Special animations for certain types
        if (this.type === 'fire_pit') {
            // Fire flickers
            this.dangerous = true;
        } else if (this.type === 'spike_trap') {
            // Spikes extend and retract
            this.dangerous = (this.animationTimer % 120) < 60;
        }
    }

    draw() {
        push();
        translate(this.x, this.y);
        
        switch(this.type) {
            case 'spike_trap':
                this.drawSpikeTrap();
                break;
            case 'fire_pit':
                this.drawFirePit();
                break;
            case 'boulder':
                this.drawBoulder();
                break;
            case 'thorns':
                this.drawThorns();
                break;
            case 'castle_wall':
                this.drawCastleWall();
                break;
        }
        
        pop();
    }

    drawSpikeTrap() {
        // Base plate
        fill(this.color);
        stroke(0);
        strokeWeight(2);
        rect(0, this.height - 10, this.width, 10);
        
        // Spikes
        if (this.dangerous) {
            fill(this.dangerColor);
            for (let i = 0; i < this.width; i += 15) {
                triangle(i + 5, this.height - 10, 
                        i + 10, 5, 
                        i + 15, this.height - 10);
            }
        }
    }

    drawFirePit() {
        // Pit base
        fill(50, 25, 0);
        stroke(0);
        strokeWeight(2);
        ellipse(this.width/2, this.height/2, this.width, this.height);
        
        // Fire flames (animated)
        let flameHeight = this.height/2 + sin(this.animationTimer * 0.2) * 5;
        for (let i = 0; i < 3; i++) {
            let flameX = this.width/4 + i * this.width/4;
            
            // Flame colors
            fill(255, random(100, 255), 0, 180);
            noStroke();
            ellipse(flameX, this.height/2, 15, flameHeight);
            
            fill(255, 0, 0, 100);
            ellipse(flameX, this.height/2, 8, flameHeight * 0.7);
        }
        
        // Embers
        fill(255, 100, 0);
        for (let i = 0; i < 5; i++) {
            let emberX = random(this.width);
            let emberY = random(this.height/2) + sin(this.animationTimer * 0.1 + i) * 20;
            ellipse(emberX, emberY, 3, 3);
        }
    }

    drawBoulder() {
        // Main boulder
        fill(this.color);
        stroke(this.dangerColor);
        strokeWeight(3);
        ellipse(this.width/2, this.height/2, this.width, this.height);
        
        // Rock texture
        fill(this.dangerColor);
        noStroke();
        for (let i = 0; i < 8; i++) {
            let spotX = random(this.width * 0.2, this.width * 0.8);
            let spotY = random(this.height * 0.2, this.height * 0.8);
            ellipse(spotX, spotY, random(5, 12), random(5, 12));
        }
        
        // Highlight
        fill(200, 200, 200, 100);
        ellipse(this.width * 0.3, this.height * 0.3, this.width * 0.3, this.height * 0.3);
    }

    drawThorns() {
        // Base bush
        fill(this.color);
        stroke(0);
        strokeWeight(1);
        for (let i = 0; i < this.width; i += 10) {
            ellipse(i + 5, this.height - 5, 12, 10);
        }
        
        // Thorns
        fill(this.dangerColor);
        noStroke();
        for (let i = 0; i < this.width; i += 8) {
            for (let j = 0; j < this.height; j += 12) {
                // Sharp thorn points
                triangle(i + random(-2, 2), j + random(-2, 2),
                        i + 3 + random(-1, 1), j - 5 + random(-1, 1),
                        i - 3 + random(-1, 1), j + 2 + random(-1, 1));
            }
        }
    }

    drawCastleWall() {
        // Main wall
        fill(this.color);
        stroke(0);
        strokeWeight(2);
        rect(0, 0, this.width, this.height);
        
        // Stone blocks pattern
        stroke(this.dangerColor);
        strokeWeight(1);
        for (let y = 0; y < this.height; y += 20) {
            line(0, y, this.width, y);
        }
        for (let x = 0; x < this.width; x += 30) {
            for (let y = 0; y < this.height; y += 40) {
                line(x, y, x, y + 20);
            }
        }
        
        // Battlements (if tall enough)
        if (this.height > 40) {
            fill(this.color);
            for (let i = 0; i < this.width; i += 25) {
                rect(i, -10, 15, 10);
            }
        }
        
        // Moss/age effects
        fill(100, 150, 100, 100);
        noStroke();
        for (let i = 0; i < 5; i++) {
            let mossX = random(this.width);
            let mossY = random(this.height);
            ellipse(mossX, mossY, random(8, 15), random(5, 10));
        }
    }

    isDangerous() {
        return this.dangerous;
    }
}