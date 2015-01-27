# turf-vincenty-direct

[![Build Status](https://travis-ci.org/turfjs/turf-vincenty-direct.svg?branch=master)](https://travis-ci.org/turfjs/turf-vincenty-direct)

turf vincenty direct module


### `turf.vincety-direct(start, distance, bearing)`
Vincenty's direct formula computes the location of a point which is a given distance and direction from another point.

### Parameters

| parameter  | type   | description                            |
| ---------- | ------ | -------------------------------------- |
| `start`    | Point  | a Point feature at the starting point  |
| `distance` | Number | distance from the starting point       |
| `bearing`  | Number | ranging from -180 to 180               |


### Example

```js
var point1 = turf.point([-75.343, 39.984]);
var distance = 50;
var bearing = 90;

var destination = turf.vincenty-direct(point1, distance, bearing);

var result = turf.featurecollection([point1, destination]);

//=result
```


**Returns** `Point`, a Point feature at the destination

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-vincenty-direct
```

## Tests

```sh
$ npm test
```
