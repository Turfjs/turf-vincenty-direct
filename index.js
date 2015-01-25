//http://en.wikipedia.org/wiki/Vincenty%27s_formulae
//https://gist.github.com/mathiasbynens/354587
var point = require('turf-point');

module.exports = function (point1, bearing, distance) {
 var coordinates1 = point1.geometry.coordinates;
 var a = 6378137,
     b = 6356752.3142,
     f = 1 / 298.257223563, // WGS-84 ellipsiod
     s = distance,
     alpha1 = toRad(bearing),
     sinAlpha1 = Math.sin(alpha1),
     cosAlpha1 = Math.cos(alpha1),
     tanU1 = (1 - f) * Math.tan(toRad(coordinates1[1])),
     cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)), sinU1 = tanU1 * cosU1,
     sigma1 = Math.atan2(tanU1, cosAlpha1),
     sinAlpha = cosU1 * sinAlpha1,
     cosSqAlpha = 1 - sinAlpha * sinAlpha,
     uSq = cosSqAlpha * (a * a - b * b) / (b * b),
     A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq))),
     B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq))),
     sigma = s / (b * A),
     sigmaP = 2 * Math.PI;
 while (Math.abs(sigma - sigmaP) > 1e-12) {
  var cos2SigmaM = Math.cos(2 * sigma1 + sigma),
      sinSigma = Math.sin(sigma),
      cosSigma = Math.cos(sigma),
      deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
  sigmaP = sigma;
  sigma = s / (b * A) + deltaSigma;
 };
 var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1,
     y2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp)),
     lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1),
     C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha)),
     L = lambda - (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM))),
     revAz = Math.atan2(sinAlpha, -tmp); // final bearing
 return point([toDeg(y2), coordinates1[0] + toDeg(L)]);
};
function toRad(degree) {
 return degree * Math.PI / 180;
};
function toDeg(radian) {
 return radian * 180 / Math.PI;
};