function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

const heading = getElement('universal-header')

const pageHome = getElement('main-home')
const pageBookmark = getElement('main-bookmark')
const navButton1 = getElement('navHome')
const navButton2 = getElement('navBookmark')
const navButton3 = getElement('navCreate')
const navButton4 = getElement('navSettings')

navButton1.addEventListener('click', () => {
  pageHome.classList.remove('hidden')
  pageBookmark.classList.add('hidden')
  navButton1.classList.add('navbar__item--active')
  navButton2.classList.remove('navbar__item--active')
  heading.textContent = 'QUIZ-APP'
})

navButton2.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmark.classList.remove('hidden')
  navButton1.classList.remove('navbar__item--active')
  navButton2.classList.add('navbar__item--active')
  heading.textContent = 'BOOKMARKS'
})
