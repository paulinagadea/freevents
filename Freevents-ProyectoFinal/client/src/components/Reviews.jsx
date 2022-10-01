import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postReviews, getEvents } from "../actions";
//import { Rating } from '@material-ui/lab';
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';


export default function Reviews() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const allReviews = useSelector((state) => state.reviews);
    const allEvents = useSelector((state) => state.events)
    //const allProviders=useSelector((state)=>state.providers)
    //const [errors, setErrors] = useState({})
    //const [value, setValue] = React.useState(2);

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    const [input, setInput] = useState({

        name: "",
        events: "",
        comments: "",
        rating: "",
       // image: "https://perfil.napratica.org.br/assets/v2020/testepersonalidade-77d5e996bbe11f2e3429c0bd09753cb6d74d0c8fd29b4840653848a32c93c1da.png",

    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
        dispatch(postReviews(input))
        alert(`Gracias por tu comentario!`)
        setInput({
            //name:"",
            events:"",
            comments:"",
            rating:"",
            //image:"https://perfil.napratica.org.br/assets/v2020/testepersonalidade-77d5e996bbe11f2e3429c0bd09753cb6d74d0c8fd29b4840653848a32c93c1da.png",
        });

        navigate("/home")
        window.location.reload()
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
                {/* <div>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        defaultValue={input.name}
                        onChange={(e) => {
                            return handleFormChange(e)
                        }}
                    />
                </div> */}
                <div>
                <input
                        type="text"
                        placeholder="Evento"
                        defaultValue={input.events}
                        onChange={(e) => {
                            return handleFormChange(e)
                        }}
                    />
                    {/* <select onChange={(e) => handleFormChange(e)}>
                        <option selected disabled>
                            Selecciona un evento
                        </option>
                        {allEvents.map((events) => (
                            <option
                                key={events}
                                defaultValue={events}> {events.name} </option>
                        ))}
                    </select> */}
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
                        defaultValue={input.comments}
                        onChange={(e) => handleFormChange(e)}
                        required
                    />
                </div>

                {/* <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(e, newValue) => { setValue(newValue, e) }}
                        />
                    </Box>
                </div> */}

                <div>
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        autoComplete="off"
                        defaultValue={input.rating}
                        onChange={(e) => handleFormChange(e)}
                    />

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