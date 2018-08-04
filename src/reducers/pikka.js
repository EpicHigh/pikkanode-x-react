export default function pikkaReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PIKKA":
      return [...state, action.pikka];
    default:
      return state;
  }
}
