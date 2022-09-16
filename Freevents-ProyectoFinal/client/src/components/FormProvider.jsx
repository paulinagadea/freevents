import React from "react";

export default function FormProvider(){
    return(
        <div>
            <h1>Formulario de proveedores</h1>

            <form method="post">
                <div className="label">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" 
                    // value={}
                    name="name"
                    />
                </div>
                <div className="label">
                    <label htmlFor="">Apellido:</label>
                    <input type="text" 
                    // value={}
                    name="lastname"
                    />
                </div>
                <div className="label">
                    <label htmlFor="">Dirección:</label>
                    <input type="text"
                    // value={}
                    name="adress"
                    />
                </div>    
                <div className="label">
                    <label htmlFor="">Código postal:</label>
                    <input type="number" 
                    // value={}
                    name="postal_code"
                    />
                </div>
                <div className="label">
                    <label htmlFor="">CUIT:</label>
                    <input type="number" 
                    // value={}
                    name="cuit"
                    />
                </div>
                <div className="label">
                    <label htmlFor="">Email:</label>
                    <input type="text" 
                    // value={}
                    name="email"
                    />
                </div>
                <div className="label">
                    <label htmlFor="">Número telefónico:</label>
                    <input type="number" 
                    // value={}
                    name="phone_number"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}