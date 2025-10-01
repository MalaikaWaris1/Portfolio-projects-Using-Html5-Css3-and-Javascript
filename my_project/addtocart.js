import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

export const addToCart = (event, id, stock)=>{
    let arrLocalStorageProduct = getCartProductFromLS();
        const currentprodElem= document.querySelector(`#card${id}`) ;
        console.log(currentprodElem);
        let quantity=currentprodElem.querySelector(".productQuantity").innerText;
        let price=currentprodElem.querySelector(".productPrice").innerText;
        // console.log(quantity,price );
          price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //show toast when product added to the cart
    showToast("add", id);
  }

  if (existingProd) {
    // alert("bhai duplicate hai");
    return false;
  }

  //todo Don't Forget To LIKE SHARE & SUBSCRIBE TO THAPA TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/thapatechnical

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct);

  //show toast when product added to the cart
  showToast("add", id);
};
