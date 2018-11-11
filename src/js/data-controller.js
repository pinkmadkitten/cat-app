/* eslint no-console: 0 */
class DataController {
  constructor (serverPath) {
    this.server = serverPath || window.location.origin;
  }

  async getAwailableBreeds () {
    try {
      let response = await fetch(`${this.server}/breeds`);
      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllFacts () {
    try {
      let response = await fetch(`${this.server}/facts`);
      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getFactAbout (breed) {
    try {
      let response = await fetch(`${this.server}/facts/${breed}`);
      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getPhotosLinks (breed) {
    try {
      let response = await fetch(`${this.server}/pictures/${breed}`);
      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DataController;
