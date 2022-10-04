import * as React from 'react';
import { forwardRef } from 'react';
import MaterialTable from "material-table"
import axios from "axios";
import { useState, useEffect } from 'react';
import edit from '@material-ui/icons/Edit';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { updateClient, getAllClients, getIdClient, deleteClient, getPacks } from "../../actions"
import { useDispatch, useSelector  } from 'react-redux';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

  const columns = [{
        title: 'Id',
        field: 'id'
      },
      {
        title: 'Nombre',
        field: 'name'
      },
      {
        title: 'Descripcion',
        field: 'description'
      },
      {
        title: 'Precio',
        field: 'price'
      },
      {
        title: 'Proveedor',
        field: 'provider.name'
      },
      {
        title: 'Fecha de creación',
        field: 'createdAt'
      },
      {
        title: 'Estado',
        field: 'status'
      }
      
    ]


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


export default function AdmiPakets() {
  const dispatch = useDispatch()
  const packs = useSelector((state)=>state.allPacks)
const [paquetes, setPaquetes] = useState([])
    
// const endpoint = 'http://localhost:3001/packs';
//   // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

//   const getData = async () => {
//     await axios.get(endpoint).then((response) => {
//         const data = response.data
//         console.log(data)
//         setPaquetes(data)
//     })
//   }
  
  useEffect(() => {
    dispatch(getPacks)
    setPaquetes(packs)
}, [])

return (
    <div>
        <MaterialTable 
                    title={"Lista de Paquetes"}
                    data={packs}
                    columns={columns}
                    icons={tableIcons}
                    actions={[{
                      icon: edit,
                      tooltip:"editar",
                      onClick:(event, rowData)=>alert("Editando" + rowData.name)
                    }]}
                  
          />
    </div>
)


}