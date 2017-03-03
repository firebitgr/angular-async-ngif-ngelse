import { AngularAsyncNgifNgelsePage } from './app.po';

describe('angular-async-ngif-ngelse App', () => {
  let page: AngularAsyncNgifNgelsePage;

  beforeEach(() => {
    page = new AngularAsyncNgifNgelsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
