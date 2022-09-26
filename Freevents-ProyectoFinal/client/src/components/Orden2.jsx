import React from 'react'
import { useSelector } from 'react-redux';

export default function Orden2() {

    const orden = useSelector(state=>(state.ordenGenerada))

  return (
      <div>
      <h3>{orden.id}</h3>
      Orden2
      </div>
   

  )
}
