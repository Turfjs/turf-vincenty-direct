# turf-vincenty-direct

[![build status](https://secure.travis-ci.org/Turfjs/turf-vincenty-direct.png)](http://travis-ci.org/Turfjs/turf-vincenty-direct)

turf vincenty direct module


### `turf.vincenty-direct(start, distance, bearing, units)`

Takes a Point and calculates the location of a destination point given a distance in degrees, radians, miles, or kilometers; and bearing in degrees. This uses the [Vincenty's Formulae](https://en.wikipedia.org/wiki/Vincenty%27s_formulae) to account for global curvature.

### Parameters

| parameter  | type               | description                            |
| ---------- | ------------------ | -------------------------------------- |
| `start`    | Feature\.\<Point\> | starting point                         |
| `distance` | Number             | distance from the starting point       |
| `bearing`  | Number             | ranging from -180 to 180               |
| `units`    | String             | miles, kilometers, degrees, or radians |


### Example

```js
var point = {
  "type": "Feature",
  "properties": {
    "marker-color": "#0f0"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-75.343, 39.984]
  }
};
var distance = 50;
var bearing = 90;
var units = 'miles';

var destination = turf.destination(point, distance, bearing, units);
destination.properties['marker-color'] = '#f00';

var result = {
  "type": "FeatureCollection",
  "features": [point, destination]
};

//=result
```


**Returns** `Feature.<Point>`, destination point

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-vincenty-direct
```

## Tests

```sh
$ npm test
```


