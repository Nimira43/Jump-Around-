const char = document.getElementById('character')
const block = document.getElementById('block')

const jump = () => {
    if (!char.classList.contains('animate')) {
        char.classList.add('animate');
        setTimeout(() => {
            char.classList.remove('animate')
        }, 1500)
    }
}

const randomizeBlockSpeed = () => {
    const blockAnimation = `block ${Math.random() * 2 + 1.5}s infinite`;
    block.style.animation = blockAnimation;
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') jump()
})

randomizeBlockSpeed()

const checkCollision = setInterval(() => {
    const charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'))
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if (blockLeft < 40 && blockLeft > 0 && charTop >= 260) {
        alert('You Dead!!!')
    }
}, 20)
