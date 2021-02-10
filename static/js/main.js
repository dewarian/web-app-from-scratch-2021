import { datatest, getData } from './modules/data.js'
import { render } from './modules/render.js'

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
  elementSelect.appendChild(newElement)
}

/**
 * @description immediately self invoking function javascript, executes when block is called.
 */
;(async function () {
  const baseUrl = 'https://api.spacexdata.com/v4'
  const endpoint = 'crew'
  render(await getData(`${baseUrl}/${endpoint}`))
  datatest('Check modularizing')
  addYearContent('span', 'footer p')
})()
