/**
 * @title Check module.data
 * @description Test function
 * @param {String} test A string to check if the modular approach works properly
 */
export const datatest = (test) => {
  return console.log(`%c${test}`, 'color: #ffcc00; font-weight: bold;')
}
/**
 * @title Retrieve Data from API
 * @description Data retrieval. Use getData when retrieving data from an external API.
 * @param {String} url API endpoint to call.
 */
export const getData = async (url) => {
  return await fetch(url).then((response) => response.json())
}
