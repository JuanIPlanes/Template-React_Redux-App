export const LS = "LOADING_SEARCH",
  CS = "COMPLETED_SEARCH",
  ID = "INCORRECT_DATA";

export function setRecipe(rec) {
  return {
    type: LS,
    payload: {
      recipe: rec
    }
  };
}
export function getRecipe(rec) {
  return {
    type: ID,
    payload: {
      recipe: rec
    }
  };
}

export function recivedRecipe(recipe) {
  return {
    type: CS,
    payload: {
      recipe: recipe
    }
  };
}
