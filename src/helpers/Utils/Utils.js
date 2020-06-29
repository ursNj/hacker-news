export class Utils {
  static randomString(length) {
    let ret = '';
    while (ret.length < length) {
      ret += Math.random()
        .toString(16)
        .substring(2);
    }
    return ret.substring(0, length);
  }

  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static getDomain(url) {
    return url.replace('http://','').replace('https://','').split(/[/?#]/)[0];
  };
}
