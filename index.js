module.exports = function (obj) {
  return obj && typeof obj === 'object' && !obj.length
    ? Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&')
    : obj;
};
