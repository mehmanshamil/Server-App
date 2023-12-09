document.getElementById("close").addEventListener("click", closedfnc)

function closedfnc() {
    document.getElementById("header").style.display = 'none'
}
let main = document.getElementById("products")
let page = 1;
let limit = 4;
let db;
document.querySelector(".ldm").addEventListener("click",getAPi)
async function getAPi() {
    let skip = (page - 1) * limit
    let response = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/products?page=${page}&skip=${skip}&limit=${limit}`)
    db = response.data;
    db.forEach((item) => {
        let div = document.createElement("div");
        div.className = 'box'
        div.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="addToCart(${item.id})">Add To Cart</button>
        `
        main.appendChild(div)
    })
}
getAPi()
function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart);
}