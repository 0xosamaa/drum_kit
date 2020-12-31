window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key='${e.key}']`)
  const key = document.querySelector(`.key[data-key='${e.key}']`)
  if (!audio) return
  key.classList.add('active')
  audio.currentTime = 0
  audio.play()
})

const keys = document.querySelectorAll('.key')
keys.forEach((key) => {
  key.addEventListener('transitionend', function (e) {
    if (e.propertyName == 'transform'){
      key.classList.remove('active')
    }
  })
})