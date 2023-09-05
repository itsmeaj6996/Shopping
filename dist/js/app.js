let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "TAEYEON - Happy",
    tag: "taeyeon-happy",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - I",
    tag: "taeyeon-i",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - Something New",
    tag: "taeyeon-somethingnew",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - My Voice Deluxe Edition",
    tag: "taeyeon-myvoicedeluxeedition",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - What Do I Call You",
    tag: "taeyeon-whatdoicallyou",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - Voice",
    tag: "taeyeon-voice",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - Why",
    tag: "taeyeon-why",
    price: 1600,
    inCart: 0,
  },
  {
    name: "TAEYEON - This Christmas",
    tag: "taeyeon-thischristmas",
    price: 1600,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartCount(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartCount() {
  let productCount = localStorage.getItem("cartCount");

  if (productCount) {
    document.querySelector(".cart span").textContent = productCount;
  }
}

function cartCount(product) {
  let productCount = localStorage.getItem("cartCount");

  productCount = parseInt(productCount);

  if (productCount) {
    localStorage.setItem("cartCount", productCount + 1);
    document.querySelector(".cart span").textContent = productCount + 1;
  } else {
    localStorage.setItem("cartCount", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  console.log("My cartCose is", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    // product/quantity/price
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        <div class="product">
          <img src="./assets/${item.tag}.jpg"></img>
          <span>${item.name}</span>
          <div class="price">₱${item.price}</div>
          <div class="quantity">
          <i class='bx bx-minus' ></i>
          <span>${item.inCart}</span>
          <i class='bx bx-plus'></i>
          </div>
          <div class="total">
            ₱${item.price * item.inCart}.00
          </div>
          </div>
        `;
    });
// Cart total items
    productContainer.innerHTML += `
    <div class="cartTotalItems">
        <h3 class="cartTotalTitle">
          Total of Items:&nbsp&nbsp
        </h3>
        <h3 class="cartTotal">
           ₱${cartCost}.00
        </h3>  
      </div>
      <div class="checkout">
      //  <a href="#" class="checkout-btn">Check Out</a>
      // </div>
    `;
  }
}
// to load the cart items
onLoadCartCount();
// to display the cart item
displayCart();
