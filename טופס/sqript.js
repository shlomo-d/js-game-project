console.log(1);
// פונקציה לבדיקת משתמש קיים
function ifTheUserExists(name, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.name === name && user.password === password);
}
// פונקציה לרישום משתמש חדש
function signUp() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const nameError = document.getElementById("nameError");
  const passwordError = document.getElementById("passwordError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  let valid = true;
  if (!name) {
    nameError.style.display = "inline";
    valid = false;
  } else {
    nameError.style.display = "none";
  }
  if (!password) {
    passwordError.style.display = "inline";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }
  if (!email || !validateEmail(email)) {
    emailError.style.display = "inline";
    valid = false;
  } else {
    emailError.style.display = "none";
  }
  if (!phone || !validatePhone(phone)) {
    phoneError.style.display = "inline";
    valid = false;
  } else {
    phoneError.style.display = "none";
  }
  if (valid) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(user => user.name === name)) {
      document.getElementById("message").innerHTML = "<div>User exists! Please log in.</div>";
    } else {
      users.push({ name, password, email, phone });
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("message").innerHTML = "<div>User registered successfully!</div>";
      return true;
    }
  }
  return false;
}
// פונקציה לבדוק אם המשתמש כבר קיים ולבצע התחברות
function logIn() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  if (name === "" || password === "") {
    alert("Fill in the fields!!");
  } else {
    const user = ifTheUserExists(name, password);
    if (user) {
      alert("Welcome back! Logged in successfully.");
    } else {
      document.getElementById("extraFields").style.display = "block";
      alert("User not found. sign up.");
    }
  }
  window.location.replace("/kishur.html");
}
function resetForm() {
  document.getElementById("loginForm").reset();
  document.getElementById("extraFields").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

let tt = document.getElementById("tt");
tt.style.color = "red";
