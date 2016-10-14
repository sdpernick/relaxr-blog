function question1(){
		$(".sign").text("No Sign Ups!");
		alert("We are not currently taking sign ups.");
}

	$(".sign").on("click", question1);

/*
function question2(){
	$(".google1").show("Read Less");
}

    $(".google1").on("click", question2);
*/

function question3(){
	$(".google1").hide();
	$(".google1").slideDown().text("Read Less");
}
    $(".google1").on("click", question3);

function question4(){
	$(".google2").hide();
	$(".google2").slideDown().text("Read Less");
}
    $(".google2").on("click", question4);

/*
function question4(){
	$(".google1").hide();
	$(".google1").show().text("Read Less");
}
    $(".google1").on("click", question4);
*/

function question5(){
	$("h4").hide();
	$("h4").slideDown().text("Learn Less");
}
    $("h4").on("click", question5);




/*
function question6(){
	$("h4").slideUp().text("Learn More");
}
    $("h4").on("click", question6);
*/



/* OR:
function question2(){
	$(".google1").text("Read Less");
}

    $(".google1").on("click", question2);

OR:
$(".google2").on("click", function(){
	$(".google2").show("Read Less");
});
*/

 










	

    
	
	