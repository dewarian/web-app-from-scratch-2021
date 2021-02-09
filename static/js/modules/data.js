export const datatest = (test) => {
  return console.log(`%c${test}`, 'color: #ffcc00; font-weight: bold;')
}
/**
 * @description Retrieves data and runs data dependent functionality
 * @param {String} url API endpoint to call.
 */
export const getData = async (url) => {
  return await fetch(url).then((response) => response.json())
}
