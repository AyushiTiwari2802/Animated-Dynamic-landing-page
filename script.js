let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

document.addEventListener('mousemove', move);

function move(e) {
    document.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
