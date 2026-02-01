# Creative-Programming-One-Assignment
This assignment was created in the first year and first semester of the Creative Computing course at South East Technological University.
# Assignment 04 — Christmas Street Scene (p5.js)

**Author:** Annetta Hawkins  
**Date:** 30/11/2024

---

## Overview

This is an animated Christmas street scene built with **p5.js** on a 1000×1000 canvas. A row of houses lines a road, decorated Christmas trees cluster in the background, and three snowmen stand in the foreground. Two vehicles — a red car and a blue police car — drive in opposite directions across the road in a continuous loop. A sun drifts slowly across the sky, and Santa Claus sits beside his sleigh with a wrapped present nearby. Every reusable object in the scene is built using the **constructor-function** pattern, and repeated elements like houses and snowmen are managed with arrays and `for` loops — demonstrating object-oriented design and iterative rendering in p5.js.

---

## Files

| File | Description |
|---|---|
| `index.html` | Entry point. Loads p5.js (v1.11.1) and the sound add-on via CDN, links the stylesheet, and includes all script files. |
| `sketch.js` | Main p5.js sketch. Contains `setup()`, `draw()`, all global animation state, and the standalone drawing functions for the sun, road, Santa, sleigh, and present. Also orchestrates the creation and rendering loops for houses and snowmen via arrays. |
| `house.js` | Defines the `house` constructor — a decorated house with a roof, chimney, window, door, and randomly coloured roof lights. |
| `car.js` | Defines the `car` constructor — a simple two-tone car body with two wheels. |
| `police.js` | Defines the `police` constructor — structurally identical to `car`; its colour is set via `fill()` in `sketch.js` before each frame is drawn. |
| `snowmen.js` | Defines the `snowmen` constructor — a three-sphere snowman with eyes, a triangular nose, two buttons, and a mouth. |
| `Ctree.js` | Defines the `Ctree` constructor — a three-tiered Christmas tree with a trunk and randomly coloured light bulbs. Contains two helper functions, `bulbs_1()` and `bulbs_2()`, that draw strings of bulbs descending to the left and right respectively. |
| `style.css` | Minimal stylesheet removing default body margins and setting the canvas to block display. |
| `p5.js` | Local copy of the p5.js library (v1.11.1). |
| `p5_sound_min.js` | Local copy of the p5.js sound add-on (included for consistency; no audio is used in this sketch). |

---

## OOP Pattern: Constructor Functions

This project uses the **constructor-function** pattern rather than ES6 classes. Each reusable object is a regular function that attaches properties and a `display()` method to `this`, then gets invoked with the `new` keyword:

```javascript
function ObjectName(x, y) {
    this.x = x;
    this.y = y;
    this.display = function() { /* drawing code */ };
}

var obj = new ObjectName(100, 200);
obj.display();
```

All five constructor functions (`house`, `car`, `police`, `snowmen`, `Ctree`) follow this structure. Every element is positioned relative to just the two coordinates passed into the constructor, so a single pair of arguments is enough to place an entire complex object anywhere on the canvas.

---

## Scene Elements

### Static Elements

| Element | Constructor / Function | Details |
|---|---|---|
| Houses | `house` | **7 houses** created once in `setup()`, stored in the `street[]` array. Each includes a green body, a triangular roof, a teal chimney, a windowed facade with cross-panes, a green door with a handle, and 11 randomly coloured light bulbs along the roofline. |
| Snowmen | `snowmen` | **3 snowmen** created once in `setup()`, stored in the `row[]` array. Each is three stacked ellipses with eyes, a triangular nose, two buttons, and a line mouth. |
| Christmas Trees | `Ctree` | **3 trees** instantiated each frame at fixed positions. Each has three green triangular tiers, a brown trunk, and randomly coloured bulb strings drawn by `bulbs_1()` and `bulbs_2()`. |
| Santa | `santa()` | A hand-drawn figure built from circles, rectangles, and triangles — red suit with two buttons, skin-toned head, eyes, a white triangular beard, a red pointed hat, and a white pouf. |
| Sleigh | `sleigh()` | A red quadrilateral (`quad`) with a grey triangular back panel and a grey rectangular runner. |
| Present | `present()` | A red rectangular box with a gold ribbon cross and two gold triangular bow halves on top. |
| Road | `road()` | A full-width black rectangle drawn across the middle of the canvas. |

### Animated Elements

| Element | Function | Animation |
|---|---|---|
| Sun | `sun()` | A yellow circle that drifts **right to left** at 3 px per frame. Once it fully exits the left edge, it resets to the right side for a seamless loop. |
| Red Car | `mycar()` | Travels **right to left** across the lower lane of the road at 5 px per frame. Wraps back to the right edge when it exits the left. |
| Blue Police Car | `police1()` | Travels **left to right** across the upper lane of the road at 5 px per frame. Wraps back to the left edge when it exits the right. |

---

## Array & Loop Usage

Houses and snowmen are managed using arrays and `for` loops, cleanly separating object creation from rendering:

- **`createStreet()`** runs once during `setup()`. It loops 7 times, instantiating a new `house` at x-positions spaced 110 px apart and storing each in the `street[]` array.
- **`showStreet()`** runs every frame inside `draw()`. It iterates over `street[]` and calls `.display()` on each house.
- **`createSnowman()`** and **`showSnowman()`** follow the same pattern for the 3 snowmen in the `row[]` array, spaced 200 px apart.

---

## How to Run

1. Clone or download the entire project folder — all files must remain together.
2. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari).
3. The animated Christmas scene will render immediately. No user interaction is required.

> **Note:** The Christmas tree bulbs and house roofline lights use `random()` inside `draw()`, so their colours will change every frame. This flickering effect is expected behaviour.

---

## Requirements

- A modern web browser with JavaScript enabled.
- No local server setup is needed — the sketch loads no external assets or audio at runtime.
