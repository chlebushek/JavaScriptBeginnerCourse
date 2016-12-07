//Барканова Ангелина K3121
// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
function getFieldValues (data, value){
    var output=[];
    for (var i=0; i<data.length; i++){
        output[i]=data[i][value];
    }
    for (i = 0; i<(output.length-1); i++){
        for(var j=0; j<(output.length-1); j++){
            if (output[j]>output[j+1]){
                var o = output[j];
                output[j]=output[j+1];
                output[j+1]=o;
            }
        }
    }
    return output;
}
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {/* Проверка на чётность */
    var c;
    var y=x;
    if y%2 == 0 {
        ch=true;
    }
    else{
        c=false;
    }
function filter(data, isEven){
    var output=[];
     for (var i=0; i<data.length; i++){
        isEven(data[i]);
        if c=true {
            for(var j=0;j++){
            output[j]=data[i];
            }
        }
    }
        return output;
    }
}
console.log(filter(numbers, isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

var IpAddress = '10.223.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];