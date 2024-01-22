import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const RecuperarData = () => {
    const fechaActual = useSelector ((state) => state.fecha); // Usar useSelector para obtener el estado
    const NombreActual = useSelector((state) => state.nombre);
  return (
    <div>
        <h6>fecha: {fechaActual.fecha}</h6>
        <h6>nombre: {NombreActual.nombre}</h6>
    </div>
  )
}
export default RecuperarData