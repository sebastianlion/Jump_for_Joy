
$(document).ready(function(){

    
    $(".guess_box").click(checkForCode);
    
    hideCode();
	
});

function checkForCode() {
        
    var discount;
    if($.contains(this, document.getElementById("has_discount")))
    {
        var my_num = getRandom(100);
        discount = "<p>Your code: CODE"+my_num+"</p>";
        $(this).addClass("discount");

    } else {

        discount = "<p>Sorry, no discount this time!</p>";
    }

    ;

    //var discount_msg = "<p>Your Discount is "+ discount +"%</p>";
    //alert(discount);
    //$("guess_box p").remove();
    $(this).append(discount);
    
    $(".guess_box").each(function(){

        $(this).unbind("click");
        
    });
    $("#result").append(discount);
    
    //$(".guess_box").unbind();
}

$(".guess_box").hover(
    function(){
        $(this).addClass("hover");
        //$(this).removeClass("no_hover");
    },
    function(){
        $(this).removeClass("hover");
        //$(this).addClass("no_hover"); no son necesarios
    })

function getRandom(num) {
    var my_num = Math.floor(Math.random()*num);
    return my_num;
}

var hideCode = function() {
    var numRand = getRandom(4);
    $(".guess_box").each(function(index, value){ 
        if(numRand == index) {
            $(this).append("<span id='has_discount'></span>");
            return false; //esto es para que deje de revizar el resto de los puestos, pues ya escondimos lo que queriamos.
        }
    });
}
