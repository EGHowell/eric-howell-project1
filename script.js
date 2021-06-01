const burgerMenu = document.getElementById('dropbtn');
burgerMenu.addEventListener('click', function (event) {
    const menuShow = document.querySelector('nav');
    if (menuShow.style.display === "block") {
        menuShow.style.display = "none";
    } else {
        menuShow.style.display = "block";
    }
    updateIcon(burgerMenu);
    addAnimation(menuShow);
});

function addAnimation(element) {
    element.classList.add('animate__animated', 'animate__slideInRight');
}
function updateIcon(element) {
    element.classList.toggle('change');
}