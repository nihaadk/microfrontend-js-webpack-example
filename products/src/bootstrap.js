import faker from "faker";


const mount = (el) => {
  let products = "";

  for (let index = 0; index < 3; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Concetxt/Situations #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products-list'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#products-list");
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Concetxt/Situations #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products-list' exists
// We do not want to try to immediately render the app

export { mount };
