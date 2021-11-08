var main = document.getElementById("products");
    var cart = JSON.parse(localStorage.getItem("cart"));
    function show() {
     
      cart.forEach(function(product) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = product.image_url;

        let item_name = document.createElement("h1");
        item_name.textContent = product.name;

        let item_rating = document.createElement("h2");
        item_rating.textContent = product.rating;

        let item_price = document.createElement("h2");
        item_price.textContent = product.price;

        let cartBtn = document.createElement("button");
        cartBtn.innerText = "checkout";

        cartBtn.onclick = function () {
            addCart(product);
        }

        div.append(img, item_name, item_rating, item_price, cartBtn);
        main.append(div);
      });
    }
    show();