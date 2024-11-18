document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    let total = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="50"> ${item.name}</td>
            <td>$${item.price}</td>
            <td>1</td>
            <td>$${item.price}</td>
            <td><button class="btn btn-danger" onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
        total += parseFloat(item.price);
    });

    cartTotalElement.textContent = total.toFixed(2);
});

// Clear cart
function clearCart() {
    localStorage.removeItem('cart');
    window.location.reload();
}
function buyItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        // Nếu giỏ hàng có sản phẩm
        alert("Mua thành công!");
        // Xóa giỏ hàng sau khi mua
        clearCart();
    } else {
        // Nếu giỏ hàng không có sản phẩm
        alert("Giỏ hàng của bạn rỗng. Vui lòng thêm sản phẩm vào giỏ hàng.");
    }
}

// Remove item from cart
function removeFromCart(productName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
}
