/*
Stwórz tablicę z ocenami 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], 

a następnie w umiejętny sposób przekaż oceny do funkcji average tak, 
aby otrzymać wynik. Skorzystaj z operatora spread!
*/

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => console.log(args.reduce((prev, curr) => prev + curr) / args.length);

average(...grades);