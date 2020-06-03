describe('Submit a from', function () {

var obj = require("./Formlocators.js");
var getFormData=require("./FormData.js")
	
	
	it('I shoild be able to submitt the form', function () {

		// browser.get('https://qaclickacademy.github.io/protocommerce/');
		// browser.driver.manage().window().maximize();
		obj.Ename.sendKeys(getFormData.name);
		obj.Eemail.sendKeys(getFormData.email);
		element(by.id("exampleCheck1")).click();
		element(by.xpath("//option[text()='Female']")).getText().then(function (gender) {
			console.log("@@@@@@@@@ " + gender);
		})

		element.all(by.name("inlineRadioOptions")).first().click();


		element(by.buttonText("Submit")).click().then(function () {
			element(by.css("div[class*='success']")).getText().then(function (text) {
				console.log(text);
			})
		})
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M").then(function () {
			element(by.css("div[class*='alert-danger']")).getText().then(function (alertDanger) {
				console.log(alertDanger);

			})
		});
		

	})


});


