import { getData } from './data.js'
import { render, renderDetail } from './render.js'

/**
 * @title router
 * @function
 * @description handles routing of the web app. Currently has three routes
 */
export const router = () => {
  // eslint-disable-next-line no-undef
  routie({
    // Route to overview
    overview: async () => {
      return render(
        await getData(
          'https://kitsu.io/api/edge/anime?filter[seasonYear]=2021&[season]=winter&page[limit]=20&page[offset]=0'
        )
      )
    },
    // Route to detail
    'detail/:id': async (id) => {
      const details = await getData(`https://kitsu.io/api/edge/anime/${id}`)
      console.log(details)
      return renderDetail(details)
    },
    // Wildcard URI, catching first opening. Last as routie iterates and listens to order.
    '*': async () => {
      return render(
        await getData(
          'https://kitsu.io/api/edge/anime?filter[seasonYear]=2021&[season]=winter&page[limit]=20&page[offset]=0'
        )
      )
    }
  })
}
