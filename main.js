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


function block_appear() {
    var appear1 = document.getElementById("appear1");
    if (window.scrollY + ((window.innerHeight/4) * 3)  > appear1.offsetTop) {
        $("#appear1").removeClass("disappear");
        $("#appear1").addClass("appear");
    }
    var appear2 = document.getElementById("appear2");
    if (window.scrollY + ((window.innerHeight/4) * 3) > appear2.offsetTop) {
        $("#appear2").removeClass("disappear");
        $("#appear2").addClass("appear");
    }
    var appear3 = document.getElementById("appear3");
    if (window.scrollY + ((window.innerHeight/4) * 3) > appear3.offsetTop) {
        $("#appear3").removeClass("disappear");
        $("#appear3").addClass("appear");
    }
}

window.addEventListener('scroll', _.throttle(block_appear, 400));


//navbar chang css
$(".head").addClass("nav_change");
$("#btn_Menu").addClass("nav_change");
$(".bar").addClass("nav_mark_change");
$("#CJMario").addClass("nav_mark_change");
$(".topic").addClass("nav_change");
$("#Menu").addClass("nav_change");

function navbar_change() {
    if (window.scrollY < (window.innerHeight/10)) {
        $(".head").addClass("nav_change");
        $("#btn_Menu").addClass("nav_change");
        $(".bar").addClass("nav_mark_change");
        $("#CJMario").addClass("nav_mark_change");
        $(".topic").addClass("nav_change");
        $("#Menu").addClass("nav_change");
    }else{
        $(".head").removeClass("nav_change");
        $("#btn_Menu").removeClass("nav_change");
        $(".bar").removeClass("nav_mark_change");
        $("#CJMario").removeClass("nav_mark_change");
        $(".topic").removeClass("nav_change");
        $("#Menu").removeClass("nav_change");
    }
}


window.addEventListener('scroll', _.throttle(navbar_change, 400));