import * as React from 'react';
import { forwardRef } from 'react';
import MaterialTable from "material-table"
import axios from "axios";
import { getOrder } from "../../actions"
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
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const columns = [
{
  title: 'Pack',
  field: 'pack_service.name'
},
{
  title: 'Precio',
  field: 'price'
},
{
  title: 'Día del evento',
  field: 'event_date'
},
{
  title: 'Proveedor',
  field: 'provider.name'
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

const endpoint = 'http://localhost:3001/order';

export default function AdminOrden() {
  const dispatch = useDispatch()
  const order = useSelector((state)=>state.ordercita)
  console.log(order, 'estado order')
  const [checked, setChecked] = React.useState(true);
  const styles= useStyles();
    const [orden, setOrden] = useState([])
    const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);

  const handleCambio = (event) => {
    setChecked(event.target.checked);
  
    if(checked){
      setOrdenSeleccionado(prevState=>({
        ...prevState,
        status: "disabled"
      }));
    }else if(checked){
        setOrdenSeleccionado(prevState=>({
        ...prevState,
        status: "enabled"
      }));
    }
    
  };

  
  const [ordenSeleccionado, setOrdenSeleccionado]=useState({
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
  
  // const handleChange= e =>{
  //   const {value}= e.target;
  //   ordenSeleccionado(prevState=>({
  //     ...prevState,
  //     status: value
  //   }));
  // }
  
  const peticionPut=async()=>{
    await axios.patch(endpoint+"/"+ordenSeleccionado.id, ordenSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(cliente=>{
        if(orden.id===ordenSeleccionado.id){
          orden.status=ordenSeleccionado.status;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
    window.location.reload();
  }
  
  const seleccionarOrden=(orden, caso)=>{
    setOrdenSeleccionado(orden);
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
    dispatch(getOrder)
    setOrden(order)
  }, [])
  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Orden</h3>
      <Stack direction="row" spacing={1} alignItems="center">
      <Typography>Disable</Typography>
      <Switch
      checked={checked}
      onChange={handleCambio}
      inputProps={{ 'aria-label': 'controlled' }}
      value={ordenSeleccionado&&ordenSeleccionado.status}
      
    />
    <Typography>Enable</Typography>
    </Stack>
    
      {/* <TextField className={styles.inputMaterial} label="Estado" name="status" onChange={handleChange} value={ordenSeleccionado&&ordenSeleccionado.status}/> */}
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
                    title={"Lista de ordenes"}
                    data={order}
                    columns={columns}
                    icons={tableIcons}
                    // options={{actionsColumnIndex: -1}}
                    // localization={{header:{actions:"Acciones"}}}
                    // actions={[{
                    //   icon: edit,
                    //   tooltip:"editar",
                    //   onClick: (event, rowData) => seleccionarOrden(rowData, "Editar")
                      
                    // }]}
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

