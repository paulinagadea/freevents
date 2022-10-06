import { Container, FormGroup, Input, Col, Label } from 'reactstrap'
import React, {useState} from "react";
import Styles from "../components/CreatePack.module.css";
import { Button } from '@material-ui/core';


const SubiendoImagenes = (props) => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const submitImage = (e) => {
        const files = e.target.files
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "images") //upload_preset
        data.append("cloud_name", "freevents")

      fetch("https://api.cloudinary.com/v1_1/freevents/image/upload",{
        method: "post",
        body:data
      })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })    
        
    }


    return ( 
        <div>
            <Container style={{textAlign:"center"}}>
                <h1>
                    Subiendo Imagenes
                </h1>
                <FormGroup row>
                    <Label
                    for="exampleFile"
                    sm={2}
                    >
                    File
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleFile"
                        name="file"
                        type="file"
                        placeholder='Sube tu Imagen aqui'
                        onChange={(e)=>setImage(e.target.files[0])}
                    />
                    <button className={Styles.btn_submit} onClick={submitImage}>Subir</button>
                    </Col>
                </FormGroup>
            </Container>
        </div>

     );
}
 
export default SubiendoImagenes;