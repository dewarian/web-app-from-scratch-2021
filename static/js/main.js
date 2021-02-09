import { datatest, getData } from './modules/data.js'
import { render } from './modules/render.js'

/**
 * @title Create Dynamic Footer Content
 * @description Creates content to populate the footer
 * @param { String }
 */
const dynamicFooterContent = (tagName) => {
  const currentYear = new Date().getFullYear()
  const newElement = document.createElement(tagName)

  const newContent = document.createTextNode(`, ${currentYear}`)
  newElement.appendChild(newContent)

  const elementSelect = document.querySelector('footer p')
  elementSelect.appendChild(newElement)
}

/**
 * @description immediately self invoking function javascript, executes when block is called.
 */
;(async function () {
  const baseUrl = 'https://api.spacexdata.com/v4'
  const endpoint = 'crew'
  const data = await getData(`${baseUrl}/${endpoint}`)
  render(data)
  datatest('Check modularizing')
  dynamicFooterContent('span')
})()
