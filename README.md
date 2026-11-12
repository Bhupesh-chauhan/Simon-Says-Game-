# 🎮 Simon Says Game

A classic browser-based memory game built entirely with **HTML, CSS, and Vanilla JavaScript**. Watch the pattern of flashing colors, remember the sequence, and repeat it as the game gets progressively harder!

🔗 **[Play the Game Live]---(https://simon-says-game-qsoy.onrender.com)**
---

## ✨ Features

* **Pure Vanilla Stack:** Built from scratch with zero external libraries or frameworks.
* **Dynamic Sequence Generation:** Randomly generates a new color step every round.
* **Visual & Audio Feedback:** Smooth CSS button flash animations paired with sound effects.
* **Level & Score Tracking:** Real-time level counter and game-over score summary.
* **Responsive Layout:** Works smoothly on both desktop and mobile screens.

---

## 🕹️ How to Play

1. Press **any key** or click the **Start** button to begin.
2. Watch the board as a colored button flashes.
3. Click the button that just flashed.
4. On the next level, the game will flash a new color—you must repeat the **entire sequence from the beginning** in the exact order.
5. One wrong click ends the game! Press any key/Start to try again.

---

## 🛠️ Built With

* **HTML5** – Semantic structure for the game board and score display
* **CSS3** – Grid/Flexbox layout, custom colors, and active flash animations
* **JavaScript (ES6)** – Game loop, sequence arrays, event listeners, and audio playback

---

## 🚀 Run Locally

No build tools or package installations are required. You can run this directly in your browser:

1. **Clone the repository:**
   ```bash
   git clone https://github.com[your-username]/[repo-name].git
   ```
2. **Open the project folder:**
   ```bash
   cd [repo-name]
   ```
3. **Launch the game:**
   Double-click `index.html` to open it in any web browser, or right-click and select **Open with Live Server** in VS Code.

---

## 📂 File Structure

```text
├── index.html      # Game markup and UI layout
├── style.css       # Styling, responsive design, and button flash effects
├── app.js          # Game logic, sequence tracking, and event handlers
└── README.md       # Project documentation
```

---

## 🔮 Future Enhancements

* [ ] Save the all-time high score using browser `localStorage`.
* [ ] Add keyboard controls (`W`, `A`, `S`, `D` or Arrow keys) alongside mouse clicks.
* [ ] Add a sound mute/unmute toggle button.

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).
