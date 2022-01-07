const showSidebar = window.innerWidth > 992;
export default function reducer(state = showSidebar, action) {
  switch (action.type) {
    case "SET_SHOW_SIDEBAR":
      return action.data;
    default:
      return state;
  }
}
