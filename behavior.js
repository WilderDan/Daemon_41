// Daemon 41

var nmog, co, nox, hcho;
var cartype, distance, terrain, speed, drivestyle, coldstart, mpg, pused;
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
        percentageused(value);
        genResults(value);

        var data = "<table style='width: 100%'><tr><th>Chemical\t</th><th>grams/mile</th></tr><tr><td>NMOG</td><td>" + nmog.toFixed(4) + "</td></tr><tr><td>CO</td><td>" + co.toFixed(4) + "</td></tr><tr><td>Nox</td><td>" + nox.toFixed(4) + "</td></tr><tr><td>HCHO</td><td>" + hcho.toFixed(4) + "</td></tr><tr><td>MPG</td><td>" + mpg.toFixed(4) + "</td></tr><tr><td>Distance</td><td>" + distance.toFixed(4) + "</td></tr><tr><td>Avg Speed</td><td>" + speed.toFixed(4) + "</td></tr></table>";

        if (value == "road") {
            var option_string = "<strong>Road Test selected</strong>";
            var image_string = "<img src='images/road.jpg' alt='fake graph' style='width: 300px; height: 150px;'>";
            //var data = "<table><tr><th>Chemical</th><th>grams/mile</th></tr><tr><td>NMOG</td><td>" + nmog.toFixed(4) + "</td></tr><tr><td>CO</td><td>" + co.toFixed(4) + "</td></tr><tr><td>Nox</td><td>" + nox.toFixed(4) + "</td></tr><tr><td>HCHO</td><td>" + hcho.toFixed(4) + "</td></tr></table>";
        }
        else {
            var option_string = "<strong>Lab Test selected</strong>";
            var image_string = "<img src='images/vw_lab.jpg' alt='fake graph' style='width: 300px; height: 150px;'>";
            //var data = "<strong>Lab Test Results:</strong> <br /><br />NMOG: " + nmog.toFixed(4) + " grams/mile <br />" + "CO:    " + co.toFixed(4) + " grams/mile <br />" + "Nox:   " + nox.toFixed(4) + " grams/mile <br />" + "HCHO: " + hcho.toFixed(4) + " grams/mile <br />";
        }

        $("#selected_option").html(option_string);
        $("#image_container").html(image_string);
        $("#test_data").html(data);

        /*var s = document.getElementById("results_wrap");
        s.style.borderBottom = '2px solid silver';
        s.style.borderTop = '2px solid silver';*/

    });

    $("#car1").click(function () {
        $("#car_select_img").html("<img id='road_lab_pic' src='images/jetta.jpg' /> <br />")
    });
    $("#car2").click(function () {
        $("#car_select_img").html("<img id='road_lab_pic' src='images/passat.jpg' /> <br />")
    });
});

function genResults(value) {
    var nmogr, cor, noxr, hchor, nmogl, col, noxl, hchol;
    var sign = (Math.random() * 2) + (-1);
    //jetta
    if (cartype == "jetta") {
            nmogr = (sign * (Math.random() * 0.01)) + .075;
            sign = (Math.random() * 2) + (-1);
            cor = (sign * (Math.random() * 0.4)) + 3.4;
            noxr = (Math.random() * 1.424) + 0.976;
            sign = (Math.random() * 2) + (-1);
            hchor = (sign * (Math.random() * 0.003)) + 0.015;

            nmogl = (Math.random() * 0.005) + .07;
            col = (Math.random() * 0.4) + 3.0;
            noxl = (Math.random() * 0.0052) + 0.03;
            hchol = (Math.random() * 0.003) + 0.012;
    }
    //passat
    else {
            nmogr = (sign * (Math.random() * 0.01)) + .075;
            sign = (Math.random() * 2) + (-1);
            cor = (sign * (Math.random() * 0.4)) + 3.4;
            noxr = (Math.random() * 1.424) + 0.976;
            sign = (Math.random() * 2) + (-1);
            hchor = (sign * (Math.random() * 0.003)) + 0.015;

            nmogl = (Math.random() * 0.005) + .07;
            col = (Math.random() * 0.4) + 3.0;
            noxl = (Math.random() * 0.0052) + 0.03;
            hchol = (Math.random() * 0.003) + 0.012;
    }

    nmog = (nmogr * (1 - pused)) +  (nmogl * pused);
    co = (cor * (1 - pused)) + (col * pused);
    nox = (noxr * (1 - pused)) + (noxl * pused);
    hcho = (hchor * (1 - pused)) + (hchol * pused);
};

function percentageused(value) {
    pused = 0;
    if (distance == 0) {
        distance = (Math.random() * .9) + .1;
    }
    else if (distance == 1) {
        distance = (Math.random() * 3.9) + 1.1;
    }
    else {
        distance = (Math.random() * 4.9) + 5.1;
    }

    if (terrain == 0) {
        mpg = 0;
        if (coldstart == 0 && drivestyle == 0 && terrain == 0) {
                pused = (Math.random() * 0.5);
        }

        terrain = "Straight";
    }
    else if (terrain == 1) {
        mpg = (Math.random() * 2) + 1;
        terrain = "Mixed";
    }
    else {
        mpg = (Math.random() * 4) + 1;
        terrain = "Curvy";
    }

    if (drivestyle == 0) {
        mpg += (Math.random() * 0);
    }
    else if (drivestyle == 1) {
        mpg += (Math.random() * 2) + 1;
    }
    else {
        mpg += (Math.random() * 6) + 1;
    }
    if (cartype == "jetta") {
        mpg = (40 - mpg);
    }
    else {
        mpg = (38 - mpg);
    }

    if (drivestyle == 0) {
        speed = (Math.random() * 5) + 20;
        drivestyle = "Casual";
    }
    else if (drivestyle == 1) {
        speed = (Math.random() * 10) + 35;
        drivestyle = "Normal";
    }
    else {
        speed = (Math.random() * 20) + 45;
        drivestyle = "Agressive";
    }

    if (coldstart == 0 && pused == 0) {
        pused += 0.1;
    }
    if (value == "lab") {
        pused = 1;
    }
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
