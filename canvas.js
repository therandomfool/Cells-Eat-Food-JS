
export const canvas = document.getElementById("canvas");
export const ctx = canvas.getContext("2d");

function adjustCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

adjustCanvas();

window.addEventListener("resize", adjustCanvas);

export function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}