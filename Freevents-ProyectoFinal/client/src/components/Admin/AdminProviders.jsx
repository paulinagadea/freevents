import * as React from 'react';
import { forwardRef } from 'react';
import MaterialTable from "material-table"
import axios from "axios";
import { useState, useEffect } from 'react';
import edit from '@material-ui/icons/Edit';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { updateClient, getAllClients, getIdClient, deleteClient, getProviders } from "../../actions"
import { useDispatch, useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
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
import { Modal, TextField, Button } from '@material-ui/core';
import ViewColumn from '@material-ui/icons/ViewColumn';


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

const columns = [{
      field: 'id',
      title: 'id'
    },
    {
      field: 'name',
      title: 'Nombre'
    },
    {
      field: 'address',
      title: 'Direccion'
    },
    {
      field: 'cuit',
      title: 'Cuit'
    },
    {
      field: 'email',
      title: 'Email'
    },
    {
      field: 'phone_number',
      title: 'Teléfono'
    },
    {
      field: 'createdAt',
      title: 'Fecha de Creacion'
  },
    {
      field: 'status',
      title: 'Estado'
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

const endpoint = 'http://localhost:3001/providers';

export default function AdmiPakets() {
  const dispatch = useDispatch()
  const providers = useSelector((state)=>state.allProviders)
  const [proveedores, setProveedores] = useState([])
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [providerSeleccionado, setProviderSeleccionado]=useState({
    id: "",
    status: ""
  })  

  const handleChange=e=>{
    const {name, value}=e.target;
    setProviderSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }
  
  const peticionPut=async()=>{
    await axios.patch(endpoint+"/"+providerSeleccionado.id, providerSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(cliente=>{
        if(cliente.id===providerSeleccionado.id){
          cliente.status=providerSeleccionado.status;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }
  
  const seleccionarCliente=(provider, caso)=>{
    setProviderSeleccionado(provider);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }
  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }
  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }



// const endpoint = 'http://localhost:3001/providers';
//   // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

//   const getData = async () => {
//     await axios.get(endpoint).then((response) => {
//         const data = response.data
//         console.log(data)
//         setProveedores(data)
//     })
//   }
  
  useEffect(() => {
    dispatch(getProviders)
    setProveedores(providers)
}, [])

const bodyEditar=(
  <div className={styles.modal}>
    <h3>Editar Cliente</h3>
    <TextField className={styles.inputMaterial} label="Estado" name="status" onChange={handleChange} value={providerSeleccionado&&providerSeleccionado.status}/>
    <br /><br />
    <div align="right">
      <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
    </div>
  </div>
)



return (
    <div>
        <MaterialTable 
                    title={"Lista de Proveedores"}
                    data={providers}
                    columns={columns}
                    icons={tableIcons}
                    options={{actionsColumnIndex: -1}}
                    localization={{header:{actions:"Acciones"}}}
                    actions={[{
                      icon: edit,
                      tooltip:"editar",
                      onClick:(event, rowData) => seleccionarCliente(rowData, "Editar")
                    }]}
                  
          />
          <Modal
          open={modalEditar}
          onClose={abrirCerrarModalEditar}>
            {bodyEditar}
          </Modal>
    </div>
)


}