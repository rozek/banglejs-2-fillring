;(function () {
  if (Graphics.prototype.fillRing == null) {
    Graphics.prototype.fillRing = function fillRing (cx,cy, r1,r2) {
      let x,y;
      if (r1 < r2) { x = r1; r1 = r2; r2 = x; }

      let gfx = this || g;

      if (r1 <=  0)  { return gfx; }
      if (r1 === r2) { gfx.drawCircle(cx,cy, r1); return gfx; }
      if (r2 <=  0)  { gfx.fillCircle(cx,cy, r1); return gfx; }

    /**** generate unity circle ****/

      let sin = Math.sin, cos = Math.cos;
      let dPi = 2 * Math.PI/30;

      let RingPoly = [];

      for (let i = 0; i < 31; i++) {    // g.fillPoly supports <= 64 nodes only!
        RingPoly.push(sin(dPi*i),-cos(dPi*i));
      }
      RingPoly.push(RingPoly[0],RingPoly[1]);

    /**** expand unity circle to ring ****/

      for (let i = 2*32-2; i >= 0; i -= 2) {
        x = RingPoly[i]; y = RingPoly[i+1];
        RingPoly[i] = cx + r1*x; RingPoly[i+1] = cy + r1*y;
        RingPoly.push(cx + r2*x,cy + r2*y);
      }

    /**** fill polygon ****/

      gfx.fillPoly(RingPoly);

      return gfx;
    };
  }
})();
