var CJMario = document.getElementById("CJMario");
CJMario.onclick = function(){
	window.location = "index.php";
}
var home = document.getElementById("home");
home.onclick = function(){
	window.location = "index.php";
}
var bodyweight_fitness = document.getElementById("bodyweight_fitness");
calisthenics.onclick = function(){
	window.location = "index.php?page=bodyweight_fitness";
}
var btn_Menu = document.getElementById("btn_Menu");
var Menu = document.getElementById("Menu");

var M = 0;

let container = $('#container');
let slideButton = document.getElementById('btn_Menu');
function SlideToggle() {
    if (M) {
    	M = 0;
    	$("body *").removeClass("hide_content");
    	$("#container *, .head *, #container, .head").css("z-index", "99");
    	$("#content_cover").removeClass("content_cover");
    	$("body *").removeClass("open_menu_body_left");
    	$("#container").removeClass("open_menu_width");
    	$(".threebar").removeClass("cross");
    }else{
    	M = 1;
    	navbar_menu_change();
    	$("#content_cover").addClass("content_cover");
    	$("#content_cover").click(SlideToggle);
    	$("body *:not(body, #container *, .head *, #container, .head, #content_cover)").addClass("hide_content");
    	$("#container *, .head *, #container, .head").css("z-index", "101");
    	$("body *:not(body, #container *, .head *, #container, .head, #content_cover)").addClass("open_menu_body_left");
    	$("#container").addClass("open_menu_width");
    	$(".threebar").addClass("cross");
    }
}
slideButton.addEventListener('click', SlideToggle);


//navbar chang css
function navbar_menu_change() {
	$(".head").removeClass("nav_change");
	$("#btn_Menu").removeClass("nav_change");
	$(".bar").removeClass("nav_mark_change");
	$("#CJMario").removeClass("nav_mark_change");
	$(".topic").removeClass("nav_change");
    $("#Menu").removeClass("nav_change");
}
