"use strict";

/*
Stwórz tablicę z ocenami 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], 

a następnie w umiejętny sposób przekaż oceny do funkcji average tak, 
aby otrzymać wynik. Skorzystaj z operatora spread!
*/

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (prev, curr) {
    return prev + curr;
  }) / args.length);
};

average.apply(undefined, grades);
