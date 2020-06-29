import Cookies from 'js-cookie';

export class Storage {
  static set(key, value) {
    return Cookies.set(key, value);
  }
  static get(key) {
    return Cookies.get(key);
  }
  static unset(key) {
    return Cookies.remove(key);
  }
}
