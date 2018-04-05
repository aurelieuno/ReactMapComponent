import MapComponent from '../app/components/map-comp/lib/MapComponent'
import {MAP_API_KEY} from '../app/config'

describe('MapComponent', () => {
  it('should render a map', () => {
    mount(<MapComponent apiKey={MAP_API_KEY} zoom={12} center={'City Park, New Orleans, LA'} />)
  })
})
