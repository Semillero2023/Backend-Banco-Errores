import React from "react";
import { updateUtility } from "../querys/updateUtility";

class ListadoErrores extends React.Component {

    handleChange = async (e) => {
        try {
            if (e.target.checked) {
                await updateUtility(e.target.id, "+")
                alert("Se actualizó el contador");
            } else {
                await updateUtility(e.target.id, "-")
                alert("Se actualizó el contador");
            }
        } catch (error) {
            alert(error)
        }
    }

    render() {
        const { errores } = this.props;
        const rows = [];
        errores.forEach((doc) => {
            rows.push(
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
                    <td>
                        <label className="form-check-label">
                            <input type="checkbox" id={doc.id} value="checked" onChange={this.handleChange} />
                            Sí
                        </label>
                    </td>
                </tr>
            )
        });

        return (
            <div id="container" className="container">
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
                            <th scope="col">¿Fue útil?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListadoErrores