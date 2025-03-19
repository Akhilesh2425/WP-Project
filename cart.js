document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        let cartTable = document.getElementById("cart-items");
        let totalPrice = 0;
        cartTable.innerHTML = "";
    
        cart.forEach((item, index) => {
            let row = `<tr>
                <td><img src="${item.image}" alt="${item.title}" width="50"></td>
                <td>${item.title}</td>
                <td>Rs.${item.price}</td>
                <td>${item.quantity}</td>
                <td><button onclick="removeFromCart(${index})">Remove</button></td>
            </tr>`;
            cartTable.innerHTML += row;
            totalPrice += item.price * item.quantity;
        });
    
        document.getElementById("total-price").innerText = `Total Price: Rs.${totalPrice}`;
    }
    window.addToCart = function (title, image, price) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let found = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].title === title) {
                cart[i].quantity += 1;
                found = true;
                break;
            }
        }
        if (!found) {
            cart.push({ title, image, price, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${title} added to cart!`);
    };
    window.removeFromCart = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    };
    if (document.getElementById("cart-items")) {
        updateCart();
    }
});
