/*Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. Przykładowo:

multiply(2, 5) // 10
multiply(6, 6) // 36

Zadanie wydaje się być proste, ale co jeśli użytkownik poda na wejściu tylko jedną wartość? Przykładowo:

multiply(5) // ?

Chcemy, aby wynik takiego wywołania był również prawidłowy - możesz założyć, 
że jeśli użytkownik nie poda któregoś z parametrów, ma on zostać zastąpiony 1. 
Nie wolno korzystać z instrukcji warunkowych! 
Funkcję stwórz za pomocą arrow function.*/

const multiply = (x, y = 1) => console.log(x * y);

multiply(2, 5);
multiply(6, 6);
multiply(5);