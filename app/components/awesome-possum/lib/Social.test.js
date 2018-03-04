'use strict';

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Social', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Social2.default, { type: _Social2.default.types.FACEBOOK, url: 'https://revelry.co' }));
  });

  it('should add className to child', function () {
    var inherentClassName = 'social';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Social2.default, { className: testClassName, type: _Social2.default.types.FACEBOOK, url: 'https://revelry.co' })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('should render the right link', function () {
    var tweetLink = "https://twitter.com/intent/tweet?url=http%3A%2F%2Frevelry.co&text=Check%20this%20out!";

    var renderedLink = shallow(React.createElement(_Social2.default, { type: _Social2.default.types.TWITTER, url: 'http://revelry.co' })).first().prop('href');

    expect(renderedLink).to.equal(tweetLink);
  });

  it('can handle every type', function () {
    var PATTERNS = {
      BUFFER: 'buffer',
      DIGG: 'digg',
      EMAIL: 'mailto',
      FACEBOOK: 'facebook',
      GOOGLE_PLUS: 'google',
      LINKEDIN: 'linkedin',
      PINTEREST: 'pinterest',
      REDDIT: 'reddit',
      TUMBLR: 'tumblr',
      TWITTER: 'twitter'
    };

    for (var service in _Social2.default.types) {
      var social = shallow(React.createElement(_Social2.default, { type: _Social2.default.types[service], url: 'http://example.com' }));

      expect(social.find('a').prop('href')).to.contain(PATTERNS[service]);
    }
  });
});
//# sourceMappingURL=Social.test.js.map