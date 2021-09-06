import { dataProducts, onLoadCartNumbers, setItemInCart } from './products.js';

function getLocalProductInCart() {
    return JSON.parse(localStorage.getItem('productsInCart'));
}
function setLocalItemInCart(itemCart) {
    localStorage.setItem('productsInCart', JSON.stringify(itemCart));
}


//lấy thẻ container để chứa ds item
var cartList = document.querySelector('.cart-list');
//render cartItem 
function addItemCartToDOM() {
    cartList.innerHTML = '';
    var cartItems = getLocalProductInCart();
    // var totalCost = parseInt(localStorage.getItem('totalCost'));
    // var totalCostDisCount = parseInt(localStorage.getItem('totalCostDiscount'));

    if (cartItems && cartList) {
        cartList.innerHTML = `
            <h3 class="section-title">YOUR CART</h3>
            <div class="product-cart-header border-bottom-cart">
                <h5 class="product-cart-actions align-center">ACTION</h5>
                <h5 class="product-cart-title align-center">PRODUCT</h5>
                <h5 class="product-cart-price align-center">PRICE</h5>
                <h5 class="product-cart-color align-center">COLOR</h5>
                <h5 class="product-cart-quantity align-center">QUAITITY</h5>
                <h5 class="product-total align-center">TOTAL</h5>
            </div>
        `;
        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            cartList.innerHTML += `
            <div class="products-cart-container">
                <div class="products-cart align-center border-bottom-cart">
                    <input value="${item.id}" type="hidden" id="product-id-cart">
                    <div class="product-cart-actions align-center" action="remove">
                        <i class="far fa-trash-alt"></i>
                    </div>
                    <div class="product-cart-title align-center">
                        <img src="./${item.img}" id="image">
                        <span class="product-cart-name">${item.name}</span>
                    </div>
                    <div class="product-cart-price align-center">
                       $${item.price},00
                    </div>
                    <div class="product-cart-color align-center">
                        ${item.color}
                    </div>
                    <div class="product-cart-quantity align-center">
                        <i class="fas fa-caret-left"></i>
                        <span>${item.quantity}</span>
                        <i class="fas fa-caret-right"></i>
                    </div>
                    <div class="product-total align-center">
                        $${item.quantity * item.price},00
                    </div>
                </div>
            </div>
            `;
        };

        // cartList.innerHTML += `
        //     <div class="cost-container">
        //         <h4 class="cost-title">
        //             Basket Total
        //         </h4>
        //         <h4 class="cost">
        //             $${totalCost},00
        //         </h4>
        //     </div>
        //     <div class="cost-container color-red">
        //         <h4 class="cost-title border-bottom-cart">
        //             Discount Total
        //         </h4>
        //         <h4 class="cost border-bottom-cart">
        //             $${totalCostDisCount},00
        //         </h4>
        //     </div>
        //     <div class="cost-container color-blue">
        //         <h4 class="cost-title">
        //             Pay Total
        //         </h4>
        //         <h4 class="cost">
        //             $${totalCost - totalCostDisCount},00
        //         </h4>
        //     </div>
        // `;
    }
    // else {
    //     cartList.innerHTML += `
    //     <div class="cart-emty">
    //         <h3 class="cart-emty-title">Your Cart is EMPTY!</h3>
    //         <p class="shop-now><a href="index.html">Shop Now</a></p>
    //     </div>
    //     `
    // }
}
addItemCartToDOM();

//Xóa item trong cart list
//lấy ds các button
var btnDeleteCartList = document.querySelectorAll('.product-cart-actions');
var cartItemsInLocal = getLocalProductInCart();
for (let i = 0; i < btnDeleteCartList.length; i++) {
    var btnDeleteCartItem = btnDeleteCartList[i];
    btnDeleteCartItem.addEventListener('click', function (event) {
        var btnEvent = event.target;
        btnEvent.parentElement.parentElement.parentElement.remove();
        removeItemCart(cartItemsInLocal[i]);
    });
}

function removeItemCart(product) {
    var productNumbers = localStorage.getItem('cartNumbers');
    var cartItems = getLocalProductInCart();
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === product.id) {
            productNumbers -= cartItems[i].quantity;
            cartItems.splice(i, 1);
            break;
        }
    }

    localStorage.setItem('cartNumbers', productNumbers);
    document.querySelector('.fa-shopping-cart span').textContent = productNumbers;
    if (productNumbers === 0) {
        localStorage.removeItem('cartItems');
        addItemCartToDOM();
    } else {
        setLocalItemInCart(cartItems);
    }

}







// var divsItem = document.querySelectorAll(".products-cart");
// var cartItems = (JSON.parse(localStorage.getItem('productsInCart')) || []);
// var lentghCartItems = localStorage.getItem('lengthCartItems');

// for (let i = 0; i < divsItem.length; i++) {
//     divsItem[i].querySelector("[action='remove']").addEventListener('click', function () {
//         for (let item = 0; item < lentghCartItems; item++) {
//             var idProduct = divsItem[item].querySelector("#product-id-cart");
//             var idCartLocal = cartItems[idProduct.value];
//             if (idCartLocal.id === idProduct.value) {
//                 for(j = 0 ; j < lentghCartItems; j++) {
//                     console.log(idProduct.value);
//                 }
//                 }
//             //     divsItem[item].remove();
//                 // cartNumbers(dataProducts[i]);
//                 // totalCost(dataProducts[i]);
//                 // totalCostDiscount(dataProducts[i]);
//                 // localStorage.setItem("productsInCart", JSON.stringify(cartItems));
//             }
//     })
// }

