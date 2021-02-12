/**
 * @title Render HTML element
 * @description Function loops through array elements and injects into DOM.
 * @function
 * @todo Make it modular, no hardcoded Key names
 * @todo Expand upon the render functionality by extracting html element from this block.
 * @param {Array} data Array of objects to loop through.
 */
// export const render = (data) => {
//   const mainContainer = document.querySelector('main')

//   Object.values(data).map((key) => {
//     const html = `
//         <figure>
//           <img src="${key.image}" alt="${key.name}">
//           <figcaption><a href="#">${key.name}</a>, ${key.agency}</figcaption>
//         </figure>
//       `
//     return mainContainer.insertAdjacentHTML('beforeend', html)
//   })
// }

export const render = (data) => {
  const mainContainer = document.querySelector('main')

  data.data.map((key) => {
    if (key.attributes.titles.en === undefined) {
      const title = key.attributes.titles.en_jp

      const test = `
      <h1>${title}</h1>
      <img src="${key.attributes.posterImage.small}" alt="${key.name}">`

      return mainContainer.insertAdjacentHTML('beforeend', test)
    } else {
      const title = key.attributes.titles.en
      const test = `
      <h1>${title}</h1>
      <img src="${key.attributes.posterImage.small}" alt="${key.name}">`

      return mainContainer.insertAdjacentHTML('beforeend', test)
    }
  })
  // Object.values(data).map((key) => {
  //   const html = `
  //       <figure>
  //         <img src="${key.image}" alt="${key.name}">
  //         <figcaption><a href="#">${key.name}</a>, ${key.agency}</figcaption>
  //       </figure>
  //     `
  //   return mainContainer.insertAdjacentHTML('beforeend', html)
  // })
}
