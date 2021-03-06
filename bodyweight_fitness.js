 function scriptLoader(path, callback)
        {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.async = true;
            script.src = path;
            script.onload = function(){
                if(typeof(callback) == "function")
                {
                    callback();
                }
            }
            try
            {
                var scriptOne = document.getElementsByTagName('script')[0];
                scriptOne.parentNode.insertBefore(script, scriptOne);
            }
            catch(e)
            {
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        }

scriptLoader('header.js');
scriptLoader('footer.js');

$("#T1").addClass("T_A_A1");
$("#T2").addClass("T_A_A2");
$("#T3").addClass("T_A_A3");
$("#T4").addClass("T_A_A4");

$("#left_arm").addClass("T_LA");
$("#right_arm").addClass("T_RA");

$(".movement_intro").before("<hr class=\"split_hr\">");
$(".movement_intro").after("<hr class=\"split_hr\">");
// $(".movement").after("<img class=\"decorative_border\" src=\"pictures/bottom_border.png\"><br><br><br>")

// show hide scroll_up
function hide_scroll_up() {
    $(".scroll_up").addClass("hide");
    clearInterval(button_hide_interval);
    button_hide_interval = setInterval(hide_scroll_up, 3000);
}
function show_scroll_up() {
    $(".scroll_up").removeClass("hide");
}
var button_hide_interval = setInterval(hide_scroll_up, 3000);
window.addEventListener('scroll', _.throttle(show_scroll_up, 300));



function reset_button_show_text(button, text) {
    $(".nav_topic").removeClass("focus");
    button.addClass("focus");
    $(".text_content").removeClass("show_text");
    text.addClass("show_text");
}


let btn_scroll_up = document.getElementById('btn_scroll_up');
function scroll_up() {
    window.location = "#scroll_up_mark";
}

btn_scroll_up.addEventListener('click', scroll_up);


//hr animation
var hrs = document.getElementsByTagName("hr");
function hr_show() {
    for(var i = 0; i < hrs.length; i++){
        if(window.scrollY + (window.innerHeight / 3) * 2 > hrs[i].offsetTop){
            hrs[i].classList.add("hr_show");
        }
    }
}


window.addEventListener('scroll', _.throttle(hr_show, 400));


//button switch



$("#interview").click(function(){
    reset_button_show_text($("#interview"), $("#interview_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#chest").click(function(){
    reset_button_show_text($("#chest"), $("#chest_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#arm").click(function(){
    reset_button_show_text($("#arm"), $("#arm_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#shoulder").click(function(){
    reset_button_show_text($("#shoulder"), $("#shoulder_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#back").click(function(){
    reset_button_show_text($("#back"), $("#back_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#leg").click(function(){
    reset_button_show_text($("#leg"), $("#leg_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#hip").click(function(){
    reset_button_show_text($("#hip"), $("#hip_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});
$("#core").click(function(){
    reset_button_show_text($("#core"), $("#core_content"));
    window.location = "#body";
    $("hr").removeClass("hr_show");
});



function switch_movement_option(movement_active, movement_content, option_active, option){
    movement_active.removeClass("movement_active");
    movement_content.addClass("movement_active");
    option_active.removeClass("option_active");
    option.addClass("option_active");
}


$(".beginner").click(function(){
    movement_active = $(this).closest('.movement').find('.movement_active');
    movement_content = $(this).closest('.movement').find('.beginner_content');
    option_active = $(this).closest('.movement_option').find('.option_active');
    option = $(this).closest('.movement_option').find('.beginner');
    switch_movement_option(movement_active, movement_content, option_active, option);
});
$(".intermediate").click(function(){
    movement_active = $(this).closest('.movement').find('.movement_active');
    movement_content = $(this).closest('.movement').find('.intermediate_content');
    option_active = $(this).closest('.movement_option').find('.option_active');
    option = $(this).closest('.movement_option').find('.intermediate');
    switch_movement_option(movement_active, movement_content, option_active, option);
});
$(".advanced").click(function(){
    movement_active = $(this).closest('.movement').find('.movement_active');
    movement_content = $(this).closest('.movement').find('.advanced_content');
    option_active = $(this).closest('.movement_option').find('.option_active');
    option = $(this).closest('.movement_option').find('.advanced');
    switch_movement_option(movement_active, movement_content, option_active, option);
});
$(".variation").click(function(){
    movement_active = $(this).closest('.movement').find('.movement_active');
    movement_content = $(this).closest('.movement').find('.variation_content');
    option_active = $(this).closest('.movement_option').find('.option_active');
    option = $(this).closest('.movement_option').find('.variation');
    switch_movement_option(movement_active, movement_content, option_active, option);
});