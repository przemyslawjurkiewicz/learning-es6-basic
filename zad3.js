/*
Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, 
które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:

average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4

Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.
*/

const average = (...args) => console.log(args.reduce((prev, curr) => prev + curr)/args.length);

average(1);
average(1, 3);
average(1, 3, 6, 6);
