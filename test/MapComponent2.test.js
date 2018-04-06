import MapComponent from '../app/components/map-comp/lib/MapComponent'
import {MAP_API_KEY} from '../app/config'

describe('Designed MapComponent', () => {
  it('should render a map with the appropriate design', () => {
    const wrapper = mount(
      <MapComponent apiKey={MAP_API_KEY} small zoom={12} center={'City Park, New Orleans, LA'} />
    )
    wrapper.unmount()
  })
})
