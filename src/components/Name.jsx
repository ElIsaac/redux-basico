// components/Name.js
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Name = () => {  // Cambiado aquí
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const nombreActual = useSelector((state) => state.nombre);  // Usar useSelector para obtener el estado

  const handleClick = () => {
    actualizarNombre(name, dispatch);  // Cambiado aquí
  };

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <p>Nombre actual: {nombreActual && nombreActual.nombre ? nombreActual.nombre : "No definido"}</p>

      <input onChange={handleChange} type="text" name="name" id="" />
      <button onClick={handleClick}>Enviar</button>  
    </div>
  );
};



const actualizarNombre = (nuevoNombre, dispatch) =>{
  dispatch({ type: "ACTUALIZAR_NOMBRE", payload: nuevoNombre })
}

export default Name;
