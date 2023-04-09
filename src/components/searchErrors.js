import React from "react";
import { searchMessageID, searchReturnCode } from "../querys/searchErrors";

class SearchErrors extends React.Component {
    state = {
        rows: [],
        result: ""
    }

    handleClick = () => {
        try {
            let type = document.getElementsByName("filter");
            let filter = document.getElementById("searchValue").value;
            type.forEach(async radio => {
                if (radio.checked) {
                    switch (radio.value) {
                        case "IdError":
                            const responseId = await this.getErrorsByIdMessage(filter);
                            this.fillRows(responseId);
                            break;

                        default:
                            //RC, FS, AB
                            const responseCode = await this.getErrorsByReturnCode(radio.value, filter);
                            this.fillRows(responseCode);
                            break;
                    }
                }
            })
        } catch (error) {
            alert(error.message);
        }
    }

    getErrorsByIdMessage = async (filter) => {
        const response = await searchMessageID(filter);
        return response
    }

    getErrorsByReturnCode = async (type, filter) => {
        const response = await searchReturnCode(type, filter);
        return response
    }

    fillRows = (response) => {
        const filledRows = [];
        response.forEach((doc) => {
            filledRows.push(
                <tr key={doc.id}>
                    <td>{doc.data().Codigo_Retorno}</td>
                    <td>{doc.data().Complejidad}</td>
                    <td>{doc.data().Descripcion_Error}</td>
                    <td>{doc.data().Fecha}</td>
                    <td>{doc.data().Fuentes}</td>
                    <td>{doc.data().ID_Mensaje_Error}</td>
                    <td>{doc.data().Nombre_Error}</td>
                    <td>{doc.data().Reportado_Por}</td>
                    <td>{doc.data().Resultado_Esperado}</td>
                    <td>{doc.data().Resultado_Obtenido}</td>
                    <td>{doc.data().Solucion}</td>
                    <td>{doc.data().Tipo_Error}</td>
                    <td>{doc.data().Utilidad}</td>
                </tr>
            )
        });
        this.setState({
            rows: filledRows,
            result: "Resultados encontrados: " + filledRows.length
        });
    }

    render() {
        return (
            <div id="container" className="container">
                <br />
                <fieldset>
                    <legend>Seleccione Filtro de Búsqueda</legend>
                    <div>
                        <input type="radio" id="RC" name="filter" value="RC" defaultChecked="true" />
                        <label htmlFor="RC">Return Code (RC)</label>

                        <input type="radio" id="FS" name="filter" value="FS" />
                        <label htmlFor="FS">File Status (FS)</label>

                        <input type="radio" id="AB" name="filter" value="AB" />
                        <label htmlFor="AB">Abend (AB)</label>

                        <input type="radio" id="IdError" name="filter" value="IdError" />
                        <label htmlFor="IdError">ID Mensaje Error</label>
                    </div>
                </fieldset>
                <div className="form-group">
                    <div className="col-md-3">
                        <label htmlFor="searchValue">Ingrese Valor de Búsqueda </label>
                    </div>
                    <div className="col-md-3">
                        <input type="text" id="searchValue" />
                    </div>
                    <div className="col-md-3">
                        <button type="button" onClick={this.handleClick}>Buscar</button>
                    </div>
                    <div className="col-md-3">
                        <p>{this.state.result}</p>
                    </div>
                </div>
                <br />
                <table className="table table-hover" border={2}>
                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">Codigo Retorno</th>
                            <th scope="col">Complejidad</th>
                            <th scope="col">Descripcion Error</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Fuentes</th>
                            <th scope="col">ID Mensaje Error</th>
                            <th scope="col">Nombre Error</th>
                            <th scope="col">Reportado Por</th>
                            <th scope="col">Resultado Esperado</th>
                            <th scope="col">Resultado Obtenido</th>
                            <th scope="col">Solucion</th>
                            <th scope="col">Tipo Error</th>
                            <th scope="col">Utilidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table>
                <br />
            </div>
        )
    }
}

export default SearchErrors