/* 
  I am searching for a job, hire me
  https://www.github.com/dewarian
*/

const baseUrl = 'https://api.spacexdata.com/v4';

// Insert current year in footer
document.querySelector('footer span').insertAdjacentHTML('afterbegin', new Date().getFullYear());

const getData = async (url) => {
  return await fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
}

/**
 * @description immediately self invoking function javascript, executes when block is called.
 * 
 */
(function(){
  console.log('hello');
  getData(`${baseUrl}/ships`)
})();