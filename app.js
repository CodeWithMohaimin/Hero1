let bun = document.getElementById('bun');
let navLink = document.getElementById('navLink');

bun.addEventListener('click', function () {
    if (navLink.style.display === 'flex') {
        navLink.style.display = 'none'
    } else if (navLink.style.display = 'none') {
        navLink.style.display = 'flex'
    }
})