# banglejs-2-fillring #

draws a filled ring on a Bangle.js 2

This module adds a method `fillring` for drawing filled circular rings to the global graphics context `g`.

![](Demo.png)

The new method has the signature

```
g.fillring(cx,cy, r1,r2);
```

with the following parameters:

* `cx` - x coordinate of the ring's center
* `cy` - y coordinate of the ring's center
* `r1` - outer ring radius
* `r2` - inner ring radius

It may be invoked as shown like a method of the global graphics context `g`

```
g.fillring(cx,cy, r1,r2);
```

or like a standalone function

```
fillring(cx,cy, r1,r2);
```

In the latter case, it uses `g` as graphics context.

The ring is drawn and filled with current foreground color.

## License ##

[MIT License](LICENSE.md)
