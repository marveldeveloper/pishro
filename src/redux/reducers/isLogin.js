const isLogin = localStorage.getItem("token") ?? false;
export default function reducer(state = isLogin, action) {
  switch (action.type) {
    case "SET_IS_LOGIN":
      return action.data;
    default:
      return state;
  }
}
