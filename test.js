var assert = require('assert');
var buildQueryString = require('./');

describe('buildQueryString', function() {
  it('should return empty string when the empty object given', function() {
    assert.equal(buildQueryString({}), '');
  });

  it('should return result string', function() {
    assert.equal(
      buildQueryString({ user: 12, mobile: 'AT&T', device: 'iPhone' }),
      'user=12&mobile=AT%26T&device=iPhone'
    );
  });

  describe('should return the same entity as given if not object', function() {
    it('null', function() {
      assert.equal(buildQueryString(null), null);
    });
    it('undefined', function() {
      assert.equal(buildQueryString(undefined), undefined);
    });
    it('bool', function() {
      assert.equal(buildQueryString(true), true);
    });
    it('number', function() {
      assert.equal(buildQueryString(12), 12);
    });
    it('string', function() {
      assert.equal(buildQueryString('abc'), 'abc');
    });
    it('array', function() {
      assert.deepEqual(buildQueryString([1, 2]), [1, 2]);
    });
  });
});
