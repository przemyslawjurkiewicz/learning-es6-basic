"use strict";

/*
Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, 
które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.
*/

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (prev, curr) {
    return prev + curr;
  }) / args.length);
};

average(1);
average(1, 3);
average(1, 3, 6, 6);
