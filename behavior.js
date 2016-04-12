// Daemon 41

// jQuery - make sure document is ready before modifying
$(document).ready(function(){

    $("#submit_btn").click(function(){
        var value = ($("input[name=test_type]:checked").val());

        if (value == "road") {
            var option_string = "Road Test selected";
            var image_string = "<img src='images/road.jpg' alt='fake graph' style='width:80%; height: 80%;'>"
        }
        else {
            var option_string = "Lab Test selected";
            var image_string = "<img src='images/vw_lab.jpg' alt='fake graph' style='width:80%; height: 80%;'>"
        }
        
        $("#selected_option").html(option_string);
        $("#image_container").html(image_string);
    });
});