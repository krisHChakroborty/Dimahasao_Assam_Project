$(document).ready(function() {
    $(".white").click(function() {
        $("#changeBackground").css("background-color", "antiquewhite");
        $("#changeBackground").css("background", "none");
        $(".text_black").css("color", "black");
        $(".border_nav").css("background", "skyblue");
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
        $("#changeBackground").css("background", "#0013f5");
        $("#changeBackground").css("border", "black");
        $(".text_black").css("color", "white");
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

