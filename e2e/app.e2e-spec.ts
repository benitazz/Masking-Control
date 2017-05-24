import { MaskingAppPage } from './app.po';

describe('masking-app App', () => {
  let page: MaskingAppPage;

  beforeEach(() => {
    page = new MaskingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
