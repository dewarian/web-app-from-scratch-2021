/**
 * @title Render Overview
 * @description Function loops through array elements and injects into DOM.
 * @function
 * @todo Make it modular, no hardcoded Key names
 * @todo Expand upon the render functionality by extracting html element from this block.
 * @param {Array} data Array of objects to loop through.
 */
export const render = (data) => {
  const mainContainer = document.querySelector('main')

  data.data.map((key) => {
    const title =
      key.attributes.titles.en === undefined
        ? key.attributes.titles.en_jp
        : key.attributes.titles.en

    const overViewItem = `
    <article>
    <img src="${key.attributes.posterImage.small}" alt="${title}">
    <p>${title}</p>
    <a href="#detail/${key.id}">details</a>
    </article>`
    return mainContainer.insertAdjacentHTML('beforeend', overViewItem)
  })
}

/**
 * @title Render Detail content
 * @function
 * @description Function removes existing child nodes of specified parent and populates with detail information.
 * @param {Object} data Object of data to populate DOM
 */
export const renderDetail = (data) => {
  const mainContainer = document.querySelector('main')
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
  const detailArticle = `
    <article class="detail">
    <img src="${data.data.attributes.posterImage.small}" alt="">
    <p>${data.data.attributes.description}</p>
    <p>${data.data.attributes.startDate}</p>
    </article>
  `
  return mainContainer.insertAdjacentHTML('beforeend', detailArticle)
}
