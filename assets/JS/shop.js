document.getElementById("close").addEventListener("click", closedfnc);

  function closedfnc() {
    document.getElementById("products").style.display = 'none';
  }

  let main = document.getElementById("products");

  function getData() {
    main.innerHTML = '';
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    data.forEach((item, index) => {
      let div = document.createElement("div");
      div.className = 'box';
      div.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="removeCart(${index})">Remove to Cart</button>
      `;
      main.appendChild(div);
    });
  }

  function removeCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    getData();
  }

  let incr = document.getElementById("incr");
  let decr = document.getElementById("decr");

  incr.addEventListener("click", getFilterIncrmnt);
  decr.addEventListener("click", getFilterDecrmnt);

  function getFilterIncrmnt() {
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    let incr = data.sort((a, b) => a.price - b.price);
    displayProducts(incr);
  }

  function getFilterDecrmnt() {
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    let decr = data.sort((a, b) => b.price - a.price);
    displayProducts(decr);
  }

  function displayProducts(products) {
    main.innerHTML = '';
    products.forEach((item, index) => {
      let div = document.createElement("div");
      div.className = 'box';
      div.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h3>${item.price}$</h3>
        <button onclick="removeCart(${index})"> Remove to Cart</button>
      `;
      main.appendChild(div);
    });
  }

  getData();
//   search
let btn = document.getElementById('btn').addEventListener('click', arastir);

function arastir(e) {
    e.preventDefault();

    let inp = document.getElementById("src");
    let val=inp.value;
    main.innerHTML = '';
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    let valData = data.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()));
    valData.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = 'box';
        div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>${item.price}$</h3>
            <button onclick="removeCart(${index})">Sepetten Çıkar</button>
        `;
        main.appendChild(div);
    });
}
