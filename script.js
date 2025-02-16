const char = document.getElementById('character')
const game = document.getElementById('game')

const jump = () => {
    if (!char.classList.contains('animate')) {
        char.classList.add('animate')
        setTimeout(() => {
            char.classList.remove('animate')
        }, 1500)
    }
}

const createBlock = () => {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`
    block.style.animationDelay = `${Math.random() * 2}s`
    game.appendChild(block)
}

const manageBlocks = () => {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
        if (blockLeft < -40) {
            block.remove()
        }
    })

    if (blocks.length < 1) {
        createBlock()
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') jump()
})

const checkCollision = setInterval(() => {
    const charTop = parseInt(window.getComputedStyle(char).getPropertyValue('top'))
    const blocks = document.querySelectorAll('.block')

    blocks.forEach(block => {
        const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
        if (blockLeft < 40 && blockLeft > 0 && charTop >= 260) {
            alert('You Dead!!!')
        }
    })
}, 20)

setInterval(() => manageBlocks(), 1000)
