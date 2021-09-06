//product-tab-list

var tabList = document.getElementById("product-tab-list-id");
if (tabList !== null) {
    tabList.innerHTML += `
        <ul class="product-tab-menu">
            <li class="tab-item">FEATURED</li>
            <li class="tab-item">NEW ARRIVALS</li>
            <li class="tab-item">ON SALE</li>
        </ul>`
}
export var dataProducts = [
    {
        id: '0',
        img: 'img/pr-01.jpg',
        name: 'Shoes Huarache – TT100',
        price: [145],
        color: ['blue', 'cyan']
    },
    {
        id: '1',
        img: 'img/pr-03.jpg',
        name: 'SwimZip Men\'s Long Sleeve Zipper',
        price: [65],
        color: ''
    },
    {
        id: '2',
        img: 'img/pr-04.jpg',
        name: 'Men\'s Tops Long Sleeve Shirts',
        price: [99, 65],
        color: ['pink', 'black', 'blue']
    },
    {
        id: '3',
        img: 'img/pr-07.jpg',
        name: 'Elip Power Max',
        price: [35],
        color: ''
    },
    {
        id: '4',
        img: 'img/pr-09.jpg',
        name: 'Men\'s Sports Jogging Workout Shorts',
        price: [29],
        color: ['blue', 'black']
    },
    {
        id: '5',
        img: 'img/pr-11.jpg',
        name: 'Men\'s Long Sleeve Rash Guard',
        price: [99, 65],
        color: ['black', 'blue', 'pink']
    },
    {
        id: '6',
        img: 'img/pr-14.jpg',
        name: 'Calvin Klein Workout Shorts',
        price: [29],
        color: ['red', 'black']
    },
    {
        id: '7',
        img: 'img/pr-02.jpg',
        name: 'Shoes Huarache',
        price: [145],
        color: ['cyan', 'blue']
    }
];

function productPrice(data, pProductPrice, item) {
    var productPrice = data[item].price;
    var productPriceLength = productPrice.length;
    if (productPriceLength > 0) {
        if (productPriceLength === 1) {
            pProductPrice.innerText = "$" + data[item].price[0] + ".00";
        } else {
            for (var j = 0; j < 2; j++) {
                var spanProductPrice = document.createElement("span");
                if (j === 0) {
                    spanProductPrice.innerText = "$" + data[item].price[j] + ".00";
                }
                if (j === 1) {
                    spanProductPrice.innerText = "$" + data[item].price[j] + ".00";
                }
                pProductPrice.appendChild(spanProductPrice);
            }

        }

    }
}
function productColor(data, ulProductColor, item) {
    var productColors = data[item].color;
    var arrColorLength = productColors.length;
    for (var i = 0; i < arrColorLength; i++) {
        var liProductColor = document.createElement("li");
        if (productColors[i] === "black") {
            liProductColor.classList.add("product-color-black")
        }
        if (productColors[i] === "blue") {
            liProductColor.classList.add("product-color-blue");
        }
        if (productColors[i] === "pink") {
            liProductColor.classList.add("product-color-pink");
        }
        if (productColors[i] === "red") {
            liProductColor.classList.add("product-color-red");
        }
        if (productColors[i] === "cyan") {
            liProductColor.classList.add("product-color-cyan");
        }
        ulProductColor.appendChild(liProductColor);
    }
}
var ulProductList = document.getElementById("product-list");
if (ulProductList !== null) {
    for (var i = 0; i < dataProducts.length; i++) {
        var liProductItem = document.createElement("li");
        liProductItem.classList.add("product-item");
        //product-id
        var inpProductId = document.createElement("input");
        inpProductId.setAttribute("id", "product-id")
        inpProductId.setAttribute("type", "hidden");
        //div-img
        var divProductItemImg = document.createElement("div");
        divProductItemImg.classList.add("product-item-img");
        var aProductImg = document.createElement("a");
        var productImg = document.createElement("img");
        //div-product-info
        var divProductInfo = document.createElement("div");
        divProductInfo.classList.add("product-info");
        var h3ProductName = document.createElement("h3");
        h3ProductName.classList.add("product-name");
        var pProductPrice = document.createElement("p");
        pProductPrice.classList.add("product-price");
        var ulProductColor = document.createElement("ul");
        ulProductColor.classList.add("product-color", "flex-center");

        //Hien thi sp
        inpProductId.value = dataProducts[i].id;
        productImg.src = dataProducts[i].img;
        h3ProductName.innerText = dataProducts[i].name;
        productPrice(dataProducts, pProductPrice, i);
        productColor(dataProducts, ulProductColor, i);

        //div-add-to-cart
        var divAddTocart = document.createElement("div");
        var btnAddToCart = document.createElement("button");
        btnAddToCart.classList.add("btn-add-to-cart");
        var txtAddToCart = document.createTextNode("Add to cart");
        btnAddToCart.appendChild(txtAddToCart);
        divAddTocart.appendChild(btnAddToCart);

        //appenchild id
        liProductItem.appendChild(inpProductId);
        //appendChild img
        aProductImg.appendChild(productImg);
        divProductItemImg.appendChild(aProductImg);
        liProductItem.appendChild(divProductItemImg);
        // appendChild Info
        divProductInfo.appendChild(h3ProductName);
        divProductInfo.appendChild(pProductPrice);
        divProductInfo.appendChild(ulProductColor);
        liProductItem.appendChild(divProductInfo);
        //appendChild Addtocart
        liProductItem.appendChild(divAddTocart);
        // appendChild li.item
        ulProductList.appendChild(liProductItem);
    }
}


