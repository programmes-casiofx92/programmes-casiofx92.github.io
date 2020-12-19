const fermerAlerte = document.getElementById('fermerAlerte');
fermerAlerte.addEventListener('click', function () {
    document.querySelector('.alert').style.display = "none";
})
document.querySelector('.jeux').addEventListener('mouseover', function () {
    document.querySelector('.flecheje').innerHTML = "&#9650;";
})
document.querySelector('.jeux').addEventListener('mouseout', function () {
    document.querySelector('.flecheje').innerHTML = "&#9660;";
})
document.querySelector('.sous').addEventListener('mouseover', function () {
    document.querySelector('.flecheje').innerHTML = "&#9650;";
})
document.querySelector('.sous').addEventListener('mouseout', function () {
    document.querySelector('.flecheje').innerHTML = "&#9660;";
})
document.querySelector('.dessin').addEventListener('mouseover', function () {
    document.querySelector('.flechebl').innerHTML = "&#9650;";
})
document.querySelector('.dessin').addEventListener('mouseout', function () {
    document.querySelector('.flechebl').innerHTML = "&#9660;";
})
document.querySelector('.souse').addEventListener('mouseover', function () {
    document.querySelector('.flechebl').innerHTML = "&#9650;";
})
document.querySelector('.souse').addEventListener('mouseout', function () {
    document.querySelector('.flechebl').innerHTML = "&#9660;";
})
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    window.location.replace('https://programmes-casiofx92.github.io/mobile');
}