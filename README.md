# ⌛ Study and Rest Timer

This project provides a simple timer application for tracking study and rest periods. It features a visually appealing UI built using HTML and Tailwind CSS and includes JavaScript logic to manage the timers efficiently.

---

## ✨ Features

- **🕒 Study Timer**: Tracks the time spent studying.
- **☕ Rest Timer**: Tracks the time spent resting.
- **↻ Switch Timers**: Easily switch between study and rest timers.
- **🚫 Prevent Overlapping Intervals**: Ensures only one timer runs at a time to prevent conflicts.
- **🌐 Responsive Design**: Adjusts to different screen sizes for an optimal experience.

---

## 🔮 Project Structure

### 🗋 Files
- `index.html`: The main HTML file containing the structure of the application.
- `output.css`: Tailwind CSS file for styling.
- `script.js`: JavaScript file containing the logic for managing the timers.

---

## ⚙️ HTML Structure

The HTML file (`index.html`) consists of two primary sections:

1. **🕒 Study Timer**:
   - A circular timer display bordered in green.
   - A button labeled **STUDY** to start the study timer.

2. **☕ Rest Timer**:
   - A circular timer display bordered in red.
   - A button labeled **REST** to start the rest timer.

```html
<div class="study h-1/2 w-full md:h-full md:w-1/2 flex items-center justify-center">
    <div class="h-[300px] lg:h-[500px] w-[300px] lg:w-[500px] border-4 border-green-500 rounded-full flex flex-col items-center justify-evenly">
        <h1 class="select-none text-6xl font-bold text-white">
            <span id="studyMinute">00</span> : <span id="studySecond">00</span>
        </h1>
        <button onclick="startStudy();" class="bg-green-500 p-2 px-5 rounded-lg font-bold text-lg text-white">STUDY</button>
    </div>
</div>
```

---

## 📊 JavaScript Logic

The core functionality is implemented in `script.js`, which handles the study and rest timers, ensuring they do not overlap.

### ⚛ Variables
- `studyMinute`, `studySecond`: DOM elements for the study timer display.
- `restMinute`, `restSecond`: DOM elements for the rest timer display.
- `studySecondCounter`, `studyMinuteCounter`: Counters for the study timer.
- `restSecondCounter`, `restMinuteCounter`: Counters for the rest timer.
- `isStudying`, `isResting`: Flags to track the active timer.
- `studyInterval`, `restInterval`: Interval IDs for study and rest timers.

### 🗒 Functions

#### `startStudy()`
Starts the study timer and stops the rest timer if it's running.
```javascript
function startStudy() {
    if (studyInterval) return;
    isStudying = true;
    isResting = false;
    stopResting();
    studyInterval = setInterval(startTimer, 1000);
}
```

#### `stopStudy()`
Stops the study timer.
```javascript
function stopStudy() {
    clearInterval(studyInterval);
    studyInterval = null;
}
```

#### `startRest()`
Starts the rest timer and stops the study timer if it's running.
```javascript
function startRest() {
    if (restInterval) return;
    isResting = true;
    isStudying = false;
    stopStudy();
    restInterval = setInterval(startRestTimer, 1000);
}
```

#### `stopResting()`
Stops the rest timer.
```javascript
function stopResting() {
    clearInterval(restInterval);
    restInterval = null;
}
```

#### `startTimer()`
Increments the study timer and updates the display.
```javascript
function startTimer() {
    if (studySecondCounter < 59) {
        studySecondCounter += 1;
    } else {
        studySecondCounter = 0;
        studyMinuteCounter += 1;
    }
    studySecond.textContent = String(studySecondCounter).padStart(2, '0');
    studyMinute.textContent = String(studyMinuteCounter).padStart(2, '0');
}
```

#### `startRestTimer()`
Increments the rest timer and updates the display.
```javascript
function startRestTimer() {
    if (restSecondCounter < 59) {
        restSecondCounter += 1;
    } else {
        restSecondCounter = 0;
        restMinuteCounter += 1;
    }
    restSecond.textContent = String(restSecondCounter).padStart(2, '0');
    restMinute.textContent = String(restMinuteCounter).padStart(2, '0');
}
```

---

## 🔧 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/StudyRestTimer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd StudyRestTimer
   ```

3. Open `index.html` in a browser to use the application.

---

## 🎨 Customization
- Modify `output.css` to change the styles of the timer and buttons.
- Adjust the logic in `script.js` to add new features, such as alerts when a timer completes.

---

## 📄 License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## 🚀 Contributions
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

