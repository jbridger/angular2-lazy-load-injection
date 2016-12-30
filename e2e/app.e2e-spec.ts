import { Angular2LazyLoadInjectionPage } from './app.po';

describe('angular2-lazy-load-injection App', function() {
  let page: Angular2LazyLoadInjectionPage;

  beforeEach(() => {
    page = new Angular2LazyLoadInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
