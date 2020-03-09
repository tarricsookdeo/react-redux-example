const isAuthenticatedReducer = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return !state;
    default:
      return state;
  }
};

export default isAuthenticatedReducer;
