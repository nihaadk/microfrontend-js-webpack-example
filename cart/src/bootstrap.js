import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
  el.style =
    "background: yellow; color:red; padding: 10px; width: 200px;";
};

// If is isolation development
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");
    
    if (el) {
        mount(el);
    }
}

// If is container development
export { mount };
