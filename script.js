$(document).ready(function() {
    $(".white").click(function() {
        $("#changeBackground").css("background-color", "antiquewhite");
        $("#changeBackground").css("background", "none");
        $(".text_black").css("color", "black");
        $(".border_nav").css("background", "rgb(3, 164, 228)");
        
    });
});


$(document).ready(function() {
    $(".skyblue").click(function() {
        $("#changeBackground").css("background", "rgb(182, 221, 255)");
        // $("#changeBackground").css("background", "none");
        $(".text_black").css("color", "black");
        $(".border_nav").css("background", "black");
    });
});


$(document).ready(function() {
    $(".blue").click(function() {
        $("#changeBackground").css("background", "rgb(61, 61, 175)");
        $(".border_nav").css("color", "rgb(25, 25, 224)");
        $(".text_black").css("color", "dark");
    });
});

$(document).ready(function() {
    $(".black").click(function() {
        $("#changeBackground").css("background", "black");
        // $("#changeBackground").css("background", "none");
        $(".text_black").css("color", "white");
        $(".border_nav").css("background", "#262626");
    });
});

