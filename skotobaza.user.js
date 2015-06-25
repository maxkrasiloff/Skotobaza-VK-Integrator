// ==UserScript==
// @name         Skotobaza
// @namespace    http://your.homepage/
// @version      0.1.1
// @description  enter something useful
// @author       You
// @match        https://vk.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.3.min.js
// ==/UserScript==

//Personal Page
var URLa = $("#page_wall_header").attr("href");
URLa = URLa+"";
URLa = URLa.replace('/wall', 'http://skotobaza.org/user/id');
$("#profile_short").append('<a href="'+URLa+'" target="_blank"><div style="text-align: center; background-color: #ddddff; color: #000; border: 2px solid #aaaaff; padding: 5px; font-size: 18px; border-radius: 5px;">Ссыкла на скотобазу</div></a>');
//User Friends
 allPeople = $('.user_block').length;
for (i = 0; i < allPeople; i++) {
    uid = $(".user_block:eq("+i+")").attr("id")+"";
    uid = uid.replace('user_block','');
    $(".user_block:eq("+i+")").append('<a href="http://skotobaza.org/user/id'+uid+'" target="_blank">Скотобаза</a>');
}
