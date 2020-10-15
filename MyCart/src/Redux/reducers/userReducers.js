const userState = {
  user: {
    userName: "",
    email: "",
    password: "",
    isLoggedIn: false
  }
};

const userReducers = (state = userState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case "REGISTER":
      var { email, password, userName } = action.payload; 
      stateCopy.user.userName = userName;
      stateCopy.user.email = email;
      stateCopy.user.password = password;
      return stateCopy;

    case "LOGIN":
      email = action.payload.email;
      password = action.payload.password;
      if (
        email !== stateCopy.user.email ||
        password !== stateCopy.user.password
      ) {
        alert("wrong credentials");
        return stateCopy;
      }
      stateCopy.user.isLoggedIn = true;
      action.payload.history.push("/products");
      return stateCopy;

    case "LOGOUT":
      stateCopy.user.isLoggedIn = false;
      alert("You have successfully logged out");
      window.location.replace("/products");
      return stateCopy;

    default:
      return state;
  }
};

export { userReducers };
