//ADD TO CART
//tạo list các btn-add-to-cart
var cartList = document.querySelectorAll('.btn-add-to-cart');

var dataProducts = [
    {
        id: '0',
        img: 'img/pr-01.jpg',
        name: 'Shoes Huarache – TT100',
        price: [145],
        color: ['blue', 'cyan'],
        itemInCart: 0
    },
    {
        id: '1',
        img: 'img/pr-03.jpg',
        name: 'SwimZip Men\'s Long Sleeve Zipper',
        price: [65],
        color: '',
        itemInCart: 0
    },
    {
        id: '2',
        img: 'img/pr-04.jpg',
        name: 'Men\'s Tops Long Sleeve Shirts',
        price: [99, 65],
        color: ['pink', 'black', 'blue'],
        itemInCart: 0
    },
    {
        id: '3',
        img: 'img/pr-07.jpg',
        name: 'Elip Power Max',
        price: [35],
        color: '',
        itemInCart: 0
    },
    {
        id: '4',
        img: 'img/pr-09.jpg',
        name: 'Men\'s Sports Jogging Workout Shorts',
        price: [29],
        color: ['blue', 'black'],
        itemInCart: 0
    },
    {
        id: '5',
        img: 'img/pr-11.jpg',
        name: 'Men\'s Long Sleeve Rash Guard',
        price: [99, 65],
        color: ['black', 'blue', 'pink'],
        itemInCart: 0
    },
    {
        id: '6',
        img: 'img/pr-14.jpg',
        name: 'Calvin Klein Workout Shorts',
        price: [29],
        color: ['red', 'black'],
        itemInCart: 0
    },
    {
        id: '7',
        img: 'img/pr-02.jpg',
        name: 'Shoes Huarache',
        price: [145],
        color: ['cyan', 'blue'],
        itemInCart: 0
    }
];

document.addEventListener("DOMContentLoaded", onLoadCartNumbers);

var cartListLength = cartList.length;
for (let i = 0; i < cartListLength; i++) {
    cartList[i].addEventListener('click', function () {
        cartNumbers(dataProducts[i]);
        totalCost(dataProducts[i]);
        totalCostDiscount(dataProducts[i]);
    })
}
//load page vẫn giữu nguyên cart
function onLoadCartNumbers() {
    var cartNumberValue = localStorage.getItem('cartNumbers');
    var productNumbers = parseInt(cartNumberValue);
    var productNumberInIcon = document.querySelector('.fa-shopping-cart span');

    if (productNumbers) {
        productNumberInIcon.textContent = productNumbers;
    }
}

