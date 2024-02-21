import menData from "../config/data.js";


document.addEventListener("DOMContentLoaded", function () {
  var proWrapper = document.getElementById('pro-wrapper');

  console.log("Pro card")


  menData.forEach((product) => {
    const productTemplate = createProductTemplate(product);
    // Append the template to the product container
    proWrapper.innerHTML += productTemplate;

  })

})


// Function to create product HTML template
function createProductTemplate(product) {
  return `
  <div class="pro-card w-[290px] h-[400px] bg-slate-200 p-3 rounded-md">
    <img
      class="h-[290px] rounded-3xl w-full shadow-lg shadow-gray-400"
      src="/public/assets/product/m1.webp"
      alt="pro1"
    />

    <div class="mt-4">
      <h1 class="text-gray-800 font-semibold">${product.title.length > 25 ? product.title.slice(0, 25) + '...' : product.title}</h1>
      <h2 class="text-gray-500">${product.category}</h2>
      <span class="text-teal-600 text-xl font-bold"
        ><b class="text-gray-600">Rs. </b>${product.price}</span
      >
    </div>
  </div>  
  `;
}

