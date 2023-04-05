const addToDb = id => {
    let blogCart = getShoppingCart();

    const quantity = blogCart[id];
    if (!quantity) {
        blogCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        blogCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(blogCart));
}

const getShoppingCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export {
    addToDb,
    getShoppingCart,
}