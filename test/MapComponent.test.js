import MapComponent from '../app/components/map-comp/lib/MapComponent'
import {MAP_API_KEY} from '../app/config'

describe('Default MapComponent', () => {
  it('should render a default map with no zoom or style given', () => {
    const wrapper = mount(
      <MapComponent apiKey={MAP_API_KEY} center={'City Park, New Orleans, LA'} />
    )
    wrapper.unmount()
  })
})
