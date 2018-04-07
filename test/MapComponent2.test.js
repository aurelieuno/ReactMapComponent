import MapComponent from '../app/components/map-comp/lib/MapComponent'
import {MAP_API_KEY} from '../app/config'

describe('Designed MapComponent1', () => {
  it('should render a map with the appropriate design', () => {
    var wrapper = mount(
      <MapComponent apiKey={MAP_API_KEY} small zoom={12} center={'City Park, New Orleans, LA'} />
    )
  })
})
describe('Designed MapComponent2', () => {
  it('should render a map with the appropriate design again', () => {
    var wrapper = mount(
      <MapComponent apiKey={MAP_API_KEY} small zoom={12} center={'City Park, New Orleans, LA'} />
    )
  })
})
