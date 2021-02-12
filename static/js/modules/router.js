import { getData } from './data.js'

export const router = () => {
  // eslint-disable-next-line no-undef
  routie({
    // Route to overview
    overview: () => {
      console.log('hi')
    },
    // Route to detail
    'detail/:id': async (id) => {
      const show = await getData(`https://kitsu.io/api/edge/anime/${id}`)
      console.log(`${show.data.attributes.startDate}`)
    }
  })
}
