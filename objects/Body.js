import { canvas, ctx } from "../canvas.js";
import { randInt, distance, limit } from "../utils.js";

const threshold = 100;

export class Body {
    constructor(x, y) {
        this.pos = {
            x: x || randInt(threshold, canvas.width - threshold),
            y: y || randInt(threshold, canvas.height - threshold),
        };
        this.size = 10;
        this.vel = { x: 0, y: 0 };
        this.alpha = 1;
        this.color = "#00FF00";
        this.maxForce = 0;
        this.maxSpeed = 0;
    }

    touches(body) {
        return distance(this.pos, body.pos) < this.size + body.size;
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    updatePos(deltaTime) {
        this.pos.x += this.vel.x * deltaTime;
        this.pos.y += this.vel.y * deltaTime;
    }

    applyForce(force) {
        const limitedForce = limit(force, this.maxForce);
        this.vel.x += limitedForce.x;
        this.vel.y += limitedForce.y;
        this.vel = limit(this.vel, this.maxSpeed);
    }
}
