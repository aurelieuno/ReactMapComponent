import MapComponent from '../app/components/map-comp/lib/MapComponent'
import {MAP_API_KEY} from '../app/config'

spy(MapComponent, 'componentDidMount')

describe('Default MapComponent', () => {
  it('should render a default map with no zoom or style given', () => {
    const wrapper = mount(
      <MapComponent apiKey={MAP_API_KEY} center={'City Park, New Orleans, LA'} />
    )
    expect(MapComponent.componentDidMount.calledOnce).to.equal(true)

    wrapper.unmount()
  })
})
