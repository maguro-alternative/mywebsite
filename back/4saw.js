
window.addEventListener('DOMContentLoaded', () => {
    new Main();
  });
  
  class Main {
  
    constructor() {
      this.stageCalcInside = new createjs.Stage(document.createElement('canvas'));
      this.stageCalcInside.autoClear = false;
  
      const waveShape = new WaveShape();
      this.stageCalcInside.addChild(waveShape);
  
      this.stageOverlay = new createjs.Stage('canvasOverlay');
  
      this.spotLightShape = new SpotLightShape();
      this.stageOverlay.addChild(this.spotLightShape);
  
      createjs.Ticker.timingMode = createjs.Ticker.RAF;
      createjs.Ticker.on('tick', this.handleTick, this);
  
      this.handleResize();
      window.addEventListener('resize', () => {
        this.handleResize();
      });
    }
    handleTick() {
      const context = this.stageCalcInside.canvas.getContext('2d');
      context.fillStyle = `rgba(0, 0, 0, 0.2)`;
      context.fillRect(
        0,
        0,
        this.stageCalcInside.canvas.width,
        this.stageCalcInside.canvas.height);
  
      this.stageCalcInside.update();
  
      this.spotLightShape.drawContents(innerWidth, innerHeight);
      this.stageOverlay.update();
  
      const context2 = this.stageOverlay.canvas.getContext('2d');
      context2.globalCompositeOperation = 'lighter';
      context2.drawImage(this.stageCalcInside.canvas, 0, 0);
    }
  
    handleResize() {
      this.stageCalcInside.canvas.width = innerWidth;
      this.stageCalcInside.canvas.height = innerHeight;
  
      this.stageOverlay.canvas.width = innerWidth;
      this.stageOverlay.canvas.height = innerHeight;
    }
}