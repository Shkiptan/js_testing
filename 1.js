// 1. Вывести числа от 4 до 400 на экран.
var p = document.getElementById ('out');
 for (var i = 4; i<=400; i++) {
p.innerHTML+=i + ' ';

}




//2. Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

var two = document.getElementById ('two');
 for (var i = 4; i<=13; i=i+3) {
two.innerHTML+=i + ' ';

}

// 3. Вывести числа 654 653 652 до нуля.

var three = document.getElementById ('three');
 for (var i = 654; i>=0; i=i-1) {
three.innerHTML+=i + ' ';

}


// 4. Вывести все годы с 1983 до 2017.

var four = document.getElementById ('four');
 for (var i = 1983; i<=2017; i++) {
four.innerHTML+=i + ' ';

}




// 6. Вывести числа -4 -2 0 2 4 6 ...100. 

var four = document.getElementById ('four');
 for (var i = -6; i<=100; i=i+2) {
four.innerHTML+=i + ' ';

}

// 1. Массив [3, 6, 1, 13, 88, 43]. Вывести нулевой, третий элемент.

var one = [3, 6, 1, 13, 88, 43];
console.log (one [0], one [3]);

// function outArray () {
// 	var out = '';
// 	for (var i = 0; i<temp.length; i++) {
// 		if (temp[i]!=undefined) {
// 		out += i + ' --- ' + temp [i] + '<br>';
// 	}
// 	}
// 	document.getElementById ('out'). innerHTML = out;
// }



// 2. Массив ['Hi', "hello", 34, "prima"]. Вывести первый, последний элемент.

var hi = ['Hi', "hello", 34, "prima"];
console.log (hi[0], hi.length -1 );



// 3. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Вывести длину массива.

var he = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

console.log (he.length)

// 4. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
//Замените 3 элемент массива на строку 'new element'.

var che = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

che [3] = "new element";

console.log (che)


// 5. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
//Замените 2 и 4 элемент массива на числа 22 и 44.

var chi = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
chi [2] = 22;
chi [4] = 44;

console.log (chi)


// 6. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
//Создайте 10 член массива со значением 100.

var chu = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
chu [10] = 100;
console.log (chu);


// 7. Массив ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
//Создайте 12 член массива со значением 200. Выведите массив. Выведите 11 член массива.

var cha = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
cha [12] = 200;
console.log (cha);
console.log (cha [11]);

// 8. Дан массив var arr = [31, 24, 35, 47, 12]. Выведите arr[3], arr[60].

var arr = [31, 24, 35, 47, 12];
console.log (arr [3], arr [60]);

// 9. Дан массив var arr = [31, 24, 35, 47, 12]. 
//Выведите arr[f], где переменная f = 1, f=4, f=7 

// var shi = [31, 24, 35, 47, 12];

// function outArray () {
// var ef = '';
// for (var f = 1; f<=7; i=i+3) {
// 	ef += f + shi [f] + '<br>';
// }

// document.getElementById ('ef'). innerHTML = ef;
// }




// 10. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
// Выведите arr[i], где переменная i = 1,2,3,4,5.


var shu = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for (var i = 1; i<=5; i++)  {
console.log (shu [i]);
}


// 11. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43].
// Выведите arr[i], где переменная i - вводит пользователь.



// 12. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
//Выведите массив на страницу через пробел.

var ku = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
var out = document.getElementById ('kru');
for (var i = 0; i<ku.length; i++) {		
	out.innerHTML += i + '<br>';
}	




// 13. Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. 
//Выведите массив в обратном порядке на страницу через пробел.


