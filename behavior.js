// Daemon 41

var nmog, co, nox, hcho;
// jQuery - make sure document is ready before modifying
$(document).ready(function () {

    $("#submit_btn").click(function () {
        var value = ($("input[name=test_type]:checked").val());
        genResults(value);

        if (value == "road") {
            var option_string = "Road Test selected";
            var image_string = "<img src='images/road.jpg' alt='fake graph' style='width:80%; height: 80%;'>";
            var data = "Road Test Results: <br />NMOG: " + nmog + "grams/mile <br />" + "CO:    " + co + "grams/mile <br />" + "NOx:   " + nox + "grams/mile <br />" + "HCHO: " + hcho + "grams/mile <br />";
        }
        else {
            var option_string = "Lab Test selected";
            var image_string = "<img src='images/vw_lab.jpg' alt='fake graph' style='width:80%; height: 80%;'>";
            var data = "Lab Test Results: <br />NMOG: " + nmog + "grams/mile <br />" + "CO:    " + co + "grams/mile <br />" + "Nox:   " + nox + "grams/mile <br />" + "HCHO: " + hcho + "grams/mile <br />";
        }

        $("#selected_option").html(option_string);
        $("#image_container").html(image_string);
        $("#test_data").html(data);


        document.getElementById("result_display").style.border = "2px solid silver";
    });
	
	$("#Custom_Btn").click(function () {
		$(".btn_img").removeClass("current_Option");  
		$("#custom_img").addClass("current_Option");	
	});
	
	$("#Lab_Btn").click(function () {
		$(".btn_img").removeClass("current_Option"); 
		$("#lab_img").addClass("current_Option");
	});
	
	$("#Road_Btn").click(function () {
		$(".btn_img").removeClass("current_Option");  
		$("#road_img").addClass("current_Option");
	});
});

//Jetta
function genResults(value) {
    var sign = (Math.random() * 2) + (-1);
    if (value == "road") {
        nmog = (sign * (Math.random() * 0.01)) + .075;
        sign = (Math.random() * 2) + (-1);
        co = (sign * (Math.random() * 0.4)) + 3.4;
        nox = (Math.random() * 1.424) + 0.976;
        sign = (Math.random() * 2) + (-1);
        hcho = (sign * (Math.random() * 0.003)) + 0.015;
    }
    else {
        nmog = (Math.random() * 0.005) + .07;
        co = (Math.random() * 0.4) + 3.0;
        nox = (Math.random() * 0.0052) + 0.03;
        hcho = (Math.random() * 0.003) + 0.012;
    }
};
