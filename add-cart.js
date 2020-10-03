let carts = document.querySelectorAll('.add-cart')

let products = [
	{
		name: "דיוקן אישי (ראש בלבד)",
		tag: "headportrait",
		price: 60,
		inCart: 0
	},
	{
		name: "דיוקן אישי (כל הגוף)",
		tag: "fullbodyportrait",
		price: 120,
		inCart: 0
	}
]

for (let i = 0; i < carts.length; i++){
	carts[i].addEventListener('click', () =>{
	 cartNumbers();
	})
}

var addToCartButtons = document.getElementsByClassName('add-cart')
for (var i = 0; i < addToCartButtons.length; i++){
	var button = addToCartButtons[i]
	button.addEventListener('click', addToCartClicked)
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
	document.querySelector('.cart span').textContent = productNumbers;
	}
}

function addToCartClicked(event){
	var button = event.target
	var shopItem = button.parentElement.parentElement
	var title = shopItem.getElementsByClassName('itm-title')[0].innerText
	var price = shopItem.getElementsByClassName('itm-price')[0].innerText
	var imageSrc = shopItem.getElementsByClassName('itm-img')[0].src
	var inCart = 0
	setItems(title, price, imageSrc, inCart)
}

function setItems(title, price, imageSrc, inCart){
	var cartItems = localStorage.getItem('productTitle')
	inCart = 1;
	var price = parseInt(price);

	if (cartItems != null) {
		inCart += 1;
	} else {
		inCart = 1;
	}

	localStorage.setItem("productTitle", title)
	localStorage.setItem("productPrice", price)
	localStorage.setItem("productImg", imageSrc)
	localStorage.setItem("productInCart", inCart)
}

function cartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
}

var quantityInputs = document.getElementsByClassName('product-input')
	for (var i = 0; i < quantityInputs.length; i++){
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
}

function quantityChanged(event){
	var input = event.target
	if (isNaN(input.value) || input.value <= 0)  {
		input.value = 1
	}
}

onLoadCartNumbers();