window.fetch = null;
require('es6-promise');
require('isomorphic-fetch');

export const api = {
	getProducts() {
		return fetch('/products')
			.then(response => response.json())
			.then(json => {
				if (json.code == 0) {
					return json.data;
				}
			})
			.catch(error => console.log(error));
	},
	buyProducts(data) {
		console.log(data)
		return fetch('/buy', { method: 'POST', body: JSON.stringify(data) })
			.then(response => response.json())
			.then(json => {
				return json.data;
			})
			.catch(error => console.log(error));
	}
};
