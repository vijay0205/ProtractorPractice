var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['SubmittFormWithDataProviderData.js'],
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  onPrepare : function(){
    browser.get('https://qaclickacademy.github.io/protocommerce/');
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
  },
  suites : {
    Smoke : ['SubmittForm.js','SubmittFormWithDataProviderData.js'],
  }
  

}