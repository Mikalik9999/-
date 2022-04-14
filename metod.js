//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
//function camelize(str) {
//    return str
//        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//        .map(
//            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//           // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//        )
//        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//}
//Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//    ищет в нём элементы между a и b и отдаёт массив этих элементов.
//    Функция должна возвращать новый массив и не изменять исходный.
//const filterRange = (arr, a, b) => {
//     arr = prompt('Введите массив');
//     a = prompt('Введите первую');
//    b = prompt('Введите вторую');
//    alert (arr.slice(a,b))
//    alert (arr)
//}
//filterRange();
//Напишите функцию filterRangeInPlace(arr, a, b),
//    которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
//    То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//    Функция должна изменять принимаемый массив и ничего не возвращать.
//let filterRangeInPlace =(arr, a, b) => {
//   let remove = arr.splice (a,b)
//    arr = remove ;
//    alert (arr);
//}
//let arr = [5, 3, 8, 1, 6, 7];
//filterRangeInPlace(arr, 0, 3);

//Сортировать в порядке по убыванию
//СПРОСИТЬ У АНДРЕЯ
//function compareNumeric(a, b) {
//    if (a < b) return 1;
//    if (a === b) return 0;
//    if (a > b) return -1;
//}
//let arr = [ 5, 2, 1, -10, 8 ];
//arr.sort(compareNumeric);
//alert(arr);  // 1, 2, 15
//Скопировать и отсортировать массив
//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
 //   Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//const copySorted = (arr) => {
//    alert (arr2);
//}
//let arr = [ 'Вадим', 'Настя', 'Артур', 'Дима'];
//let arr2 = arr.slice(0,5);
//arr2.sort();
//copySorted()
//alert(arr);
//Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
//    Задание состоит из двух частей.
//    Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
//в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
//    Метод должен понимать плюс + и минус -.
//Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
//    Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
//    Например, давайте добавим умножение *, деление / и возведение в степень **:
//function Calculator() {
 //   this.methods = {
 //       "-": (a, b) => a - b,
 //       "+": (a, b) => a + b
 //   };
 //   this.calculate = function(str) {
  //      let split = str.split(' '),
  //          a = +split[0],
  //          op = split[1],
  //          b = +split[2]
//        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
  //          return NaN;
  //      }
  //      return this.methods[op](a, b);
    //}
//
   // this.addMethod = function(name, func) {
   //     this.methods[name] = func;
   // };
//}
//Трансформировать в массив имён
//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };
//let users = [ vasya.name, petya.name, masha.name ];
//let names = users.join('; ')
//alert(names);
//У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//    Напишите код, который создаст ещё один массив объектов с параметрами id и fullName,
 //   где fullName – состоит из name и surname.
//let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//let petya = { name: "Петя", surname: "Иванов", id: 2 };
//let masha = { name: "Маша", surname: "Петрова", id: 3 };
//let users = [ vasya, petya, masha ];
//let usersMapped = users.map(user => ({
//    fullName: `${user.name} ${user.surname}`,
//    id: user.id
//}));
//alert( usersMapped[0].fullName ); // Вася Пупкин
//
//Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
//
// Например:
//
// let vasya = { name: "Вася", age: 25 };
 //let petya = { name: "Петя", age: 30 };
 //let masha = { name: "Маша", age: 28 };
//let arr = [ vasya, petya, masha ];
//function sortByAge(arr) {
//    arr.sort((a, b) => a.age > b.age ? 1 : -1);
//}
//sortByAge(arr);
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя
//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
//function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
//
// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);
//Напишите функцию getAverageAge(users), которая принимает массив объектов
// со свойством age и возвращает средний возраст.
//  Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 29 };
//let arr = [ vasya.age, petya.age, masha.age ];
//let summa = arr.reduce((sum,current) => sum+current,0);
//let numb = arr.length;
//let result = (+summa / +numb)
//alert(result);