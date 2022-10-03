import * as React from 'react';
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function AdmiClients() {

const [paquetes, setPaquetes] = useState([])
    
  const endpoint = 'http://localhost:3001/packs';
  // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

  const getData = async () => {
    await axios.get(endpoint).then((response) => {
        const data = response.data
        console.log(data)
        setPaquetes(data)
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
    name: 'description',
    label: 'Descripcion'
  },
  {
    name: 'price',
    label: 'precio'
  },
  {
    name: 'provider',
    label: 'Proveedor'
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
                    data={paquetes}
                    columns={columns}
                    // options={options}
          />
    </div>
)


}