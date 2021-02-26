function doughCalc() {
    var LSN = document.getElementById("LSN").value;
    var LSM = document.getElementById("LSM").value;
    var MSN = document.getElementById("MSN").value;
    var MSM = document.getElementById("MSM").value;
    var SSN = document.getElementById("SSN").value;
    var SSM = document.getElementById("SSM").value;
    var MiSN = document.getElementById("MiSN").value;
    var MiSM = document.getElementById("MiSM").value;
    var DBM = document.getElementById("DBM").value;
    var totalLS = (LSN - LSM) / 28;
    var totalMS = (MSN - MSM) / 40;
    var totalSS = (SSN - SSM) / 62;
    var totalMiS = (MiSN - MiSM) / 105;
    var grandTotal = totalLS + totalMS + totalSS + totalMiS;
    var need = grandTotal - DBM;
    document.getElementById('Skin Display').innerHTML = Math.round(grandTotal * 10) / 10;
    document.getElementById('Needed').innerHTML = Math.round(need * 10) / 10;
}

function tomorrow() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[6] = "SUNDAY";
    weekday[0] = "MONDAY";
    weekday[1] = "TUESDAY";
    weekday[2] = "WEDNESDAY";
    weekday[3] = "THURSDAY";
    weekday[4] = "FRIDAY";
    weekday[5] = "SATURDAY";
  
    var n = weekday[d.getDay()];
    document.getElementById("tomorrow").innerHTML = n;
}
