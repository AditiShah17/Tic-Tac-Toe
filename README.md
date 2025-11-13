# Tic-Tac-Toe

A simple browser-based Tic-Tac-Toe (Xs and Os) game built with HTML, CSS, and JavaScript. Two players can take turns marking spaces on a 3×3 grid. The game detects wins and draws and provides a way to restart.

<img width="500" height="650" alt="image" src="https://github.com/user-attachments/assets/131ba8d0-a393-4171-80f5-ae37afb6e38b" />

## Features
- Two-player local gameplay (Player X vs Player O)
- Win detection for rows, columns and diagonals
- Draw/tie detection
- Reset/Restart game button
- Lightweight: no external libraries required
- Accessible UI that works in modern browsers

## How to play
1. Open `index.html` in your browser.
2. Players take turns clicking any empty cell to place their mark (X or O).
3. The game announces the winner when three marks align, or announces a draw when all cells are filled without a winner.
4. Click the "Restart" button to play again.

## Installation / Run locally
No build tools required — this is plain HTML/CSS/JS.

Option A: Open the file
- Double-click `index.html`, or open it in your browser.

Option B: Serve over a local HTTP server (recommended for some browser restrictions)
  - Open: `http://localhost:8000` in your browser

## File structure (example)
- index.html — main HTML file
- styles.css — styling for the board and controls
- script.js — game logic (handling turns, win/draw detection, UI updates)
- README.md — project documentation

Adjust these paths if your repo uses different filenames.

## Accessibility & Controls
- Primary control: mouse/tap to place marks on the board.
- Consider adding keyboard controls and ARIA attributes to make the game accessible to screen reader users.

## Some ideas for improvements
- Add an AI opponent (easy/medium/hard) using minimax for one-player mode
- Add animations and sound effects for better UX
- Add keyboard navigation and ARIA roles for accessibility
- Add scorekeeping and a best-of-n series option
- Add unit tests for game logic (winning/draw detection)

## Contributing
Contributions are welcome! If you'd like to add features or fixes:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -m "Add my feature"`
4. Push to your fork and open a pull request.

Please include screenshots/GIFs for UI changes.

## License
This project is provided under the MIT License. See LICENSE file for details (or add an appropriate license file).

## Author
Created by AditiShah17

