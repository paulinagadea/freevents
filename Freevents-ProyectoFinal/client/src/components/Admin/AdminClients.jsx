import * as React from 'react';
import { forwardRef } from 'react';
import MaterialTable from "material-table"
import axios from "axios";
import { updateClient, getAllClients, getIdClient, deleteClient } from "../../actions"
import { useDispatch, useSelector  } from 'react-redux';
import { useState, useEffect } from 'react';
import edit from '@material-ui/icons/Edit';
import { AddBox, ArrowDownward } from "@material-ui/icons";
// import { makeStyles } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
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

const columns = [
{
  title: 'Id',
  field: 'id'
},
{
  title: 'Nombre',
  field: 'name'
},
{
  title: 'Dni',
  field: 'dni'
},
{
  title: 'Email',
  field: 'email'
},
{
  title: 'telefono',
  field: 'phone_number'
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

const endpoint = 'http://localhost:3001/client';

export default function AdmiClients() {
  const dispatch = useDispatch()
  const clients = useSelector((state)=>state.allClients)

  const styles= useStyles();
const [clientes, setClientes] = useState([])
const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [clienteSeleccionado, setClienteSeleccionado]=useState({
    id: "",
    status: ""
  })
    
  // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

  // const getData = async () => {
  //   await axios.get(endpoint).then((response) => {
  //       const data = response.data
  //       console.log(data)
  //       setClientes(data)
  //   })
  // }
  
  const handleChange=e=>{
    const {name, value}=e.target;
    setClienteSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }
  
  const peticionPut=async()=>{
    await axios.patch(endpoint+"/"+clienteSeleccionado.id, clienteSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(cliente=>{
        if(cliente.id===clienteSeleccionado.id){
          cliente.status=clienteSeleccionado.status;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }
  
  const seleccionarCliente=(cliente, caso)=>{
    setClienteSeleccionado(cliente);
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
  useEffect(() => {
    dispatch(getAllClients)
    setClientes(clients)
    // getData()
  }, [])
  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Cliente</h3>
      <TextField className={styles.inputMaterial} label="Estado" name="status" onChange={handleChange} value={clienteSeleccionado&&clienteSeleccionado.status}/>
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
                    title={"Lista de clientes"}
                    data={clients}
                    columns={columns}
                    icons={tableIcons}
                    options={{actionsColumnIndex: -1}}
                    localization={{header:{actions:"Acciones"}}}
                    actions={[{
                      icon: edit,
                      tooltip:"editar",
                      onClick: (event, rowData) => seleccionarCliente(rowData, "Editar")
                    }]}
                    // options={options}
          />

  <Modal
          open={modalEditar}
          onClose={abrirCerrarModalEditar}>
            {bodyEditar}
          </Modal>
    </div>
)


}

