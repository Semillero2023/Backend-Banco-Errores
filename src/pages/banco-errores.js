import React from "react";
import { addNewError, showErrors } from '../js/querys.js';
import ListadoErrores from "../components/listadoErrores.js";

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
                <div id="app">
                    <form id="error-form" >
                        <label>Nombre Error:</label>
                        <input id="Nombre_Error" type="text" />
                        <label>Tipo Error:</label>
                        <input id="Tipo_Error" type="text" />
                        <label>Codigo Retorno:</label>
                        <input id="Codigo_Retorno" type="text" />
                        <label>ID Mensaje Error:</label>
                        <input id="ID_Mensaje_Error" type="text" />
                        <label>Complejidad:</label>
                        <input id="Complejidad" type="number" />
                        <label>Reportado Por:</label>
                        <input id="Reportado_Por" type="text" />
                        <label>Fecha:</label>
                        <input id="Fecha" type="text" />
                        <label>Resultado Esperado:</label>
                        <input id="Resultado_Esperado" type="text" />
                        <label>Resultado Obtenido:</label>
                        <input id="Resultado_Obtenido" type="text" />
                        <label>Descripcion Error:</label>
                        <input id="Descripcion_Error" type="text" />
                        <label>Solucion:</label>
                        <input id="Solucion" type="text" />
                        <label>Fuentes:</label>
                        <input id="Fuentes" type="text" />
                        <button type="submit" onClick={addNewError}> Enviar </button>
                    </form>
                </div>
                <ListadoErrores 
                    errores={this.state.errores}
                />
            </div>
        );
    }

}

export default BancoErrores