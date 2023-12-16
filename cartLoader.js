$(document).ready(function () {
    displayCartItems();
});

function displayCartItems() {
    // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // const cartItemsList = $('#cartItemsList');
    
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueCartItems = Array.from(new Set(cartItems));
    const cartItemsList = $('#cartItemsList');


    cartItemsList.empty();

    if (cartItems.length === 0) {
        cartItemsList.append('<li>Your cart is empty</li>');
    } else {
        cartItems.forEach(function (item) {
            const imageUrl = item.imageUrl;
            const parentLabel = item.parentLabel;
            let name = ''
            let price = 0
            let description = ''
            if (parentLabel == 'radio-1' || parentLabel == 'radio-2' || parentLabel == 'radio-3') {
                name = 'Spiderman'
                price = 19.99
                description = 'Lego action figure of Spiderman'
            }
            else if (parentLabel == 'radio-1nw' || parentLabel == 'radio-2nw' || parentLabel == 'radio-3nw') {
                name = 'Nightwing'
                price = 9.99
                description = 'Lego action figure of Robin a.k.a Nightwing'
            }
            else if (parentLabel == 'radio-1Batman' || parentLabel == 'radio-2Batman' || parentLabel == 'radio-3Batman') {
                name = 'Batman'
                price = 59.99
                description = 'Lego action figure of Batman a.k.a The Dark Knight'
            }

            const listItem = $('<li class="list-group-item item"></li>');
            listItem.append(`<img src="${imageUrl}" class="img-fluid rounded" width="70" height="70">`);
            const details = $('<div class="item-details"></div>');
            details.append(`<p class="mb-1">${name}</p>`);
            details.append(`<p class="mb-1">${price}</p>`);
            details.append(`<p class="mb-0">${description}</p>`);
            listItem.append(details);

            cartItemsList.append(listItem);



        });
    }
}
