const char = document.getElementById('character')
const game = document.getElementById('game')
const gameOverModal = document.getElementById('gameOverModal')
const restartBtn = document.getElementById('restartBtn')

const jump = () => {
  if (!char.classList.contains('animate')) {
    char.classList.add('animate')
    setTimeout(() => {
      char.classList.remove('animate')
    }, 1000)
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
  const blocks = document.querySelectorAll('.block')
  blocks.forEach(block => {
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (blockLeft < -40) {
      block.remove()
    }
  })

  if (blocks.length < 2) {
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
      gameOver()
    }
  })
}, 10)

const gameOver = () => {
  clearInterval(checkCollision)
  gameOverModal.style.display = 'block'
}

restartBtn.addEventListener('click', () => {
  gameOverModal.style.display = 'none'
  location.reload()
})

setInterval(() => manageBlocks(), 500)
