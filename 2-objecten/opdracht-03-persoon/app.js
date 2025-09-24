// Create a person object
const person = {
  name: "John Doe",
  age: 30,
  birthDate: "1995-06-15",
  gender: "Male",
  alive: true,
  hobbies: ["Reading", "Gaming", "Traveling", "Cooking"],

  // Methods
  changeName: function(newName) {
    this.name = newName;
    showPerson();
  },
  changeAlive: function(status) {
    this.alive = status;
    showPerson();
  },
  addHobby: function(hobby) {
    this.hobbies.push(hobby);
    showPerson();
  }
};

// Select the output container
const output = document.querySelector(".output");

// Function to show the person on the screen
function showPerson() {
  output.innerHTML = ""; // clear first

  // Loop through properties
  for (let key in person) {
    if (typeof person[key] !== "function") {
      const p = document.createElement("p");

      if (Array.isArray(person[key])) {
        p.textContent = `${capitalize(key)}: ${person[key].join(", ")}`;
      } else {
        p.textContent = `${capitalize(key)}: ${person[key]}`;
      }

      output.appendChild(p);
    }
  }
}

// Helper: capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// First render
showPerson();

// Example usage:
person.changeName("Jane Smith");
person.changeAlive(false);
person.addHobby("Painting");
