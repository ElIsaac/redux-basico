// redux/nombreReducer.js
const nombreInitialState = {
    nombre: "",
  };
  
  const nombreReducer = (state = nombreInitialState, action) => {
    switch (action.type) {
      case 'ACTUALIZAR_NOMBRE':
        return {
          ...state,
          nombre: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default nombreReducer;
  