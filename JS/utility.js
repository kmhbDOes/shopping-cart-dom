// function getData(elementName, elementID) {
//     const elementName = document.getElementById(elementID).innerText;
// }

function displayData(productName, productPrice, productQuantity, priceTotal) {
    // Create dynamic table
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    `;
    container.appendChild(tr);
}