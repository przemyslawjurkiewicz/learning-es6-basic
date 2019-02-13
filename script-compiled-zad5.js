'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych: 

[1, 4, 'Iwona', false, 'Nowak']. 

Twoim zadaniem jest skorzystanie z destrukturyzacji w celu 
wyciągnięcia z tablicy zmiennych firstname oraz lastname. 
*/

var array = [1, 4, 'Iwona', false, 'Nowak'];

var _array$filter = array.filter(function (arg) {
  return typeof arg === 'string';
}),
    _array$filter2 = _slicedToArray(_array$filter, 2),
    firstName = _array$filter2[0],
    secondName = _array$filter2[1];

console.log('First Name: ' + firstName + '\nSecond Name: ' + secondName);
