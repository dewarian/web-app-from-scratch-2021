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
 */
;(async function compileApp() {
  addYearContent('span', 'footer p')
  router()
})()
