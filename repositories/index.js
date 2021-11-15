
import Artwork from './models/artwork.js'

export default ($axios) => ({
  artwork: Artwork($axios),
})