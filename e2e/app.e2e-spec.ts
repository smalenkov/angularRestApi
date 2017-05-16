import { AngularApiPetrovichPage } from './app.po';

describe('angular-api-petrovich App', () => {
  let page: AngularApiPetrovichPage;

  beforeEach(() => {
    page = new AngularApiPetrovichPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