//icon number in cart
function cartNumbers(product) {
    var cartNumberValue = localStorage.getItem('cartNumbers');
    var productNumbers = parseInt(cartNumberValue);
    var productNumberInIcon = document.querySelector('.fa-shopping-cart span');

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        productNumberInIcon.textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        productNumberInIcon.textContent = 1;
    }
    setItem(product);
}
function setItem(product) {
    var cartItemsString = localStorage.getItem('productsInCart');
    var cartItems = JSON.parse(cartItemsString);
    var lengthCartItems = localStorage.getItem('lengthCartItems');

    if (cartItems !== null) {
        lengthCartItems = parseInt(lengthCartItems);
        if (cartItems[product.id] === undefined) {
            cartItems = {
                ...cartItems,
                [product.id]: product
            };
        }
        localStorage.setItem('lengthCartItems', lengthCartItems + 1);
        cartItems[product.id].itemInCart += 1;
    } else {
        product.itemInCart = 1;
        localStorage.setItem('lengthCartItems', 1);
        cartItems = {
            [product.id]: product,
        };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    var priceLength = product.price.length;
    var cartCostString = localStorage.getItem('totalCost');

    if (cartCostString !== null) {
        var cartCost = parseInt(cartCostString);
        if (priceLength === 2) {
            localStorage.setItem('totalCost', cartCost + product.price[1]);
        } else {
            localStorage.setItem('totalCost', cartCost + product.price[0]);
        }
    } else {
        if (priceLength === 2) {
            localStorage.setItem('totalCost', product.price[1]);
        } else {
            localStorage.setItem('totalCost', product.price[0]);
        }
    }

}
function totalCostDiscount(product) {
    var priceLength = product.price.length;
    var totalCostDiscountString = localStorage.getItem('totalCostDiscount');

    if (totalCostDiscountString !== null) {
        var totalCostDiscount = parseInt(totalCostDiscountString);
        if (priceLength === 2) {
            localStorage.setItem('totalCostDiscount', totalCostDiscount + product.price[1]);
        } else {
            localStorage.setItem('totalCostDiscount', totalCostDiscount);
        }
    } else {
        if (priceLength === 2) {
            localStorage.setItem('totalCostDiscount', product.price[1]);
        } else {
            localStorage.setItem('totalCostDiscount', 0);
        }
    }

}

function addItemCartToDOM() {
    var cartItemsString = localStorage.getItem("productsInCart");
    var cartItems = JSON.parse(cartItemsString);
    var cartList = document.querySelector('.products-cart-container');
    var totalCost = parseInt(localStorage.getItem('totalCost'));
    var totalCostDisCount = parseInt(localStorage.getItem('totalCostDiscount'));

    if (cartItems && cartList) {
        cartList.innerHTML = '';
        Object.values(cartItems).map(function (item) {
            cartList.innerHTML += `
            <div class="products-cart align-center border-bottom-cart">
                <input value="${item.id}" id="product-id-cart">
                <div class="product-cart-actions align-center" action="remove">
                    <i class="far fa-trash-alt"></i>
                </div>
                <div class="product-cart-title align-center">
                    <img src="./${item.img}" id="image">
                    <span class="product-cart-name">${item.name}</span>
                </div>
                <div class="product-cart-price align-center">
                    $${item.price[0]},00
                </div>
                <div class="product-cart-color align-center">
                    ${item.color}
                </div>
                <div class="product-cart-quantity align-center">
                    <i class="fas fa-caret-left"></i>
                    <span>${item.itemInCart}</span>
                    <i class="fas fa-caret-right"></i>
                </div>
                <div class="product-total align-center">
                    $${item.itemInCart * item.price[0]},00
                </div>
            </div>
            `;
        });

        cartList.innerHTML += `
            <div class="cost-container">
                <h4 class="cost-title">
                    Basket Total
                </h4>
                <h4 class="cost">
                    $${totalCost},00
                </h4>
            </div>
            <div class="cost-container color-red">
                <h4 class="cost-title border-bottom-cart">
                    Discount Total
                </h4>
                <h4 class="cost border-bottom-cart">
                    $${totalCostDisCount},00
                </h4>
            </div>
            <div class="cost-container color-blue">
                <h4 class="cost-title">
                    Pay Total
                </h4>
                <h4 class="cost">
                    $${totalCost - totalCostDisCount},00
                </h4>
            </div>
        `;
    }
}
addItemCartToDOM();

var divsItem = document.querySelectorAll(".products-cart");
var cartItems = (JSON.parse(localStorage.getItem('productsInCart')) || []);
var lentghCartItems = localStorage.getItem('lengthCartItems');

for (let i = 0; i < divsItem.length; i++) {
    divsItem[i].querySelector("[action='remove']").addEventListener('click', function () {
        for (let item = 0; item < lentghCartItems; item++) {
            var idProduct = divsItem[item].querySelector("#product-id-cart").value;
            var idCartLocal = cartItems[idProduct].id;
            if (idCartLocal === idProduct) {
                localStorage.removeItem('productsInCart');
                divsItem[item].remove();
                // cartNumbers(dataProducts[i]);
                // totalCost(dataProducts[i]);
                // totalCostDiscount(dataProducts[i]);
                // localStorage.setItem("productsInCart", JSON.stringify(cartItems));
            }
        }
    })
}


