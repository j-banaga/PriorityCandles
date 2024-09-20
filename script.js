const products = [
  {
    name: "Basil & Good Fortune Mandarin",
    price: 18.5,
    description: "Test description 1.0",
    image: ["https://picsum.photos/200"],
  },
  {
    name: "Basil & Good Fortune Mandarin Jar",
    price: 38.0,
    description: "Test description 2.0",
    image: ["https://picsum.photos/200"],
  },
  {
    name: "Blossoming Jasmine & Pomelo",
    price: 18.5,
    description: "Test description 3.0",
    image: ["https://picsum.photos/200"],
  },
  {
    name: "Delicate White Team & Ginger",
    price: null,
    description: "Test description 4.0",
    image: ["https://picsum.photos/200"],
  },
];

const featuredProducts = document.getElementById("featuredProducts-container");

featuredProducts.innerHTML = products
  .map((product) => {
    const { name, price, description, image } = product;

    const productName = name || "Unavailable Product";
    const productPrice =
      typeof price === "number" && price > 0
        ? `$${price.toFixed(2)}`
        : "Out of stock";
    const productDescription = description || "";
    const className = name.split(" ").join("-").toLowerCase();
    return `
    <div class="${className}-container product-card">
        <img src="${image.length >= 1 ? image : image[0]}" alt='${name}'/>
        <div class="product-mini-description">
            <h2>${productName}</h2>
            <p>${productPrice}</p>
        </div>
    </div>`;
  })
  .join();
