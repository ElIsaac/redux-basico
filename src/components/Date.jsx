// components/DatePicker.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DatePicker = () => {
  const dispatch = useDispatch();
  const fechaActual = useSelector((state) => state.fecha); // Usar useSelector para obtener el estado

  const handleClick = () => {
    const nuevaFecha = Date.now();
    actualizarFecha(nuevaFecha, dispatch);
  };
  
  return (
    <div>
      <p>
        Fecha actual:{" "}
        {fechaActual && fechaActual.fecha ? fechaActual.fecha : "No definido"}
      </p>
      <button onClick={handleClick}>Actualizar Fecha</button>
    </div>
  );
};

const actualizarFecha = (nuevaFecha, dispatch) => {
  dispatch({ type: "ACTUALIZAR_FECHA", payload: nuevaFecha });
};

export default DatePicker;
