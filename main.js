import { clearCanvas } from "/canvas.js";
import { Timer } from "/Timer.js";
import { Cell, cells } from "/objects/Cell.js";
import { food, Food } from "/objects/Food.js";

new Cell();
new Food();

const timer = new Timer(1 / 60);

timer.update = (deltaTime) => {
    clearCanvas();
    food.update(cells, deltaTime);
    for (const cell of cells) {
        cell.update(food, deltaTime);
    }
    for (const obj of [...cells, food]) {
        obj.draw();
    }
};

timer.start();