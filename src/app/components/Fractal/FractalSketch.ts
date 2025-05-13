import type { Sketch } from "react-p5-wrapper";
import p5 from "p5";

const sketch: Sketch = (p: p5) => {
  let radius = 100;
  let depth = 4;
  let angleOffset = 0;
  let mergeFactor = 0;
  let merging = true;

  p.setup = () => {
    p.createCanvas(p.windowWidth, 400);
    p.noFill();
    p.stroke(180, 255, 200);
    p.frameRate(30);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, 400);
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    angleOffset += 0.01;

    if (merging) {
      mergeFactor += 1.5;
      if (mergeFactor > 100) merging = false;
    } else {
      mergeFactor -= 1.5;
      if (mergeFactor < -100) merging = true;
    }

    const leftOffset = -mergeFactor;
    const rightOffset = mergeFactor;

    drawFractal(leftOffset, 0, radius, depth, angleOffset);
    drawFractal(rightOffset, 0, radius, depth, -angleOffset);
  };

  function drawFractal(x: number, y: number, r: number, d: number, a: number) {
    if (d === 0) return;
    p.ellipse(x, y, r * 2);

    const count = 6;
    for (let i = 0; i < count; i++) {
      const angle = (p.TWO_PI / count) * i + a;
      const newX = x + p.cos(angle) * r;
      const newY = y + p.sin(angle) * r;
      drawFractal(newX, newY, r / 2, d - 1, a);
    }
  }
};

export default sketch;
