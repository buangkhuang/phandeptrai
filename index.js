function addToCart(button) {
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');
    const productImage = button.getAttribute('data-image');

    const cartItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'giohang.html';
}
