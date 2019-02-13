'use strict';

/*Połączenie dwóch stringów przy użyciu operatora + jest bardzo łatwym zadaniem. 
Innym sposobem jest użycie metody concat albo join, ale co jeśli nie moglibyśmy skorzystać z żadnej z tych opcji? 
Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, 
a następnie połączenie ich metodą inną niż wymienione powyżej.*/

var sayHallo = function sayHallo() {
  var what = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  return console.log('Hello ' + what + ' !');
};

sayHallo();
