'use strict';

var _InputErrors = require('./InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InputErrors', function () {
    it('can render without children', function () {
        shallow(React.createElement(_InputErrors2.default, null));
    });

    it('can render with children', function () {
        shallow(React.createElement(
            _InputErrors2.default,
            null,
            'a child!'
        ));
    });
});
//# sourceMappingURL=InputErrors.test.js.map