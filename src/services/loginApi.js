export const login = (userName, password) => {
  console.log(password, 'password')
  fetch(`http://localhost:3000/login?userName=${userName}&password=${password}`)
    .then((res) => res.json())
    .then((data) => { return data; })
    .catch((err) => {
      console.log("error", err);
    });
}

