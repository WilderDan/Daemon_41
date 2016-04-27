// Daemon 41

var nmog, co, nox, hcho;
var cartype, distance, terrain, speed, drivestyle, coldstart;
// jQuery - make sure document is ready before modifying
$(document).ready(function () {
    rnoselect();
    $("#submit_btn").click(function () {
        var value = ($("input[name=test_type]:checked").val());
        cartype = ($("input[name=car_model]:checked").val());
        distance = ($("input[name=distance]:checked").val());
        terrain = ($("input[name=terrain]:checked").val());
        drivestyle = ($("input[name=drive]:checked").val());
        coldstart = ($("input[name=coldstart]:checked").val());
        genResults(value);

        var data = "<table style='width: 100%'><tr><th>Chemical\t</th><th>grams/mile</th></tr><tr><td>NMOG</td><td>" + nmog.toFixed(4) + "</td></tr><tr><td>CO</td><td>" + co.toFixed(4) + "</td></tr><tr><td>Nox</td><td>" + nox.toFixed(4) + "</td></tr><tr><td>HCHO</td><td>" + hcho.toFixed(4) + "</td></tr></table>"; 

        if (value == "road") {
            var option_string = "<strong>Road Test selected</strong>";
            var image_string = "<img src='images/road.jpg' alt='fake graph' style=''>";
            //var data = "<table><tr><th>Chemical</th><th>grams/mile</th></tr><tr><td>NMOG</td><td>" + nmog.toFixed(4) + "</td></tr><tr><td>CO</td><td>" + co.toFixed(4) + "</td></tr><tr><td>Nox</td><td>" + nox.toFixed(4) + "</td></tr><tr><td>HCHO</td><td>" + hcho.toFixed(4) + "</td></tr></table>"; 
        }
        else {
            var option_string = "<strong>Lab Test selected</strong>";
            var image_string = "<img src='images/vw_lab.jpg' alt='fake graph' style=''>";
            //var data = "<strong>Lab Test Results:</strong> <br /><br />NMOG: " + nmog.toFixed(4) + " grams/mile <br />" + "CO:    " + co.toFixed(4) + " grams/mile <br />" + "Nox:   " + nox.toFixed(4) + " grams/mile <br />" + "HCHO: " + hcho.toFixed(4) + " grams/mile <br />";
        }

        $("#selected_option").html(option_string);
        $("#image_container").html(image_string);
        $("#test_data").html(data);

        var s = document.getElementById("results_wrap");
        s.style.borderBottom = '2px solid silver';
        s.style.borderTop= '2px solid silver';

    });

    $("#car1").click(function() {
        $("#car_select_img").html("<img id='road_lab_pic' src='images/jetta.jpg' /> <br />")
    });
    $("#car2").click(function() {
        $("#car_select_img").html("<img id='road_lab_pic' src='images/passat.jpg' /> <br />")
    });
});

//Jetta
function genResults(value) {
    var nmogr, cor, noxr, hchor, nmogl, col, noxl, hchol;
    var sign = (Math.random() * 2) + (-1);
    if (value == "road") {
        nmog = nmogr = (sign * (Math.random() * 0.01)) + .075;
        sign = (Math.random() * 2) + (-1);
        co = cor = (sign * (Math.random() * 0.4)) + 3.4;
        nox = noxr = (Math.random() * 1.424) + 0.976;
        sign = (Math.random() * 2) + (-1);
       hcho = hchor = (sign * (Math.random() * 0.003)) + 0.015;

    }
    else {
        nmog = nmogl = (Math.random() * 0.005) + .07;
        co = col = (Math.random() * 0.4) + 3.0;
        nox = noxl = (Math.random() * 0.0052) + 0.03;
        hcho = hchol = (Math.random() * 0.003) + 0.012;
    }
};

function percentageused(){

}

function rnoselect() {
    var i;
    var x = document.getElementsByName("distance");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    x = document.getElementsByName("terrain");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    x = document.getElementsByName("drive");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
    x = document.getElementsByName("coldstart");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
}

function rselect() {
    var i;
    var x = document.getElementsByName("distance");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = false;
        if (i == 0) x[i].checked = true;
    }
    x = document.getElementsByName("terrain");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = false;
        if (i == 0) x[i].checked = true;
    }
    x = document.getElementsByName("drive");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = false;
        if (i == 0) x[i].checked = true;
    }
    x = document.getElementsByName("coldstart");
    for (i = 0; i < x.length; i++) {
        x[i].disabled = false;
        if (i == 0) x[i].checked = true;
    }
}

function drads() {
    var x = document.getElementById("blah3");
    if (x.checked == true) {
        rselect();
    }
    else {
        rnoselect();
    }
}