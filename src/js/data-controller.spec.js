const DataController = require('./data-controller');

describe('DataService', function () {
  const serverLink = 'test-server-name';
  let dataService;

  beforeEach(function () {

    dataService = new DataController(serverLink);

    global.fetch = jest.fn().mockImplementation(requestLink => {
      const p = new Promise(resolve => {
        resolve({
          body: ['test data'],
          bodyUsed: true,
          headers: {},
          ok: true,
          redirected: false,
          status: 200,
          statusText: 'OK',
          type: 'basic',
          url: requestLink,
          json: function () {
            return {url:requestLink, data: ['test data']};
          }
        });
      });

      return p;
    });

  });

  it('should call breeds API', async function () {
    const response = await dataService.getAwailableBreeds();
    expect(response.url).toBe(`${serverLink}/breeds`);
  });

  it('should call facts API', async function () {
    const response = await dataService.getAllFacts();
    expect(response.url).toBe(`${serverLink}/facts`);
  });

  it('should call fact API specific for breed', async function () {
    const catName = 'scotish';
    const response = await dataService.getFactAbout(catName);
    expect(response.url).toBe(`${serverLink}/facts/${catName}`);
  });

  it('should call pictures API specific for breed', async function () {
    const catName = 'scotish';
    const response = await dataService.getPhotosLinks(catName);
    expect(response.url).toBe(`${serverLink}/pictures/${catName}`);
  });

});
