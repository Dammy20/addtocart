
    let divv = document.getElementById("div3")
    window.fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            getData(data)
        })
        .catch(err => {
            // console.log(err)
        }
        )
    let product;
    let show = document.getElementById("show")
    let display = true
    window.addEventListener("load", () => {
        document.querySelector(".div1").hidden = true
    })
    function showCart() {
        if (display == true) {
            document.querySelector(".div1").hidden = false;
            display = false
        } else {
            display == false
            document.querySelector(".div1").hidden = true;
            display = true
        }



    }




    function getData(data) {
        // console.log(data);
        product = data
        product.map(function (data, index) {
            let productContain = document.querySelector(".container")
            productContain.innerHTML += `
       <div class="prod-content">
          
            <div class="img-container"><img src="${data.image}"  alt="" width="40%" id="imgcon"> <button  ${data.rating.rate} id="k">3.9</button> </div>
            <div class="txt-cont">
            <span  id="text">${data.title}</span>
            <span>$${data.price}</span>
            <span  id="pank">${data.description}</span>

            <span  id="vank">Count: ${data.rating.count}</span>
            <div class="van">

            </div>
            
            </div>
            <button onclick="addtoCart(${index})" class="btn">Add to cart</button>
        </div>`




        })

    }

    let cart = []
    let added = []


    function getSum(total, num) {
        return total + Math.round(num);
    }




    function addtoCart(index) {
        cart.push(product[index])
        console.log(cart)
        show.innerHTML = cart.length
        added.push(product[index].price)
        displayCart();
    }


    function displayCart() {
        document.querySelector(".div2").innerHTML = ""
        cart.map((value, index) => {

            document.querySelector(".div2").innerHTML +=
                `
<div class="pro-content">
    <div id="div3">
        <div class="imgcart"><img src="${value.image}" alt="" width="100%" height="100%" id="imgcon" style="border-radius:8px;"></div>
        <div class="txt-item">
            <h3 id="taxt">${value.title}</h3>

            <h3 id="toxt">$${value.price}</h3>
        </div>
        <button id="btn1" onclick="removeOne(${index})">🗑</button>
    </div>
</div>
`
            document.querySelector(".div5").innerHTML =
                `<h3  id="damo">Total:${added.reduce(getSum)}</h3>`

        })

    }

    function removeOne(index) {
        cart.splice(index, 1);
        displayCart();
    }





