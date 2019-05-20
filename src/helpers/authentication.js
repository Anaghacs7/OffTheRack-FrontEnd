function isLoggedIn(){
    return localStorage.getItem("token") !== null;
  }
  function userLogout(){
    //localStorage.removeItem("token");
    //localStorage.removeItem("name");
    localStorage.clear();
  }
  function saveUser({token, name}){
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
  }
  function getToken(){
    if (isLoggedIn()){
      return localStorage.getItem("token");
    }
  }
  function userInfo(){
    if (localStorage.getItem("name") !== null){
      return localStorage.getItem("name")
    } else
    return null;
  }
  function userEmail(){
    if (localStorage.getItem("email") !== null){
      return localStorage.getItem("email")
    } else
    return null;
  }
  export {
    isLoggedIn,
    saveUser,
    userInfo,
    userLogout,
    getToken,
    userEmail
  }