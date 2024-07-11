
const initialState = {
    isDrawerOpen: false,
  };
  
  const drawerReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'SET_DRAWER_OPEN':
        return {
          ...state,
          isDrawerOpen: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default drawerReducer;