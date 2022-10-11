import * as React from 'react';
import { forwardRef } from 'react';
import MaterialTable from "material-table"
import axios from "axios";
import { useState, useEffect } from 'react';
import edit from '@material-ui/icons/Edit';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { updateClient, getAllClients, getIdClient, deleteClient, getPacks } from "../../actions"
import {makeStyles} from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
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
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';


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

// const endpoint = 'http://localhost:3001/packs';
const endpoint = 'https://freevents-production.up.railway.app/packs';


export default function AdmiPakets() {
  const dispatch = useDispatch()
  const packs = useSelector((state)=>state.allPacks)
  const [paquetes, setPaquetes] = useState([])
  const [checked, setChecked] = React.useState(true);
  const styles= useStyles();  
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  

  const handleCambio = (event) => {
    setChecked(event.target.checked);
  
    if(checked){
      setPacksSeleccionado(prevState=>({
        ...prevState,
        status: "disabled"
      }));
    }else if(checked){
      setPacksSeleccionado(prevState=>({
        ...prevState,
        status: "enabled"
      }));
    }
    
  };


  const [packSeleccionado, setPacksSeleccionado]=useState({
    id: "",
    status: ""
  })
// const endpoint = 'http://localhost:3001/packs';
//   // pasar a ruta de deploy https://freevents-backend-render.onrender.com/client

//   const getData = async () => {
//     await axios.get(endpoint).then((response) => {
//         const data = response.data
//         console.log(data)
//         setPaquetes(data)
//     })
//   }

// const handleChange=e=>{
//   const {name, value}=e.target;
//   setPacksSeleccionado(prevState=>({
//     ...prevState,
//     [name]: value
//   }));
// }

const peticionPut=async()=>{
  await axios.patch(endpoint+"/"+packSeleccionado.id, packSeleccionado)
  .then(response=>{
    var dataNueva= data;
    dataNueva.map(cliente=>{
      if(cliente.id===packSeleccionado.id){
        cliente.status=packSeleccionado.status;
      }
    });
    setData(dataNueva);
    abrirCerrarModalEditar();
  }).catch(error=>{
    console.log(error);
  })
  window.location.reload();
}

const seleccionarPack=(pack, caso)=>{
  setPacksSeleccionado(pack);
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
    dispatch(getPacks)
    setPaquetes(packs)
}, [])

const bodyEditar=(
  <div className={styles.modal}>
    <h3>Editar Cliente</h3>
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Disable</Typography>
      <Switch
      checked={checked}
      onChange={handleCambio}
      inputProps={{ 'aria-label': 'controlled' }}
      value={packSeleccionado&&packSeleccionado.status}
      
    />
    <Typography>Enable</Typography>
    </Stack>
    {/* <TextField className={styles.inputMaterial} label="Estado" name="status" onChange={handleChange} value={packSeleccionado&&packSeleccionado.status}/> */}
    <br /><br />
    <div align="right">
      <Button color="primary" onClick={()=>peticionPut()}>Guardar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
    </div>
  </div>
)

return (
    <div>
        <MaterialTable 
                    title={"Lista de Paquetes"}
                    data={packs}
                    columns={columns}
                    icons={tableIcons}
                    options={{actionsColumnIndex: -1}}
                    localization={{header:{actions:"Acciones"}}}
                    actions={[{
                      icon: edit,
                      tooltip:"editar",
                      onClick:(event, rowData)=>seleccionarPack(rowData, "Editar")
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