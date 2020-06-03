describe('Submit a from using dataprovider', function () {

var obj = require("./Formlocators.js");
// var getFormData=require("./FormData.js");
var dataProvider=require("./DataProviderForFillingForm")
var using = require('jasmine-data-provider');
	
	using(dataProvider.DataProvider, function (data, description) {

		it('I shoild be able to submitt the form '+description, function () {

		// browser.get('https://qaclickacademy.github.io/protocommerce/');
		// browser.driver.manage().window().maximize();
		obj.Ename.sendKeys(data.name);
		obj.Eemail.sendKeys(data.email);
		element(by.id("exampleCheck1")).click();
		element(by.xpath("//option[text()='Female']")).getText().then(function (gender) {
			console.log("Selected Gender is " + gender);
		})

		element.all(by.name("inlineRadioOptions")).first().click();


		element(by.buttonText("Submit")).click().then(function () {
			element(by.css("div[class*='success']")).getText().then(function (text) {
				console.log(text);
			})
		})
		
		browser.refresh();

	})


	});
	

});


