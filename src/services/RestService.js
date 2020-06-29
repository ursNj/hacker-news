import {instance} from "../config/Axios";

export class RestService {

  static setToken() {
    // instance.defaults.headers.common['Authorization'] = '';
    instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  }

  static async get(url) {
    await this.setToken();
    return await instance.get(url);
  }

  static async post(url, data) {
    await this.setToken();
    return await instance.post(url, data);
  }

  static async update(url, data) {
    await this.setToken();
    return await instance.put(url, data);
  }

  static async delete(url) {
    await this.setToken();
    return await instance.delete(url);
  }

}
