import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPack,
  getEvents,
  getProviders,
  getServices,
} from "../actions/index.js";
import Styles from "../components/CreatePack.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "El nombre es requerido";
  }

  if (!input.price) {
    errors.price = "El precio es requerido";
  }

  if (
    input.galery_image.length !== 0 &&
    !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.galery_image)
  ) {
    errors.galery_image = "invalid URL";
  }

  return errors;
}

export default function Create() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
    status_enable: "",
    galery_image: [],
    providers: [],
    events: [],
    services: [],
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const eventos = useSelector((state) => state.events);
  const servicios = useSelector((state) => state.services);
  const proveedores = useSelector((state) => state.providers);
  const allNames = useSelector((state) => state.allPacks);

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getServices());
    dispatch(getProviders());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    let noRepeat = allNames.filter((n) => n.name === input.name);
    if (noRepeat.length !== 0) {
      alert("Ya existe un pack con ese nombre, por favor elije otro");
    } else {
      let error = Object.keys(validate(input));

      if (
        error.length !== 0 ||
        !input.events.length ||
        !input.services.length ||
        !input.providers.length
      ) {
        alert("Llene los campos correctamente");
        return;
      } else {
        dispatch(createPack(input));
        setInput({
          name: "",
          description: "",
          price: 0,
          status_enable: "",
          galery_image: [],
          providers: [],
          events: [],
          services: [],
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Felicidades, el Pack fue creado exitosamente.',
          showConfirmButton: false,
          timer: 1500
        })
      }
      navigate("/paquetes");
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: [e.target.value],
      })
    );
  }

  function handleEvents(e) {
    if (!input.events.includes(e.target.value)) {
      setInput({
        ...input,
        events: [...input.events, e.target.value],
      });
    }
  }

  function handleServices(e) {
    if (!input.services.includes(e.target.value)) {
      setInput({
        ...input,
        services: [...input.services, e.target.value],
      });
    }
  }

  function handleProviders(e) {
    if (!input.providers.includes(e.target.value)) {
      setInput({
        ...input,
        providers: [...input.providers, e.target.value],
      });
    }
  }

  function handleDeleteE(e) {
    setInput({
      ...input,
      events: input.events.filter((eve) => eve !== e),
    });
  }

  function handleDeleteS(e) {
    setInput({
      ...input,
      services: input.services.filter((ser) => ser !== e),
    });
  }

  function handleDeleteP(e) {
    setInput({
      ...input,
      providers: input.providers.filter((pro) => pro !== e),
    });
  }

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className={Styles.box_form}>
          <div className={Styles.form}>
            <Typography variant="h3" color="info">CREA TÚ PACK</Typography>

            <div className={Styles.grupo}>
              <TextField
                fullWidth
                
                type="text"
                required
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
             
              <Typography variant="h8" color="ligth">Nombre:</Typography>
              {errors.name && <p className={Styles.danger}>{errors.name}</p>}
            </div>

            <div className={Styles.grupo}>
              <TextField
                fullWidth
                required
                type="number"
                name="price"
                value={input.price}
                onChange={(e) => handleChange(e)}
              >
                
              </TextField>
              
              <Typography variant="h8" color="ligth">Price: </Typography>
              {errors.price && <p className={Styles.danger}>{errors.price}</p>}
            </div>

            <div className={Styles.grupo}>
            
              <Select 
                fullWidth
                required
                value={input.status_enable}
                onChange={(e) => handleChange(e)} 
                name="status_enable"
                >
                <MenuItem value="10" >Disabled </MenuItem>
                <MenuItem value="20" >Enabled </MenuItem>
                </Select>
                
              <Typography variant="h8" color="ligth">Status: </Typography>
            </div>

            <div className={Styles.grupo}>
              <TextField
                className={Styles.create_input}
                type="text"
                name="galery_image"
                value={input.galery_image}
                onChange={(e) => handleChange(e)}
              />
              
              <Typography variant="h8" color="ligth">Imagen URL: </Typography>
              {errors.galery_image && (
                <p className={Styles.danger}>{errors.galery_image}</p>
                )}
            </div>

            <div className={Styles.grupo}>
              <select
                fullWidth
                className={Styles.select_create}
                id="events"
                defaultValue=""
                onChange={(e) => handleEvents(e)}
              >
                <option
                  className={Styles.option_create}
                  value=""
                  disabled
                  hidden
                >
                </option>
                {eventos?.map((t) => {
                  return (
                    <option
                      key={t.id}
                      value={t.name}
                      className={Styles.option_create}
                    >
                      {t.name}
                    </option>
                  );
                })}
              </select>{" "}
              <span className={Styles.barra}></span>
              <Typography variant="h8" color="ligth">Eventos: </Typography>
              {input.events.map((t) => (
                <div className={Styles.box_opcion}>
                  <div className={Styles.opcion_title}>{t}</div>
                  <button
                    className={Styles.btn_remove}
                    onClick={() => handleDeleteE(t)}
                    key={t}
                    value={t}
                  >
                    <span className={Styles.x}>X</span>
                  </button>
                </div>
              ))}
            </div>

            <div className={Styles.grupo}>
              <select
                className={Styles.select_create}
                id="services"
                defaultValue=""
                onChange={(e) => handleServices(e)}
              >
                <option
                  className={Styles.option_create}
                  value=""
                  disabled
                  hidden
                >
                </option>
                {servicios?.map((s) => {
                  return (
                    <option className={Styles.option_create} value={s.name} key={s.id}>
                      {s.name}
                    </option>
                  );
                })}
              </select>{" "}
              <span className={Styles.barra}></span>
              <Typography variant="h8" color="ligth">Servicios: </Typography>
              {input.services.map((s) => (
                <div className={Styles.box_opcion}>
                  <div className={Styles.opcion_title}>{s}</div>
                  <button
                    className={Styles.btn_remove}
                    onClick={() => handleDeleteS(s)}
                    key={s}
                    value={s}
                  >
                    <span className={Styles.x}>X</span>
                  </button>
                </div>
              ))}
            </div>

            <div className={Styles.grupo}>
              <select
                className={Styles.select_create}
                id="providers"
                defaultValue=""
                onChange={(e) => handleProviders(e)}
              >
                <option
                  className={Styles.option_create}
                  value=""
                  disabled
                  hidden
                >
                </option>
                {proveedores?.map((p) => {
                  return (
                    <option
                      key={p.id}
                      value={p.name}
                      className={Styles.option_create}
                    >
                      {p.name}
                    </option>
                  );
                })}
              </select>{" "}
              <span className={Styles.barra}></span>
              <Typography variant="h8" color="ligth">Proveedor: </Typography>
              {input.providers.map((p) => (
                <div className={Styles.box_opcion}>
                  <div className={Styles.opcion_title}>{p}</div>
                  <button
                    className={Styles.btn_remove}
                    onClick={() => handleDeleteP(p)}
                    key={p}
                    value={p}
                  >
                    <span className={Styles.x}>X</span>
                  </button>
                </div>
              ))}
            </div>

            <div className={Styles.grupo}>
              <TextField
                id="outlined-multiline-static"
                multiline
                inputProps={{ style: { width: 500 } }}
                rows={4}
                required
                onChange={(e) => handleChange(e)}
              >
                {" "}
              </TextField>
              <span className={Styles.barra}></span>
              <Typography variant="h8" color="ligth">Descripción: </Typography>
              
            </div>

          </div>
          <div>
            <button type="submit" className={Styles.btn_submit}>
              CREAR PACK
            </button>
          </div>

          <div>
            <NavLink to={"/paquetes"} className={Styles.back_home}>
              Cancelar
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
