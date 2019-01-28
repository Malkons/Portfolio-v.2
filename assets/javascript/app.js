$(document).ready(function () {
    // Set Up Home page
    $("#portfolio").hide();
    $("#contact").hide();
    $("#about").show();
    $("#skills").show();
    $("#workexp").show();
    $("#gamesplay").show();
    $("#scouts").show();
    $("#art").show();

    // About Button
    $("#btnAbout").on("click", function () {
        $("#about").fadeIn("slow", function () {
            }); // Animation complete
        $("#skills").fadeIn("slow", function (){ 
            }); // Animation complete  
        $("#workexp").fadeIn("slow", function (){ 
            }); // Animation complete  
        $("#gamesplay").fadeIn("slow", function (){ 
            }); // Animation complete 
        $("#scouts").fadeIn("slow", function (){ 
            }); // Animation complete 
        $("#art").fadeIn("slow", function (){ 
            }); // Animation complete 
        $("#portfolio").hide();
        $("#contact").hide();
    });

    // Contact Button
    $("#btnContact").on("click", function () {
        $("#contact").fadeIn("slow", function () {
             }); // Animation complete
        $("#portfolio").hide();
        $("#about").hide();
        $("#skills").hide();
        $("#workexp").hide();
        $("#gamesplay").hide();
        $("#scouts").hide();
        $("#art").hide();
        
    });

    // Portfolio Button
    $("#btnPortfolio").on("click", function () {
        $("#portfolio").fadeIn("slow", function () {
            }); // Animation complete
        $("#about").hide();
        $("#skills").hide();
        $("#workexp").hide();
        $("#gamesplay").hide();
        $("#contact").hide();
        $("#scouts").hide();
        $("#art").hide();
    });
});