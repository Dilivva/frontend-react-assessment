export const reducer = (state, action) => {
  if (action.type === "UPDATE_HEADER") {
    return {
      ...state,
      title: action.payload.title,
      subtitle: action.payload.subtitle,
      url: action.payload.url,
    };
  }
  return state;
};
