const baseUrl = 'https://api.spacexdata.com/v4';
const endpoint = 'crew'
const mainContainer = document.querySelector('main');

// Insert current year in footer
document.querySelector('footer span').insertAdjacentHTML('afterbegin', new Date().getFullYear());


/**
 * 
 * @param {*} url 
 */
const getData = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .then(data => {
      render(data);
      console.log(data);
    })
}

function render(data) {
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