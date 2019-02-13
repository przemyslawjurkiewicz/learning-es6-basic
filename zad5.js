/*
Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych: 

[1, 4, 'Iwona', false, 'Nowak']. 

Twoim zadaniem jest skorzystanie z destrukturyzacji w celu 
wyciągnięcia z tablicy zmiennych firstname oraz lastname. 
*/

const array = [1, 4, 'Iwona', false, 'Nowak'];

const [firstName, secondName] = array.filter(arg => typeof arg === 'string')

console.log(`First Name: ${firstName}\nSecond Name: ${secondName}`);