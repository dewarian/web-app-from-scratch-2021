const baseUrl = 'https://api.spacexdata.com/v4';
const endpoint = 'crew'
const mainContainer = document.querySelector('main');

// Insert current year in footer
document.querySelector('footer span').insertAdjacentHTML('afterbegin', new Date().getFullYear());

/**
 * @description Retrieves data and runs data dependent functionality
 * @todo Split function up.
 * @todo Remove render(data)
 * @param {String} url API endpoint to call.
 */
const getData = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .then(data => {
      render(data);
      console.log(data);
    })
}

/**
 * @description Function loops through array elements and injects into DOM.
 * @todo Make it modular, no hardcoded Key names
 * @todo Expand upon the render functionality by extracting html element from this block.
 * @param {Array} data Array of objects to loop through.  
 */
const render = (data) => {
  Object.values(data).map(
    key => {
      const html = `
        <figure>
          <img src="${key.image}" alt="${key.name}">
          <figcaption><a href="#">${key.name}</a>, ${key.agency}</figcaption>
        </figure>
      `
      return mainContainer.insertAdjacentHTML('beforeend', html)
    }
  )
}

/**
 * @description immediately self invoking function javascript, executes when block is called.
 */
(async function () {
  // await render(getData(`${baseUrl}/${endpoint}`))
  getData(`${baseUrl}/${endpoint}`)
})();