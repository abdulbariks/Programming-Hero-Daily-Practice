const submitBtn = () => {
  console.log("click");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  console.log(name, email, age);

  const data = { name, email, age };
  localStorage.setItem("user", JSON.stringify(data));
  const getlocalStorageUser = localStorage.getItem("user");
  console.log(JSON.parse(getlocalStorageUser));
  const getUser = JSON.parse(getlocalStorageUser);
  document.getElementById("show-user").innerHTML = `
    <p>User Name: ${getUser.name}</p>
    <p>User Email: ${getUser.email}</p>
    <p>User Age: ${getUser.age}</p>
      `;
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
};

const getlocalStorageUser = localStorage.getItem("user");
console.log(JSON.parse(getlocalStorageUser));
const getUser = JSON.parse(getlocalStorageUser);
document.getElementById("show-user").innerHTML = `
  <p>User Name: ${getUser.name}</p>
  <p>User Email: ${getUser.email}</p>
  <p>User Age: ${getUser.age}</p>
    `;

const clearBtn = () => {
  localStorage.clear();
};
