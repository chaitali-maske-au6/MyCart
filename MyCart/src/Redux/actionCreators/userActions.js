const LOGIN = user => ({ type: "LOGIN", payload: user });
const REGISTER = user => ({ type: "REGISTER", payload: user });
const LOGOUT = () => ({ type: "LOGOUT", payload: "" });

export { LOGIN, REGISTER, LOGOUT };
 