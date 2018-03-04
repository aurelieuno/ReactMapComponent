'use strict';

var _ChartBuilder = require('./ChartBuilder.js');

var _ChartBuilder2 = _interopRequireDefault(_ChartBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ChartBuilder', function () {
  it('should render without throwing', function () {
    mount(React.createElement(_ChartBuilder2.default, {
      data: {
        labels: ['Red', 'Blue'],
        datasets: [{
          label: '#',
          data: [1, 2],
          backgroundColor: ['red', 'blue']
        }]
      },
      type: 'pie',
      title: 'Pie Chart'
    }));
  });
});
//# sourceMappingURL=ChartBuilder.test.js.map