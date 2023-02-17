let serial = 0;
document.getElementById('first-card').addEventListener('click', function () {
    serial += 1;
    // Get the data
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    displayData(productName, productPrice, productQuantity, priceTotal);

})


// Using Object from browser

document.getElementById('second-card').addEventListener('click', function (e) {
    serial += 1;

    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3];
    console.log(productQuantity);




})

