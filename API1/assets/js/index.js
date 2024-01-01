// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//             .catch(err => console.log("THERE IS A PROBLEM WITH THE INTERNET"))

            async function GetAllMovies() {
                console.log("hello")
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json(); // error 
                return data;
              }

   const Products = await GetAllMovies();
console.log(Products);


for (let i = 0; i < Products.length; i++) {

  let prd = `<div class="card" style="width: 18rem;">
<img src="${Products[i].image}" class="card-img-top" alt="..." width="100px" height="100px">
<div class="card-body">
  <h5 class="card-title">${Products[i].title}</h5>
  <p class="card-text">${Products[i].description}.</p>
  <a href="#" class="btn btn-primary">Show Product</a>
</div>
</div>`;

  document.getElementById("demo").innerHTML += prd;
}