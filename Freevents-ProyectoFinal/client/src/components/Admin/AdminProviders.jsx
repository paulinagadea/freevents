import * as React from 'react';
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function AdmiProviders() {

const [proveedores, setProveedores] = useState([])
    
  const endpoint = 'http://localhost:3001/providers';
  // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setProveedores(data)
    })
  }

  const columns = [{
    name: 'id',
    label: 'id'
  },
  {
    name: 'name',
    label: 'Nombre'
  },
  {
    name: 'address',
    label: 'Direccion'
  },
  {
    name: 'cuit',
    label: 'Cuit'
  },
  {
    name: 'email',
    label: 'Email'
  },
  {
    name: 'telefono',
    label: 'Teléfono'
  },
  {
    label: 'Fecha de creación',
    name: 'createdAt'
},
  {
    name: 'status',
    label: 'Estado'
  }
  
]
  useEffect(() => {
    getData()
}, [])

return (
    <div>
        <MUIDataTable 
                    title={"Lista de Proveedores"}
                    data={proveedores}
                    columns={columns}
                    // options={options}
          />
    </div>
)


}