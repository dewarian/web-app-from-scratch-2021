import { getData } from './data.js'
import { setDetail, setOverview } from './render.js'

/**
 * @title router
 * @function
 * @description handles routing of the web app. Currently has three routes
 */

/**
 * @title router
 * @function
 * @description handles routing of the web app. Currently has three routes, parameters are optional, default is winter 2021.
 * @param {Number} year Year release, can go up to current year.
 * @param {String} season Season release, has to be winter, summer, spring or fall.
 * @param {Number} offset Pagination variable, offset by 20 to see next page.
 */
export const router = (year = 2021, season = 'winter', offset = 0) => {
  const baseUrl = 'https://kitsu.io/api/edge/anime'
  const seasonYearFilter = '[seasonYear]='
  const seasonFilter = '[season]='
  const pageLimit = 'page[limit]=20'
  const offSet = 'page[offset]='
  // eslint-disable-next-line no-undef
  routie({
    // Route to overview
    overview: async () => {
      const getOverview = await getData(
        `${baseUrl}?filter${seasonYearFilter}${year}&${seasonFilter}${season}&${pageLimit}&${offSet}${offset}`
      )
      return setOverview(getOverview)
    },
    // Route to detail
    'detail/:id': async (id) => {
      const details = await getData(`${baseUrl}/${id}`)
      // console.log(details)
      setDetail(details)
    },
    // Wildcard URI, catching first opening. Last as routie iterates and listens to order.
    '': async () => {
      const getOverview = await getData(
        // `${baseUrl}?filter${seasonYearFilter}&${seasonFilter}&${pageLimit}&${offSet}0`
        `${baseUrl}?filter${seasonYearFilter}${year}&${seasonFilter}${season}&${pageLimit}&${offSet}${offset}`
      )
      return setOverview(getOverview)
    }
  })
}
