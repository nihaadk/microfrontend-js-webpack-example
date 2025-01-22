import { mount as cartMount } from 'cart/CartShow';
import { mount as productsMount } from 'products/ProductsIndex';

console.log('Run Container ...');

const productsContainer = document.querySelector('#products-container');
productsMount(productsContainer);

const cartContainer = document.querySelector('#cart-container');
cartMount(cartContainer);