//Tạo sự kiện add-to-cart
var btnCartList = document.querySelectorAll('.btn-add-to-cart');

//chạy onLoadCartNumber đầu tiên.
document.addEventListener("DOMContentLoaded", onLoadCartNumbers);

var cartListLength = btnCartList.length;
for (let i = 0; i < cartListLength; i++) {
    btnCartList[i].addEventListener('click', function () {
        cartNumbers(dataProducts[i]);
        // totalCost(dataProducts[i]);
        // totalCostDiscount(dataProducts[i]);
    })
}

//tạo và hiển thị number trên icon cart
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
    //thêm các sp vào storage
    setItemInCart(product);
}

// //load page vẫn giữu nguyên cart
export function onLoadCartNumbers() {
    var cartNumberValue = localStorage.getItem('cartNumbers');
    var productNumbers = parseInt(cartNumberValue);
    var productNumberInIcon = document.querySelector('.fa-shopping-cart span');

    if (productNumbers) {
        productNumberInIcon.textContent = productNumbers;
    }
}

//set SP và quantity
function setItem(product, quantity) {
    var itemInCart = {
        id: product.id,
        img: product.img,
        name: product.name,
        price: product.price[0],
        priceSale: product.price[1],
        color: product.color,
        quantity: quantity
    };
    return itemInCart;
}

//Thêm 1 item vào storage
export function setItemInCart(product) {
    //lấy ds cartItem trong storage và đưa về kiểu obj
    var cartItemsString = localStorage.getItem('productsInCart');
    var cartItems = JSON.parse(cartItemsString);

    //Nếu cartItems == null thì set item mới có quantity = 1
    if (cartItems === null) {
        cartItems = [setItem(product, 1)];
    }
    //Nếu đã có cartItems thì duyệt qua từng item. 
    //Kiểm tra id của item đó có bằng id của product dược add không.
    //Kiểm tra xem product add vào đã tồn tại hay chưa.
    // Nếu có thì tăng quantity lên 1 và thoát khỏi vòng lặp
    //Nếu chưa thì set quantity cho nó bằng 1
    else {
        var checkProduct = false;
        //Product đã tồn tại
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === product.id) {
                cartItems[i].quantity = cartItems[i].quantity + 1;
                checkProduct = true;
                break;
            }
        }
        //Product chưa tồn tại trong cartItem
        if (!checkProduct) {
            cartItems.push(setItem(product, 1));
        }
    }

    //set lại productInCart vào storage
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



