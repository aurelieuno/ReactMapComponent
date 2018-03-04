'use strict';

require('jsdom-global/register');

var _ExpandingCol = require('./ExpandingCol');

describe('ExpandingCol', function () {
  it('should render closed with is-closed', function () {
    var classes = shallow(React.createElement(
      _ExpandingCol.ExpandingCol,
      null,
      'Test'
    )).first().prop('className');

    expect(classes).to.contain('is-closed');
  });

  it('should render open with is-open', function () {
    var classes = shallow(React.createElement(
      _ExpandingCol.ExpandingCol,
      { open: true },
      'Test'
    )).first().prop('className');

    expect(classes).to.contain('is-open');
  });
});

describe('ExpandingColStateContainer', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(
      _ExpandingCol.ExpandingColStateContainer,
      null,
      'Test'
    ));
  });

  it('should be openable and closeable', function () {
    var container = mount(React.createElement(
      _ExpandingCol.ExpandingColStateContainer,
      null,
      'Test'
    ));
    var expander = container.find('.rev-ExpandingCol-expander').first();

    expander.simulate('click');

    expect(container.state('open')).to.eq(true);

    expander.simulate('click');

    expect(container.state('open')).to.eq(false);
  });
});
//# sourceMappingURL=ExpandingCol.test.js.map