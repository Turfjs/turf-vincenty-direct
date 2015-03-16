# turf-vincenty-direct

[![Build Status](https://travis-ci.org/Turfjs/turf-vincenty-direct.svg?branch=master)](https://travis-ci.org/Turfjs/turf-vincenty-direct)

turf vincenty direct module


### `turf.vincety-direct(start, distance, bearing, units)`
Vincenty's direct formula computes the location of a point which is a given distance and direction from another point.

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

var destination = turf.vincenty-direct(point1, distance, bearing);
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
