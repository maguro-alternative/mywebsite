
class SpotLightShape extends createjs.Shape {

    constructor() {
      super();
    }
  
    drawContents(w, h) {
      this.graphics
        .clear()
        .beginFill(createjs.Graphics.getHSL(0, 0, 0))
        .drawRect(0, 0, w, h);
      {
        const dx = w * 1 / 3 + w / 10 * Math.sin(Date.now() / 4000);
        const dy = h * 1 / 3;
        const size = w / 2;
        this.graphics.beginRadialGradientFill([createjs.Graphics.getHSL(0, 0, 100, 0.30),
          createjs.Graphics.getHSL(0, 0, 0, 0)], [0.0, 1.0], dx, dy, 0, dx, dy, size)
          .drawCircle(dx, dy, size)
          .endFill();
      }
      {
        const dx = w * 3 / 4 + w / 15 * Math.cos(Date.now() / 10000);
        const dy = h * 2 / 3;
        const size = w / 3;
        this.graphics.beginRadialGradientFill([createjs.Graphics.getHSL(0, 0, 100, 0.10),
          createjs.Graphics.getHSL(0, 0, 0, 0)], [0.0, 1.0], dx, dy, 0, dx, dy, size)
          .drawCircle(dx, dy, size)
          .endFill();
      }
    }
}