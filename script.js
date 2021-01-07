
document.querySelector('.jeux').addEventListener('mouseover', function () {
    document.querySelector('.flecheje').innerHTML = "△";
})
document.querySelector('.jeux').addEventListener('mouseout', function () {
    document.querySelector('.flecheje').innerHTML = "▽";
})
document.querySelector('.sous').addEventListener('mouseover', function () {
    document.querySelector('.flecheje').innerHTML = "△";
})
document.querySelector('.sous').addEventListener('mouseout', function () {
    document.querySelector('.flecheje').innerHTML = "▽";
})
document.querySelector('.dessin').addEventListener('mouseover', function () {
    document.querySelector('.flechebl').innerHTML = "△";
})
document.querySelector('.dessin').addEventListener('mouseout', function () {
    document.querySelector('.flechebl').innerHTML = "▽";
})
document.querySelector('.souse').addEventListener('mouseover', function () {
    document.querySelector('.flechebl').innerHTML = "△";
})
document.querySelector('.souse').addEventListener('mouseout', function () {
    document.querySelector('.flechebl').innerHTML = "▽";
})
document.getElementById('fermerAlerte').addEventListener('click', function ()
    {
        document.querySelector('.alert').style.display = "none";

})
