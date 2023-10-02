const jquery = require('jquery');
const axios = require('axios');
const { JSDOM } = require('jsdom');

/**
 * Scenario
 * You are tasked with scraping data from a single web page and
 * presenting it in a structured format.
 * The web page contains a list of products with their names,
 * prices, and ratings.
 *
 * Example product:
 * {
 * 	 name: 'Nike Air Max',
 * 	 price: '25.00',
 *   rating: '4.5'
 * }
 */

const getProducts = async () => {
	// JQuery Instance
	const { data } = await axios.get('https://scrape.wdemo.xyz');
	const dom = new JSDOM(data);
	const $ = jquery(dom.window.parent, true);

	// Scraper Logic
}

(async () => {
  console.log('Scraping data...');
  const products = await getProducts();
  console.dir(products, { depth: null });
  console.log('Data scraped successfully.');
})().catch(console.log);