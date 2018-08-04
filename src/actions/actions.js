export const logIn = () => ({ type: "LOGIN" });
export const logOut = () => ({ type: "LOGOUT" });
export const addPikka = ({id, name, caption, url}) => ({ type: "ADD_PIKKA", pikka: {id,name,caption,url}  });