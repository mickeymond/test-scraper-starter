const jquery = require('jquery');
const axios = require('axios');
const { JSDOM } = require('jsdom');

const getProducts = async () => {
	// JQuery Instance
	const { data } = await axios.get('https://products.wdemo.xyz');
	const dom = new JSDOM(data);
	const $ = jquery(dom.window.parent, true);

	// Scraper Logic
	return $('div.product').map(function () {
		return {
			name: $(this).find('h2.product-name').html(),
			price: parseFloat($(this).find('p.product-price').html().split(' ')[1].substring(1)),
			rating: parseFloat($(this).find('p.product-rating').html().split(' ')[1])
		}
	}).get();
}

(async () => {
	console.log('Scraping data...');
	const products = await getProducts();
	console.dir(products, { depth: null });
	console.log('Data scraped successfully.');
})().catch(console.log);