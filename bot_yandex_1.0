// ==UserScript==
// @name         Bot_Yandex_1.0
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        yandex.ru/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementById("text");
let search = document.querySelectorAll("button.button")[0];
let keywords = ["Гобой","Саксофон","Как звучит альт","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"];
let keyword = keywords[getRandom(0,keywords.length)];
let i = 0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

if (search!=undefined){
    let timerId = setInterval(()=>{
        yandexInput.value += keyword[i++];
        if (i==keyword.length){
            clearInterval(timerId);
            document.querySelectorAll("button.button")[0].click();
        }
    },358);
}else{
    let links = document.links;
    let flag = true;
    let numPage = document.querySelector("span.pager__item_current_yes").innerText;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            links[i].removeAttribute('target');
            setTimeout(()=>links[i].click(),1139);
            flag=false;
            break;
        }
    }
    let scroll = setInterval (function () {window.scrollBy (0,32);}, 54);

    if(numPage=="10") location.href = "https://www.yandex.ru/";

    window.onscroll = function(){
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            let nextPage = document.querySelector("a.pager__item_kind_next");
            if(flag) setTimeout(()=>nextPage.click(),1532);
        }
    }
}
