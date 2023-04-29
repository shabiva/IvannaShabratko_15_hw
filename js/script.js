let kitchenProducts = [{
	type: 'grater',
	price: 10
}, {
	тип: 'pastry-bag',
	price: 25
}, {
	type: 'scale',
	price: 5
}, {
	тип: 'whisk',
	price: 15
}];

let devicesProducts = [{
	тип: 'desktop',
	price: [100, 1000]
}, {
	type: 'laptop',
	price: [50, 1500]
}, {
	type: 'smartphone',
	price: [80, 2000]
}, {
	type: 'tablet',
	price: [20, 1300]
}];

let cosmeticsProducts = [{
	тип: 'blush',
	price: 100
}, {
	тип: 'eyeshadow',
	price: 50
}, {
	тип: 'lipstick',
	price: 80
}, {
	тип: 'nail-polish',
	price: 200
}, {
	тип: 'perfume',
	price: 300,
}];

let Kitchen = {
	category: 'Kitchen'
};
let Devices = {
	category: 'Devices'
};
let Cosmetics = {
	category: 'Cosmetics'
};

let modProducts = [];

let getProto = (arr, proto) => {
	modProducts = arr
		.map(products => {
			let newProducts = Object.create(proto);
			for (let key in products) {
				newProducts[key] = products[key];
			}
			newProducts.category = proto.category;
			return newProducts;
		})
	return modProducts
}

arr = [
	getProto(kitchenProducts, Kitchen),
	getProto(devicesProducts, Devices),
	getProto(cosmeticsProducts, Cosmetics)
];

let renderArr = [];
let newarr = [];

arr.forEach(element => {
	renderArr.push(`<h2>Category: ${element[0].category}</h2>`);
	element.map(obj => {
		renderArr.push(`
        <div class="category__box">
            <div class="category__img">
                <img src="img/${obj.type}.svg" alt="">
            </div>
            <div class="category__title">
                <p class="title__name">Name:
                <span>${obj.type}</span>
                </p>
                <p class="title__price">Price:
                <span>$${Array.isArray(obj.price) === true ? String(obj.price[0])+-+String(obj.price[1]) : obj.price}</span>
                </p>
            </div>
        </div>`)
	})

	document.write(`<div class="category">${renderArr.join('')}</div>`);
	renderArr.splice(0);
});