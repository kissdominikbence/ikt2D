# My 2D Game

## Overview
This project is a 2D game developed using JavaScript and the p5.js library. The game features various scenes, including a main menu, gameplay, level selection, and game over screens. It utilizes custom sprites, sounds, and fonts to create an engaging experience.

## Project Structure
- **index.html**: The main entry point for the game.
- **assets/**: Contains all game assets including fonts, sounds, and sprites.
  - **fonts/**: Custom fonts used in the game.
  - **sounds/**: Sound effects and music for the game.
  - **sprites/**: Images for characters, items, and environment.
    - **characters/**: Sprite images for game characters.
    - **items/**: Sprite images for collectible items.
    - **environment/**: Background and environmental sprite images.
- **css/**: Contains styles for the game.
  - **style.css**: Styles for layout, colors, and fonts.
- **js/**: Contains all JavaScript files for game logic.
  - **main.js**: Initializes the game and sets up the game loop.
  - **game.js**: Core game logic and state management.
  - **scenes/**: Different scene files for the game.
    - **mainMenu.js**: Main menu scene logic.
    - **gameScene.js**: Main gameplay logic.
    - **levelSelect.js**: Level selection logic.
    - **gameOver.js**: Game over scene logic.
  - **sprites/**: Sprite-related files.
    - **player.js**: Player character class and behaviors.
    - **enemies.js**: Enemy classes and behaviors.
    - **collectibles.js**: Collectible items and behaviors.
    - **obstacles.js**: Obstacles and their interactions.
  - **utils/**: Utility functions.
    - **collision.js**: Collision detection functions.
    - **animation.js**: Animation handling functions.
    - **storage.js**: Save and load game data functions.
  - **constants.js**: Constants used throughout the game.
- **lib/**: External libraries.
  - **p5.min.js**: Minified p5.js library.
  - **p5.sound.min.js**: Minified p5.js sound library.
  - **p5play.js**: Extended features for game development.

## Getting Started
1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to start the game.
3. Follow the on-screen instructions to navigate through the game.

## Contributing
Feel free to contribute to the project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.