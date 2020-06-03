describe('Add into Cart', function () {


	function selectItems(shoppingItem) {
		element.all(by.tagName("app-card")).each(function (item1) {
			item1.element(by.css("h4 a")).getText().then(function (itemName) {
				console.log("@@@@ " + itemName.toString())
				if (itemName == shoppingItem) {
					item1.element(by.css("button[class*='btn-info']")).click();
				}

			})

		})




	}

	it('I shoild be able to add in cart', function () {
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.linkText("Shop")).click();
		selectItems("iphone X");
		selectItems("Samsung Note 8");

		element(by.partialLinkText("Checkout")).getText().then(function (checkoutItems) {
			var res = checkoutItems.split("(");
			var itemnumbers = res[1].trim().charAt(0);

			console.log("Numer of Item selected in cart" + itemnumbers);
			element(by.partialLinkText("Checkout")).click();
			let sum = 0;
			element.all(by.xpath("//tbody/tr/td[4]//strong")).each(function (element) {
				element.getText().then(function (value) {
					// console.log(value);
					var productValue = value.split(".");
					var x = Number(productValue[1].trim());
					sum = sum + x;
					console.log(sum);


				})



			}).then(function () {
				console.log(sum);
			})



		})
	})

});