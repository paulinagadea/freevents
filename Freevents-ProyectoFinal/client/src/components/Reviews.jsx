import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getReviews, postReviews, getEvents, getProviders } from "../actions";
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function Reviews() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const allReviews = useSelector((state) => state.reviews);
    const allEvents = useSelector((state) => state.events)
    const allProviders=useSelector((state)=>state.providers)
    const [errors, setErrors] = useState({})
    const [value, setValue] = React.useState(2);

    useEffect(() => {
        dispatch(getReviews())
        dispatch(getEvents())
        dispatch(getProviders())
    }, [dispatch])

    const [input, setInput] = useState({
        name: "",
        celebracion: "",
        comments: "",
        rating: "★★★★★",
        avatar: "https://perfil.napratica.org.br/assets/v2020/testepersonalidade-77d5e996bbe11f2e3429c0bd09753cb6d74d0c8fd29b4840653848a32c93c1da.png",
        proovedor: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        let validacion = (
            validate(input)
        );
        setErrors(validacion)

        if (Object.keys(validacion).length > 0) {
            alert("Ingresa los datos")
            return
        }

        dispatch(postReviews(input))
        alert(`Gracias ${input.name} por tu comentario!`)
        setInput({
            name: "",
            celebracion: "",
            comments: "",
            rating: "★★★★★",
            avatar: "https://perfil.napratica.org.br/assets/v2020/testepersonalidade-77d5e996bbe11f2e3429c0bd09753cb6d74d0c8fd29b4840653848a32c93c1da.png",
            proveedor:"",
        });
        navigate("/home")
        window.location.reload()

        function validate(input) {
            let errors = {};

            if (!input.name) {
                errors.name = "Ingresa tu nombre"
            }
            if (!input.celebracion) {
                errors.celebracion = "Selecciona una opción"
            }
            if (!input.comments) {
                errors.comments = "Dejanos tu comentario aquí"
            } else if (input.comments.length < 10) {
                errors.comments = "Tu comentario es muy corto, ponte creativo!"
            }
            //     if (!input.rating) {
            //         errors.rating = "Selecciona rating"
            //     } else if (Number(input.rating) > 5 || Number(input.rating) < 1) {
            //         errors.rating = "El rating debe ser entre 1 y 5 "
            //     } return errors;
            // }
        }
    }

    const handleFormChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div>
            <h1>Dejanos tu comentario!</h1>

            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        defaultValue={input.name}
                        onChange={(e) => {
                            return handleFormChange(e)
                        }}
                    />
                    {errors.name && <p> {errors.name}</p>}
                </div>
                <div>
                    <select onChange={(e) => handleFormChange(e)}>
                        <option selected disabled>
                            Selecciona un evento
                        </option>
                        {allEvents.map((celebracion) => (
                            <option
                                key={celebracion}
                                defaultValue={celebracion}> {celebracion.name} </option>
                        ))}
                    </select>
                    {errors.celebracion && <p className="error">{errors.celebracion}</p>}
                </div>
                <div>
                    <select onChange={(e) => handleFormChange(e)}>
                        <option selected disabled>
                            Tu prooveedor
                        </option>
                        {allProviders.map((proveedor) => (
                            <option
                                key={proveedor}
                                defaultValue={proveedor}> {proveedor.name} </option>
                        ))}
                    </select>
                    {errors.celebracion && <p className="error">{errors.celebracion}</p>}
                </div>
                <div>
                    <textarea
                        cols={30}
                        rows={8}
                        maxLength={400}
                        placeholder="Dejanos tu comentario aquí"
                        type="text"
                        name="comments"
                        autoComplete="off"
                        defaultValue={input.comentario}
                        onChange={(e) => handleFormChange(e)}
                        required
                    />
                    {errors.comments && <p> {errors.comments}</p>}
                </div>
                <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(e, newValue) => { setValue(newValue, e) }}
                        />
                    </Box>
                </div>
                <button type="submit"
                    onClick={(e) => handleSubmit(e)}>
                    Enviar
                </button>
                {/* AGREGAR LOGICA Y ALERT PARA QUE SOLO PUEDAN COMENTAR SI ESTAN LOGUEADOS // componente AlertSuscribe */}
            </form>
        </div>
    )
}


