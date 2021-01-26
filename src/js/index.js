console.log('Hello World')

const pageHome = document.querySelector('[data-js=pageHome]')
const pageBookmark = document.querySelector('[data-js=pageBookmark]')

const navButton1 = document.querySelector('[data-js=navButton1]')
const navButton2 = document.querySelector('[data-js=navButton2]')
const navButton3 = document.querySelector('[data-js=navButton3]')
const navButton4 = document.querySelector('[data-js=navButton4]')

navButton1.addEventListener('click', () => {
  pageHome.hidden = false
  pageBookmark.hidden = true

  navButton1.classList.add('navbar__item--active')
  navButton2.classList.remove('navbar__item--active')
})

navButton2.addEventListener('click', () => {
  pageHome.hidden = true
  pageBookmark.hidden = false

  navButton1.classList.remove('navbar__item--active')
  navButton2.classList.add('navbar__item--active')
})
