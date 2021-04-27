const initialState = {
  loading: false,
  recipe: { value: "" },
  msg: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "INCORRECT_DATA":
      return {
        loading: false,
        recipe: { ...state.recipe, value: "" },
        msg: "Deaaaah"
      };
    case "LOADING_SEARCH":
      return {
        ...state,
        recipe: { ...state.recipe, value: action.payload.recipe },
        loading: false
      };
    case "COMPLETED_SEARCH":
      return {
        loading: true,
        recipe: {
          ...state.recipe,
          value: state.recipe.value + action.payload.recipe
        }
      };
    default:
      return { ...state };
  }
};
