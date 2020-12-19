var menu;
menu = 0;
document.getElementById('affichermenu').addEventListener('click', function () {
    if (menu == 0) {
        menu = 1;
        document.querySelector('.menu').style.display = "block";
        document.getElementById('flechemenu').innerHTML = "&#9650";
    }
    else {
        menu = 0;
        document.querySelector('.menu').style.display = "none";
        document.getElementById('flechemenu').innerHTML = "&#9660";
    }
})
