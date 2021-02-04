const baseUrl = 'https://api.spacexdata.com/v4';
const endpoint = 'crew'
const mainContainer = document.querySelector('main');

// Insert current year in footer
document.querySelector('footer span').insertAdjacentHTML('afterbegin', new Date().getFullYear());


const getData = async (url) => {
  return await fetch(url)
  .then(response => response.json())
  // .then(data => console.log(data))
  .then(data => { render(data);})
}

function render(data) {
   Object.values(data).map(
    key => {
      return mainContainer.insertAdjacentHTML('beforeend', `<h1>${key.name}</h1>`)
    }
  )
}

/**
 * @description immediately self invoking function javascript, executes when block is called.
 */
(async function(){
  // await console.log(getData(`${baseUrl}/${endpoint}`).then(data => console.log(data)))
  // await render(getData(`${baseUrl}/${endpoint}`))
  getData(`${baseUrl}/${endpoint}`)
})();