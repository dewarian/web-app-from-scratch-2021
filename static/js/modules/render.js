/**
 * @title Render HTML element
 * @description Function loops through array elements and injects into DOM.
 * @todo Make it modular, no hardcoded Key names
 * @todo Expand upon the render functionality by extracting html element from this block.
 * @param {Array} data Array of objects to loop through.
 */
export const render = (data) => {
  const mainContainer = document.querySelector('main')

  Object.values(data).map((key) => {
    const html = `
        <figure>
          <img src="${key.image}" alt="${key.name}">
          <figcaption><a href="#">${key.name}</a>, ${key.agency}</figcaption>
        </figure>
      `
    return mainContainer.insertAdjacentHTML('beforeend', html)
  })
}
