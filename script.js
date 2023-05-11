window.onload = function (){

    fetch("products.json")
    .then(response => response.json())
    .then(data=>{
        productsHTML=''
for(let i =0; i<data.length; i++){
    let item = data[i]

    let product = `

    <div class="product">

    <div class="row1">
            <img src="${item.img}" >
    </div>

    <div class="row2">
            <h2>            ${item.title}
            </h2>
    </div>

    <div class="row3">
            <h2>            ${item.desc}
            </h2>
    </div>

    <div class="row4">
            <h2>${item.price}</h2>
    </div>
        

    </div>

    `
    console.log(product)

    productsHTML += product

}


    let products = document.getElementsByClassName("products")[0]
    products.innerHTML = productsHTML
    })
    .catch(err=> console.log(err))
}