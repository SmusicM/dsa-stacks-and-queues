const BrowserBackForward = require('./back_forward')

let browser;

beforeEach(function() {
  browser = new BrowserBackForward();
});

describe("brwoser stuf", function() {
    it("it can add a site and visit", function() {
        browser.visitWebsite("http://google.com")
        expect(browser.first).toBe("http://google.com");
    });
    it("can go back",function(){
        browser.visitWebsite("http://bing.com")
        expect(browser.first).toBe("http://bing.com");
        browser.visitWebsite("http://google.com")
        expect(browser.first).toBe("http://google.com");
        browser.goBack()
        expect(browser.first).toBe("http://bing.com")
    });
    it("can go forward",function(){
       browser.visitWebsite("http://bing.com")
        expect(browser.first).toBe("http://bing.com");
        browser.visitWebsite("http://google.com")
        expect(browser.first).toBe("http://google.com");
        browser.goForward()
        expect(browser.first).toBe("http://google.com")
    });
  });