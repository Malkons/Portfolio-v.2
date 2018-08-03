$(document).ready(function () {
    // Set Up Home page
    $("#portfolio").hide();
    $("#contact").hide();
    $("#about").show();

    // About Button
    $("#btnAbout").on("click", function () {
        $("#portfolio").hide();
        $("#contact").hide();
        $("#about").show();
    });

    // Contact Button
    $("#btnContact").on("click", function () {
        $("#portfolio").hide();
        $("#contact").show();
        $("#about").hide();
    });
    
    // Portfolio Button
    $("#btnPortfolio").on("click", function () {
        $("#portfolio").show();
        $("#contact").hide();
        $("#about").hide();
    });
});