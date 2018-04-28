const auth = (state={} , action) => {
    switch (action.type) {
      case 'ADD_TOKEN':
        return {...state, info: action.data};
      case 'REMOVE_TOKEN':
        return {...state, info: null};
      default:
        return state;
    }
  };
  
  export default auth;