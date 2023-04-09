import React from "react";
import { addNewError } from '../querys/insert';

class InsertError extends React.Component {

    render() {
        return (
            <div id="app">
                <form id="error-form" >
                    <label>Nombre Error:</label>
                    <input id="Nombre_Error" type="text" />
                    <label htmlFor="Tipo_Error">Tipo Error:</label>
                    <select id="Tipo_Error" >
                        <option value="RC">Return Code (RC)</option>
                        <option value="FS">File Status (FS)</option>
                        <option value="AB">Abend (AB)</option>
                    </select>
                    <label>Codigo Retorno:</label>
                    <input id="Codigo_Retorno" type="text" />
                    <label>ID Mensaje Error:</label>
                    <input id="ID_Mensaje_Error" type="text" />
                    <label>Complejidad:</label>
                    <input id="Complejidad" type="number" min={0} max={5}/>
                    <label>Reportado Por:</label>
                    <input id="Reportado_Por" type="text" />
                    <label>Fecha:</label>
                    <input id="Fecha" type="date" />
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
        );
    }
}

export default InsertError 