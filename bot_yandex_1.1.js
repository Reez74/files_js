// ==UserScript==
// @name         Bot_Yandex_1.1
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let yandexInput = document.getElementById("text");
let search = document.querySelectorAll("button.button")[0];
let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"],
    "crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков в Москве","Заказать барабанщиков в Москве"]
};
let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];
let i = 0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (search!=undefined){
    document.cookie = "site="+site;
}else{
    site = getCookie("site");
}

if (search!=undefined){
    let timerId = setInterval(()=>{
        yandexInput.value += keyword[i++];
        if (i==keyword.length){
            clearInterval(timerId);
            document.querySelectorAll("button.button")[0].click();
        }
    },358);
}else if (location.hostname == "yandex.ru"){
    let links = document.links;
    let flag = true;
    let numPage = document.querySelector("span.pager__item_current_yes").innerText;
    for(let i=0; i<links.length; i++){
		let link = links[i];
        if(link.href.indexOf(site) != -1){
            link.removeAttribute('target');
            setTimeout(()=>link.click(),1139);
            flag=false;
            break;
        }
    }
    let scroll = setInterval (function () {window.scrollBy (0,32);}, 54);
    if(numPage=="10") location.href = "https://www.yandex.ru/";
    let nextPage = document.querySelector("a.pager__item_kind_next");
    if(flag) setTimeout(()=>nextPage.click(),1532);
}else{
    if (getRandom(0,100)>=80){
        location.href = "https://www.yandex.ru/";
    }else{
        let links = document.links;
        let scroll = setInterval (function () {window.scrollBy (0,13);}, 162);
        setInterval(()=>{
            let index = getRandom(0,links.length);
            console.log("Проверяю ссылку: "+links[index]);
            if(links[index].href.indexOf(location.hostname) != -1){
                links[index].click();
            }
        },5000);
    }
}
