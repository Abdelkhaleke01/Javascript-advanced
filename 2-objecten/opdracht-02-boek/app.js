// Create a book object
const book = {
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt & David Thomas",
  publisher: "Addison-Wesley",
  year: 1999,
  sold: 1200000,
  price: "$39.99"
};

// Select the output container
const output = document.querySelector(".output");

// Loop through each property of the object and show it on the page
for (let key in book) {
  const p = document.createElement("p");
  p.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${book[key]}`;
  output.appendChild(p);
}
