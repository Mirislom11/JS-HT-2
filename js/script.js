//  Задание возведение в степень  создаются две переменнык в которрые вводятся данные  
// 1) число = число не может быть равон NaN и не может быть 0 ;
//  2) степень=если равон  NaN или 0 то должно по умолчанию быть 2 ;
//  При помощи цикда и арифметики. Вы дожны возводить в степень и результат вывести в модальное окно 

// Например:
//  число=5
//  степень = равон 3
//  ( 5 * 5 * 5) 
//  ответ =125

// let a = +prompt("Введите число");

// if( a == NaN || a == 0) {
//     alert("Вы не ввели число");
//     // break;
// }

// let b = +prompt("Ведите степень");

// if( b == 0 || b==NaN){
//     b==2;
//     // break;
// }

// sum = 1;

// for(let i = 0; i < b; i++ ) {
//     sum *=a;
  
// }

// alert("Ответ = " + sum);





// Задание лестница  создаются три переменные в которые вводятся данные 

// 1) Количество = если Количество равно NaN то должно по умолчанию быть 5 и колтчество ступень не может быть 0 , проверка продолжаться пока не придет верный результат ;

// 2) символ отступов = символ отступов не может быть пустым , проверка будет продолжаться пока не придет верный результат ;

// 3) конечный символ = конечный символ не может быть пустым  , проверка будет продолжаться пока не придет верный результат ;


  // При помощи цикла и склеивания вы должны создать лестницу все ступени выводятся в консоль разработчика 

  // Например :
    // переменная количество = 5 
    // переменная количество равно = - 
    // переменная конечный символ = *

    // результат:
    // *
    // -*
    // --*
    // ---*
    // ----*
    // -----*

    // let amount = +prompt("Введите кол-во  ступенек");
    // let otstup = prompt("Введите символ отступов");
    // let symbol = prompt("Введите  конечный  символ");

    // for(let i=0; i<amount; i++){
    //     if(i==0){
    //         symbol=symbol;
    //     } else{
    //         symbol = otstup + symbol; 
    //     }
    //     console.log(symbol);
    // }

    // Задание рандомные примеры
    // Пользователь вводит колличество решаемых им примеров и фуекции пользоватедю отдают рандомные числа и рандомные знаки для решаемых примеров 
    // После примера отдается сообщение : 
    // Ваш ответ вернный -2   
    // или 
    // ваш ответ неверный -2! првильный ответ -3!


    // function random( min , max ){
    //  return Math.floor(Math.random() * (max-min) + min);
    // }

    // let amount = +prompt("Введите количество примеров");

    // for(let i=0; i < amount; i++ ){
    //     let num1 = random(1 , 10);
    //     let num2 = random(1 , 10);
    //     let symbol = random(1 , 5);
    //     let example;
    //     if(symbol==1){
    //       example = num1 + num2;
    //       symbol = "+";  
    //     } else if (symbol==2){
    //         example = num1 -num2;
    //         symbol = "-";
    //     } else if(symbol==3){
    //         example = num1 * num2;
    //         symbol = "*";
    //     } else if(symbol==4){
    //         example = num1 / num2;
    //         symbol = "/";
    //     }
    //     let answer = +prompt(num1 + symbol + num2 );

    //     alert( example==answer ? " ваш ответ верный " + answer : " ваш ответ неверный " + answer + " правильный ответ " + example);
    // }








// Задание : (Возраст)
// Пользователь вводит свое имя , год рождения и вводит ныненшний год 
// Функция принимает параметры и отдает строку 
// Например :
// Имя Иван , год рождения 1992, нынешний год 2020 функция отжает строку :
// Иван , Ваш возраст 28

// let name = prompt("Введите ваше имя");
// let birth = +prompt("Введите год рождения");
// let year = +prompt("Введите нынешний год");

// function info( info1, info, info3){

//     return alert(" Ваше имя " + name + " Ваш возраст " + (year-birth) );

// }

// console.log(info(name, birth, year));
