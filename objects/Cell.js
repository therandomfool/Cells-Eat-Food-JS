  
import { difference, rotate, rand, randInt } from "/utils.js";
import { Body } from "./Body.js";

export const cells = [];
export const cellLimit = 1000;

export class Cell extends Body {
    constructor(x, y) {
        super(x, y);
        cells.push(this);
        this.alpha = 0.5;
        this.color = "#3080FF";
        this.maxSpeed = randInt(250, 400);
        this.maxForce = randInt(30, 60);
        this.time = 0;
        this.swim = {
            length: randInt(40, 50),
            amplitude: rand(Math.PI / 10, Math.PI / 8),
        };
        writeCellNumber();
    }

    update(food, deltaTime) {
        this.time++;
        const force = difference(this.pos, food.pos);
        this.applyForce(force);
        const swimAngle =
            this.swim.amplitude * Math.cos((this.time / this.swim.length) * Math.PI);
        this.applyForce(rotate(this.vel, swimAngle));
        this.updatePos(deltaTime);
    }
}

function writeCellNumber() {
    const info = document.getElementById("info");
    info.innerText = `${cells.length} cell`;
    if (cells.length > 1) info.innerText += "s";
}
