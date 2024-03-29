'use strict';
/* Задачи:

1.	При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
2.	При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
3.	При помощи цикла for выведите чётные числа от 2 до 10 включительно
4.	Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
 	 Цикл, который нужно переписать:

 	 for (let i = 2; i <= 16; i++) {
 	     if (i % 2 === 0) {
 	         continue;
 	     } else {
 	         console.log(i);
 	     }
 	 }
5.	Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
*/

/*
Задачи*:
1.	Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив
const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

2.	Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
const data = [5, 10, 'Shopping', 20, 'Homework'];
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

3.	Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
*/


/*
Задачи**:
написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********

(Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС) */

