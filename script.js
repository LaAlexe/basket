document.addEventListener("DOMContentLoaded", function () {

	var allPrice = document.querySelectorAll('price');


	class Product {
		constructor (price){
			this.price = price;
		}
		calculatePrice(){
			return this.price;
		}
	}

	class Box extends Product{
		constructor(price){
			super(price);
			this.productsArray = [];
		}
		add(product){
			this.productsArray.push(product);
		}
		calculatePrice(){
			for (let i=0;i<this.productsArray.length;i++){
				this.price = this.price + this.productsArray[i].calculatePrice();
			}
			return this.price;
		}
	}

	let x = new Product (10);
	let y = new Product (15);
	let z = new Box(1);
	let g = new Box(42);
	g.add(x);
	g.add(y);
	g.add(z);
	g.calculatePrice();
	z.add(x);
	z.add(y);

	//console.log(g);	


});