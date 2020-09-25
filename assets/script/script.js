let fulldate = new Date()
let date = fulldate.getDate()
let month = fulldate.getMonth()
let year = fulldate.getFullYear()
let hours = fulldate.getHours()
let minutes = fulldate.getMinutes()
let second = fulldate.getSeconds()

window.setTimeout("getJam()", 1000);

function getJam() {
    $(document).ready(function () {
        let fulldate = new Date();
        setTimeout("getJam()", 1000);
        hours = fulldate.getHours()
        minutes = fulldate.getMinutes()
        second = fulldate.getSeconds()
        $("#time").text(hours + ":" + minutes + ":" + second)
    });
}

$(document).ready(function () {
    if (hours >= 0 && hours < 5) {
        $('h1').text("Selamat Bobo Kennoy")
        $('h1').attr("data-text", "Selamat Bobo Kennoy")
    } else if (hours >= 5 && hours < 12) {
        $('h1').text("Selamat Pagi Kennoy")
        $('h1').attr("data-text", "Selamat Pagi Kennoy")
    } else if (hours >= 12 && hours < 16) {
        $('h1').text("Selamat Siang Kennoy")
        $('h1').attr("data-text", "Selamat Siang Kennoy")
    } else if (hours >= 16 && hours < 18) {
        $('h1').text("Selamat Sore Kennoy")
        $('h1').attr("data-text", "Selamat Sore Kennoy")
    } else {
        $('h1').text("Selamat Malam Kennoy")
        $('h1').attr("data-text", "Selamat Malam Kennoy")
    }

    let string;
    if (year == 2020) {
        string = "Selamat " + month + " bulan"
    } else {
        let annivY = year - 2020
        string = "Selamat " + annivY + " tahun"

        if (month != 0) {
            string = "Selamat " + annivY + " tahun " + month + " bulan"
        }
    }

    if (date == 9) {
        $('#anniv').text(string)
    }
});