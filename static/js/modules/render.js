/**
 * @title Render HTML element
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

    const test = `
    <article>
    <img src="${key.attributes.posterImage.small}" alt="${title}">
    <p>${title}</p>
    <a href="#detail/${key.id}">details</a>
    </article>`
    return mainContainer.insertAdjacentHTML('beforeend', test)
  })
}
