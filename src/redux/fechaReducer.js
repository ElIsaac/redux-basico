// redux/fechaReducer.js
const fechaInitialState = {
    fecha: null,
  };
  
  const fechaReducer = (state = fechaInitialState, action) => {
    switch (action.type) {
      case 'ACTUALIZAR_FECHA':
        return {
          ...state,
          fecha: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default fechaReducer;
  