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
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
  data.data.map((key) => {
    const title =
      key.attributes.titles.en === undefined
        ? key.attributes.titles.en_jp
        : key.attributes.titles.en

    const overViewItem = `
    <a href="#detail/${key.id}">
      <article>
        <img src="${key.attributes.posterImage.small}" alt="${title}">
        <p>${title}</p>
      </article>
    </a>`
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
  const title =
    data.data.attributes.titles.en === undefined
      ? data.data.attributes.titles.en_jp
      : data.data.attributes.titles.en

  const detailArticle = `
    <article id="detail">
      <section>
        <img src="${data.data.attributes.posterImage.small}" alt="">
        <p>${title}</p>
      </section>
      <section>
        <p>${data.data.attributes.description}</p>
        <p>${data.data.attributes.startDate}</p>
      </section>
    <a id="button" href="#overview"><span>Back</span></a>
    </article>
  `
  return mainContainer.insertAdjacentHTML('beforeend', detailArticle)
}
