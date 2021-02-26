export function randInt(a, b) {
    return a + Math.floor((b - a) * Math.random());
}

export function rand(a, b) {
    return a + (b - a) * Math.random();
}

export function distance(posA, posB) {
    return Math.sqrt(Math.pow(posA.x - posB.x, 2) + Math.pow(posA.y - posB.y, 2));
}

function norm(pos) {
    return distance(pos, { x: 0, y: 0 });
}

export function difference(posA, posB) {
    return { x: posB.x - posA.x, y: posB.y - posA.y };
}

function scale(pos, u) {
    return { x: pos.x * u, y: pos.y * u };
}

export function limit(pos, u) {
    const myNorm = norm(pos);
    if (myNorm <= u) {
        return pos;
    } else {
        return scale(pos, u / myNorm);
    }
}

export function rotate(vector, angle) {
    return {
        x: vector.x * Math.cos(angle) - vector.y * Math.sin(angle),
        y: vector.x * Math.sin(angle) + vector.y * Math.cos(angle),
    };
}