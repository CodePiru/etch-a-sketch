const container = document.querySelector('#container')

function createGrid (num) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.innerHTML = '';
    for (let i = 1; i <= (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
    }
}

function normalMode (e) {
    e.target.classList.add('active');
}

container.addEventListener('mouseover', normalMode)

createGrid(16);
