import MapComponent from '../app/components/map-comp/lib/MapComponent'
import {MAP_API_KEY} from '../app/config'

spy(MapComponent.prototype, 'componentDidMount')

describe('Default MapComponent', () => {
  it('calls componentDidMount', () => {
    const wrapper = shallow(
      <MapComponent apiKey={MAP_API_KEY} center={'City Park, New Orleans, LA'} />
    )

    expect(MapComponent.prototype.componentDidMount.calledOnce).to.equal(true)
  })
})
