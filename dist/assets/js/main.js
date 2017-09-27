'use strict';
// const containers = document.getElementsByClassName("container");
// const firstContainer = containers[0];
// firstContainer.style.border = "1px solid black";
// firstContainer.style.margin = "10px";
// const popular = document.getElementsByClassName("popular-post");
// const popularArr = [].slice.call(popular);
// popularArr.forEach((elem)=>{
//     border(elem);
// })
// let border = function(el){
//     el.style.border = "1px solid black";
//     console.log("border?")
// }
// const header = document.getElementById('header');
// console.log(header);
// const func = function(){
//     console.log("Dich");
// }
// func();
// func();
// func();
// const func2 = function(a,b){
//     return a+b
// }
// let number = func2(2,3);
// console.log(number);

var modal = document.getElementsByClassName("modal");
var modalArr = [].slice.call(modal); //нарезаем блок modal

modalArr.forEach(function (elem) {
    //для каждого элемента modalArr выделяем элементы
    var elemsArr = elem.childNodes; // забиваем в elemsArr дочерние элементы modalArr
    var button = elem.childNodes[0]; // выводим в button первый дочерний элемент
    var text = elem.childNodes[1]; // выводим в text второй дочерний элемент
    // console.log(text,button);

    button.addEventListener('click', function (e) {
        var bool = text.classList.contains('close');
        if (bool === false) {
            // text.style.display = 'none'; // при кдике на кнопку для блока tetx применяется стайл с display none
            text.classList.add('close');
            setTimeout(function () {
                text.style.display = 'none';
            }, 300); //classList обращение к блоку и вывод в массив
        } else {
            text.style.display = 'block';
            setTimeout(function () {
                text.classList.remove('close');
            }, 10);
        }
        // console.log(bool);
        // console.log('open');
        // text.style.display = 'none'; // при кдике на кнопку для блока tetx применяется стайл с display none
    }); //addEventListener - обработчик событий ((hover(mouseover)) при наведении на кнопку)
});

/*
1 найти кнопку в наших модалках
2 обработать клик по кнопке
3 это скрыть элемент
4 сделать проверку, если элемент скрыт, открыть его
 */

var Arr = ['hello', 'hi', 'holla', 'text', 'title', 'string'];

var List = document.getElementById('list');
console.log(Arr.length);
List.innerHTML = "List have " + Arr.length + " elements";
Arr.forEach(function (elem) {
    var li = document.createElement("li");
    li.innerHTML = elem;
    List.appendChild(li);
    // console.log(elem);
}); //Перебираем массив Arr и добавляем его значения в id list, попутно создавая в нем
// список li
var data = '';
var API = '7e64ebd4fced0c492de902d3d70ece4c';
var token = '17e10b3c781156ae61cab479a291b2181632ab1b98530a16d707510fc1cbf22d';
var FULL_PATH = 'https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&key=' + API + '&token=' + token;
console.log(FULL_PATH);

fetch(FULL_PATH).then(function (response) {
    //alert(response.headers.get(‘Content-Type’)); // application/json; charset=utf-8
    //alert(response.status); // 200
    return response.json();
}).then(function (json) {
    data = json;
});

setTimeout(function () {
    // console.log(data)
    // console.log(data.name)
    var a = document.createElement('a');
    var inner = data.name;
    var href = data.url;
    // console.log(a,inner, href);
    a.innerHTML = inner;
    // console.log(a)
    a.setAttribute("href", href);
    a.setAttribute('target', '_blank');
    console.log(a);
    List.appendChild(a);
}, 300);

var modalButton = document.getElementsByClassName('modal_button')[0];
// console.log(modalButton);
var modalWin = document.getElementsByClassName('modalWin')[0];
// console.log(modalWin);
var modalBack = document.getElementsByClassName('black-back')[0];
var modalClose = document.getElementsByClassName('modal-close')[0];

function modals(state) {
    modalBack.style.display = 'state';
    modalWin.style.display = 'state';
}

modalButton.addEventListener('click', function () {
    // console.log("click-click");
    // modalBack.style.display='block';
    // modalWin.style.display='block';
    modals("block");
});

modalClose.addEventListener('click', function () {
    // console.log("click-click");
    // modalBack.style.display='none';
    // modalWin.style.display='none';
    modals("none");
});

modalBack.addEventListener('click', function () {
    // console.log("click-click");
    // modalBack.style.display='none';
    // modalWin.style.display='none';
    modals("none");
});