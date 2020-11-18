import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('WebAppRiot app is running!');
  });

  it('login', function () {
    login();
    expect(element(by.id('email')).getAttribute('value')).toBe('test@test.fr');
    element(by.id('email')).clear();
  });

  function login() {
    element(by.id('email')).sendKeys('toto@toto.com');
    element(by.id('connectButtn')).click();
  }

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
