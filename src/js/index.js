const heading = getElement('universal-header')
const pageHome = getElement('main-home')
const pageBookmark = getElement('main-bookmark')
const pageCreate = getElement('main-create')
const quizCards = document.querySelectorAll('[data-js="quiz-card"]')
const navButton1 = getElement('navHome')
const navButton2 = getElement('navBookmark')
const navButton3 = getElement('navCreate')
const navButton4 = getElement('navSettings')
const textareaAddQuestion = getElement('textarea-add-question')
const textareaAddAnswer = getElement('textarea-add-answer')
const textareaAddTags = getElement('textarea-add-tags')

navButton1.addEventListener('click', () => {
  pageHome.classList.remove('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.add('hidden')
  navButton1.classList.add('navbar__item--active')
  navButton2.classList.remove('navbar__item--active')
  navButton3.classList.remove('navbar__item--active')
  heading.textContent = 'QUIZ-APP'
})

navButton2.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmark.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  navButton1.classList.remove('navbar__item--active')
  navButton2.classList.add('navbar__item--active')
  navButton3.classList.remove('navbar__item--active')
  heading.textContent = 'BOOKMARKS'
})

navButton3.addEventListener('click', () => {
  pageHome.classList.add('hidden')
  pageBookmark.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  navButton1.classList.remove('navbar__item--active')
  navButton2.classList.remove('navbar__item--active')
  navButton3.classList.add('navbar__item--active')
  heading.textContent = 'CREATE QUESTION'
  textareaAddQuestion.focus()
})

quizCards.forEach(quizCard => {
  const solutionButton = quizCard.querySelector('[data-js="solution-button"]')
  const solution = quizCard.querySelector('[data-js="solution"]')
  const iconBookmark = quizCard.querySelector('[data-js="icon-bookmark"]')

  solutionButton.addEventListener('click', () => {
    solution.classList.toggle('hidden')
  })
  iconBookmark.addEventListener('click', () => {
    iconBookmark.classList.toggle('fas')
    iconBookmark.classList.toggle('far')
  })
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

const charactersLimitQuestion = getElement('characters-limit-question')
textareaAddQuestion.addEventListener('input', () => {
  const maxCharacters = 100
  const charactersUsed = textareaAddQuestion.value.length
  const charactersLeft = maxCharacters - charactersUsed
  charactersLimitQuestion.textContent = charactersUsed + ' / ' + charactersLeft
})

const charactersLimitAnswer = getElement('characters-limit-answer')
textareaAddAnswer.addEventListener('input', () => {
  const maxCharacters = 100
  const charactersUsed = textareaAddAnswer.value.length
  const charactersLeft = maxCharacters - charactersUsed
  charactersLimitAnswer.textContent = charactersUsed + ' / ' + charactersLeft
})

const charactersLimitTags = getElement('characters-limit-tags')
textareaAddTags.addEventListener('input', () => {
  const maxCharacters = 50
  const charactersUsed = textareaAddTags.value.length
  const charactersLeft = maxCharacters - charactersUsed
  charactersLimitTags.textContent = charactersUsed + ' / ' + charactersLeft
})
