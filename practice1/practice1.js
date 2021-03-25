//1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
//2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//    34, 12, 66, 90, 87. Старайтесь використовувати різні оператори. Example: 88 = (16 / 2) * 11
let a1 = 1;
let a2 = 2;
let a3 = 8;
let a4 = 11;
let a5 = 46;

console.log( a5 / a2 + a4 );
console.log( a4 + a2 -a1 );
console.log(( a3 - a2 ) * a4 );
console.log( a3 * a4 +a2 );
console.log( a3 * a4 - a1 );
//3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//    5 % 3, 3 % 5, 5 + '3', '5' - 3, 75 + 'кг'
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 +'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

//4. Напищіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//Значееня площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s)

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//    результат поместите в переменную v.
let heightC = 10;
let dC = 4;
const pi = 3.14;
let rC = dC/2;
let v = pi * rC**2 * heightC;
console.log(v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = (n**2 + m**2)**0.5;
console.log(k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
let str0 = 'Hello, world';
document.write(str0);
alert(str0);
console.log(str0);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
alert('Kravets Bohdan\n31\nwalking');

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//    Вывести в документ содержимое переменной concatenation спомощью document.write
let str1 = 'Кто '
let str2 = 'ты '
let str3 = 'такой?'
let concatenation = str1 + str2 + str3;
document.write(`<p> ${concatenation} </p>`);

//10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str4 = "20";
let a = 5;
document.write(str4 + a + "<br/>");
document.write(str4 - a + "<br/>");
document.write(str4 * "2" + "<br/>");
document.write(str4 / 2 + "<br/>");
//11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
console.log(parseInt("3.14"));
console.log(parseInt("-7.875"));
console.log(parseInt("435"));
console.log(parseInt("Вася"));

//12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//let str = prompt("Enter something", "ho-ho")
//console.log(str);
let str5 = prompt('Enter something', 'ho-ho');

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let num1 = +prompt('Enter first number:');
let num2 = +prompt('Enter second number:');
let res = num1 + num2;
alert(res);

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let firstName = prompt("Введите ваше имя:");
let secondName = prompt('Введите вашу фамилию:');
let age = prompt('Введите ваш возраст:');
alert(`Доброго вечера ${firstName} ${secondName}, мои поздравления что вам ${age}`);

//=====================
//======ДОП============
//=====================

//1. Три різних числа вводяться через prompt().
//    За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let n1 = prompt("Enter first number:");
let n2 = prompt("Enter second number:");
let n3 = prompt('Enter third number:');

if(n1 <= n2 && n2 <= n3) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
}
else if(n1 < n3 && n3 < n2) {
    console.log(n1);
    console.log(n3);
    console.log(n2);
}
else if(n1 <= n2 && n1 >= n3) {
    console.log(n3);
    console.log(n1);
    console.log(n2);
}
else if(n1 > n2  && n2 > n3)  {
    console.log(n3);
    console.log(n2);
    console.log(n1);
}
else if(n1 > n2  && n1 < n3) {
    console.log(n2);
    console.log(n1);
    console.log(n3);
}
else {
    console.log(n2);
    console.log(n3);
    console.log(n1);
}

//2. Все параматры получаем с клавиатуры!!!!
//    Имитируем поведение пешехода на перекстке.
//    Если светофор зеленый - вывести "иди".
//    Если светофор желтый - вывести "подожди".
//    Если светофор красный - вывести "стой".
//    Если светофор в аварийном режиме вывести "делай что хочешь"!
let color = prompt("Enter color:");
switch (color) {
    case 'green':
        alert('You can go');
        break;
    case 'yellow':
        alert('Please wait');
        break;
    case 'red':
        alert('Stop')
        break;
    default:
        alert('You can do whatever you want')
}

//3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
//Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//    Улучшаем предыдущее задание.
//    Если светофор зеленый и машин нет - вывести "иди".
//    Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//    Если светофор желтый и машины есть - вывести "жди".
//    Если светофор желтый и машин нет - вывести "все рано жди".
//    Если светофор красный и машин нет- вывести "стой все рано".
//    Если светофор красный - и машины есть вывести "стой и жди".
//    Если светофор в аварийном режиме вывести "делай что хочешь"!

let col = prompt("Enter color:");
let isRoadClear = confirm('Is the road clear');

switch (col) {
    case 'green':
        if(isRoadClear) {
            alert('Go');
        } else {
            alert('Wait until violators pass');
        }
        break;
    case 'yellow':
        if(isRoadClear) {
            alert('Wait anyway');
        } else {
            alert('Wait');
        }
        break;
    case 'red':
        if(isRoadClear) {
            alert('Stop anyway');
        } else {
            alert('Stop and wait');
        }
        break;
    default:
        alert('You can do whatever you want');
}
