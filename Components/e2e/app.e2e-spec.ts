import { ComponentsPage } from './app.po';

describe('components App', function() {
  let page: ComponentsPage;

  beforeEach(() => {
    page = new ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
