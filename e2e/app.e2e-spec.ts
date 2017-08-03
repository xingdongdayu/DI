import { DiDemoPage } from './app.po';

describe('di-demo App', () => {
  let page: DiDemoPage;

  beforeEach(() => {
    page = new DiDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
