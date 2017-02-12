import { StarWarsPage } from './app.po';

describe('star-wars App', function() {
  let page: StarWarsPage;

  beforeEach(() => {
    page = new StarWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
