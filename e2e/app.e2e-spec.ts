import { MusicFrontendPage } from './app.po';

describe('music-frontend App', () => {
  let page: MusicFrontendPage;

  beforeEach(() => {
    page = new MusicFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
