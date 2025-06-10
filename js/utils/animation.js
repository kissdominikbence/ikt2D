// This file contains functions for handling animations in the game.

function animateSprite(sprite, frames, frameRate) {
    sprite.frameCount = frames.length;
    sprite.currentFrame = Math.floor((frameRate / 1000) * frameCount) % sprite.frameCount;
    sprite.image = frames[sprite.currentFrame];
}

function fadeIn(element, duration) {
    let opacity = 0;
    element.style.opacity = opacity;
    const interval = 50;
    const increment = interval / duration;

    const fade = setInterval(() => {
        opacity += increment;
        if (opacity >= 1) {
            clearInterval(fade);
            opacity = 1;
        }
        element.style.opacity = opacity;
    }, interval);
}

function fadeOut(element, duration) {
    let opacity = 1;
    element.style.opacity = opacity;
    const interval = 50;
    const decrement = interval / duration;

    const fade = setInterval(() => {
        opacity -= decrement;
        if (opacity <= 0) {
            clearInterval(fade);
            opacity = 0;
        }
        element.style.opacity = opacity;
    }, interval);
}