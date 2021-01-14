const options = {
  baseUrl: 'https://api.nasa.gov',
  apiKey: '5GbQYKuKlVmG4LHuYY4KF1G1jtwP7sncNnoEm6am',

}

class Api {
  constructor(options) {
    this.options = options;
  }

  static _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(res.status));
  }

  static _getError(err) {
    return Promise.reject(new Error(err.message));
  }

  getPictureOfTheDay() {
    return fetch(`${this.options.baseUrl}/planetary/apod?api_key=${this.options.apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => Api._getResponseData(res))
    .catch((err) => Api._getError(err));
  }

  getPictureForThePeriod(startDay, endDay) {
    return fetch(`${this.options.baseUrl}/planetary/apod?start_date=${startDay}&end_date=${endDay}&api_key=${this.options.apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => Api._getResponseData(res))
    .catch((err) => Api._getError(err));
  }

  getPhotoFromCuriosity(rover, sol, camera, ) {
    return fetch(`${this.options.baseUrl}/mars-photos/api/v1/rover/${rover}/photos?/sol=${sol}&camera=${camera}&${this.options.apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => Api._getResponseData(res))
    .catch((err) => Api._getError(err));
  }
}

const api = new Api(options);

export default api;