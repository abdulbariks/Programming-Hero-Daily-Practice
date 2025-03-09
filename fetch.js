fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    usersList(users);
  });

const usersList = (users) => {
  const usersCart = document.getElementById("users-cart");
  for (const user of users) {
    const div = document.createElement("div");
    div.classList.add("cart");
    div.innerHTML = `
        <h3 class="carrt-id">Name: ${user.name}</h3>
        <h2 class="cart-title">User Name: ${user.username}</h2>
        <p class="carrt-description">Email: ${user.email}</p>
        <p class="carrt-description">Address: Street: ${user.address.street}, Suite: ${user.address.suite},
         City: ${user.address.city}, Zip Code: ${user.address.zipcode}</p>
      `;
    usersCart.appendChild(div);
  }
};
