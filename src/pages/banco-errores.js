import React from "react";
import { showErrors } from '../querys/getAllDocs';
import ListadoErrores from "../components/listadoErrores.js";
import CargaMasiva from "../components/cargaMasiva.js";
import InsertError from "../components/insertError.js";

class BancoErrores extends React.Component {

    state = {
        errores : []
    }

    async componentDidMount(){
        const arrayErrores = await showErrors()
        this.setState({errores : arrayErrores})
        // arrayErrores.forEach((doc) => {
        //    console.log(doc.id, " => ", doc.data());
        // });
    }

    render() {
        return (
            <div className="App">
                <InsertError/>
                <br/>
                <CargaMasiva/>
                <br/>
                <ListadoErrores 
                    errores={this.state.errores}
                />
            </div>
        );
    }

}

export default BancoErrores