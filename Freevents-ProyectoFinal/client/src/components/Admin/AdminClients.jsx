import * as React from 'react';
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function AdmiClients() {

const [clientes, setClientes] = useState([])
    
  const endpoint = 'http://localhost:3001/client';
  // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setClientes(data)
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
    name: 'dni',
    label: 'DNI'
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
                    title={"Lista de clientes"}
                    data={clientes}
                    columns={columns}
                    // options={options}
          />
    </div>
)


}