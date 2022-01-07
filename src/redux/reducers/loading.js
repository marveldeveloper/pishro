import { cloneDeep } from "lodash";
const loading = [];
export default function reducer(state = loading, action) {
  const newLoading = cloneDeep(state);
  switch (action.type) {
    case "PUSH_LOADING":
      newLoading.push("");
      return newLoading;
    case "POP_LOADING":
      newLoading.pop();
      return newLoading;
    default:
      return state;
  }
}
