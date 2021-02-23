import { router } from './modules/router.js'

/**
 * @title Add Dynamic Year Content
 * @function
 * @description Creates content to populate the specified element
 * @param {String} tagName HTML element tagName that needs to be created.
 * @param {String} selector querySelector element it needs to target for insertion.
 */
const addYearContent = (tagName, selector) => {
  const currentYear = new Date().getFullYear()
  const newElement = document.createElement(tagName)

  const newContent = document.createTextNode(`, ${currentYear}`)
  newElement.appendChild(newContent)

  const elementSelect = document.querySelector(selector)
  return elementSelect.appendChild(newElement)
}

/**
 * @title IIFE compileApp
 * @function
 * @description immediately self invoking function javascript, executes when block is on the stack.
 * @todo Remove console.log, Currently testing the working of the onreadystatechange. As of 19-2 it only slows down my the retrieval
 * @todo commented createContent out to clean the console.
 * @todo router can ask for 3 parameters, not all have to be given.
 */
;(async function compileApp() {
  addYearContent('span', 'footer p')
  document.onreadystatechange = function () {
    if (document.readyState === 'loading') {
      console.log('LOADING')
    } else if (document.readyState === 'interactive') {
      console.log('test')
    } else if (document.readyState === 'complete') {
      router(2021, 'winter', 0)
    } else {
      console.log('nani')
    }
  }
  // createContent('details', ['one', 'two', 'three'])
})()
