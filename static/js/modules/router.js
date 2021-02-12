import { getData } from './data.js'
import { render, renderDetail } from './render.js'

export const router = () => {
  // eslint-disable-next-line no-undef
  routie({
    // Route to overview
    overview: async () => {
      render(
        await getData(
          'https://kitsu.io/api/edge/anime?filter[seasonYear]=2021&[season]=winter&page[limit]=20&page[offset]=0'
        )
      )
    },
    // Route to detail
    'detail/:id': async (id) => {
      const details = await getData(`https://kitsu.io/api/edge/anime/${id}`)
      renderDetail(details)
    },
    '*': async () => {
      render(
        await getData(
          'https://kitsu.io/api/edge/anime?filter[seasonYear]=2021&[season]=winter&page[limit]=20&page[offset]=0'
        )
      )
    }
  })
}
