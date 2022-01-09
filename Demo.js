  g.setBgColor('#000000');
  g.clear(false);

  require('https://raw.githubusercontent.com/rozek/banglejs-2-fillring/main/fillRing.js');

  let ScreenWidth  = g.getWidth(),  CenterX = ScreenWidth/2;
  let ScreenHeight = g.getHeight(), CenterY = ScreenHeight/2;

  let outerRadius = Math.min(CenterX,CenterY) * 0.9;
  let innerRadius = outerRadius - 10;

  g.clear();

  g.setColor('#FFFF00');
  g.fillRing(CenterX,CenterY, outerRadius,innerRadius);
