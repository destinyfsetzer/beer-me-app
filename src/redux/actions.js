const loginUser = (User) => {
  return function (dispatch) {
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userLoaded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

//This is new
const addUser = (User) => {
  return function (dispatch) {
    fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userAdded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

const userLoaded = (data) => {
  return {
    type: "LOGIN",
    value: data,
  };
};

const userAdded = (data) => {
  return {
    type: "ADD_USER",
    value: data,
  };
};
const logoutUser = (User) => {
  document.cookie = "loggedIn=false; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  return {
    type: "LOGOUT",
    value: User,
  };
};

export { loginUser, logoutUser, addUser };
