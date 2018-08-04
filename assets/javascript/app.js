$(document).ready(function () {
    // Set Up Home page
    $("#portfolio").hide();
    $("#contact").hide();
    $("#about").show();

    // About Button
    $("#btnAbout").on("click", function () {
        $("#about").fadeIn("slow", function () {
            // Animation complete
        });
        $("#portfolio").hide();
        $("#contact").hide();
    });

    // Contact Button
    $("#btnContact").on("click", function () {

        $("#contact").fadeIn("slow", function () {
            // Animation complete
        });
        $("#portfolio").hide();
        $("#about").hide();
    });

    // Portfolio Button
    $("#btnPortfolio").on("click", function () {
        $("#portfolio").fadeIn("slow", function () {
            // Animation complete
        });
        $("#about").hide();
        $("#contact").hide();
    });
});