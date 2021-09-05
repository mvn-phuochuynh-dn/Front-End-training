//product-tab-list
function productTabList() {
    var productTabList = document.getElementById("product-tab-list-id");
    var ulTabList = document.createElement("ul");
    ulTabList.classList.add("product-tab-menu");

    for (var i = 0; i < 3; i++) {
        var liTabItem = document.createElement("li");
        liTabItem.classList.add("tab-item");
        if (i === 0) {
            var liText = document.createTextNode("FEATURED");
        }
        if (i === 1) {
            var liText = document.createTextNode("NEW ARRIVALS");
        }
        else {
            var liText = document.createTextNode("ON SALE");
        }

        liTabItem.appendChild(liText);
        ulTabList.appendChild(liTabItem);
    }
    productTabList.appendChild(ulTabList)
}
var dataProducts = [
    {
        id: '0',
        img: 'img/pr-01.jpg',
        name: 'Shoes Huarache – TT100',
        price: [145],
        color: ['blue', 'cyan'],
        itemInCart: false
    },
    {
        id: '1',
        img: 'img/pr-03.jpg',
        name: 'SwimZip Men\'s Long Sleeve Zipper',
        price: [65],
        color: '',
        itemInCart: false
    },
    {
        id: '2',
        img: 'img/pr-04.jpg',
        name: 'Men\'s Tops Long Sleeve Shirts',
        price: [99, 65],
        color: ['pink', 'black', 'blue'],
        itemInCart: false
    },
    {
        id: '3',
        img: 'img/pr-07.jpg',
        name: 'Elip Power Max',
        price: [35],
        color: '',
        itemInCart: false
    },
    {
        id: '4',
        img: 'img/pr-09.jpg',
        name: 'Men\'s Sports Jogging Workout Shorts',
        price: [29],
        color: ['blue', 'black'],
        itemInCart: false
    },
    {
        id: '5',
        img: 'img/pr-11.jpg',
        name: 'Men\'s Long Sleeve Rash Guard',
        price: [99, 65],
        color: ['black', 'blue', 'pink'],
        itemInCart: false
    },
    {
        id: '6',
        img: 'img/pr-14.jpg',
        name: 'Calvin Klein Workout Shorts',
        price: [29],
        color: ['red', 'black'],
        itemInCart: false
    },
    {
        id: '7',
        img: 'img/pr-02.jpg',
        name: 'Shoes Huarache',
        price: [145],
        color: ['cyan', 'blue'],
        itemInCart: false
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
function productList(data, ulProductList) {

    for (var i = 0; i < data.length; i++) {
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
        inpProductId.value = data[i].id;
        productImg.src = data[i].img;
        h3ProductName.innerText = data[i].name;
        productPrice(data, pProductPrice, i);
        productColor(data, ulProductColor, i);

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

function addProductList(data) {
    var ulProductList = document.getElementById("product-list");
    productList(data, ulProductList);
}





