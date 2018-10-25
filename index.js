module.exports = function (obj) {
  return obj && typeof obj === 'object' && !obj.length
    ? Object.keys(obj).map(function(key) {
      return [key, obj[key]].map(encodeURIComponent).join('=');
    }).join('&')
    : obj;
};
