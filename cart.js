let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let body = document.querySelector('.body');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listcard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity'); // Assuming you have a quantity element to update

openshopping.addEventListener('click', () => {
    body.classList.add('active'); 
});

closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id: 1, name: "nike", image: '1.png', price: 150, quantity: 1 },
    { id: 2, name: "nike", image: '1.png', price: 1880, quantity: 1 },
    { id: 3, name: "nike", image: '1.png', price: 190, quantity: 1 },
    { id: 4, name: "nike", image: '1.png', price: 1500, quantity: 1 },
    { id: 5, name: "nike", image: '1.png', price: 10, quantity: 1 },
    { id: 6, name: "shoes", image: '1.png', price: 120, quantity: 1 }
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img class="image" src="images/${value.image}" alt="">
            <div class="title">${value.name}</div>
            <div class="price">${value.price}</div>
            <button class="btn1" onclick="addToCart(${value.id})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCart(id) {
    let product = products.find(item => item.id === id);
    let itemInCart = listCards.find(item => item.id === id);
    
    if (itemInCart) {
        itemInCart.quantity++;
    } else {
        listCards.push({ ...product });
    }

    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalprice = 0;

    listCards.forEach((item) => {
        count += item.quantity;
        totalprice += item.price * item.quantity;

        if (item) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="image" src="images/${item.image}" alt=""></div>
                <div>${item.name}</div>
                <div>${item.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${item.id}, ${item.quantity - 1})">-1</button>
                    <div class="count">${item.quantity}</div>
                    <button onclick="changeQuantity(${item.id}, ${item.quantity + 1})">+1</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });

    total.innerHTML = totalprice.toLocaleString();
    quantity.innerHTML = count;
}

function changeQuantity(id, newQuantity) {
    let product = listCards.find(item => item.id === id);
    if (product) {
        if (newQuantity === 0) {
            listCards = listCards.filter(item => item.id !== id);
        } else {
            product.quantity = newQuantity;
        }
    }

    reloadCard();
}
