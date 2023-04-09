import React from "react";
import * as XLSX from "xlsx";
import { insert } from "../querys/insert"
import { refreshPage } from "../querys/utils";

class CargaMasiva extends React.Component {
    state = {
        selectedFile: null,
        arrayErrores: []
    }

    handleChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    verExcel = () => {
        if (this.state.selectedFile) {
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(this.state.selectedFile);
            fileReader.onload = (event) => {
                let data = event.target.result;
                let workbook = XLSX.read(data, { type: "binary" });
                let sheet = workbook.Sheets["Reporte de errores"];
                if (sheet !== undefined) {
                    let rowObject = XLSX.utils.sheet_to_row_object_array(sheet);
                    rowObject = XLSX.utils.sheet_to_json(sheet);
                    this.setState({ arrayErrores: rowObject })
                } else {
                    alert("No se encontró la hoja con nombre: 'Reporte de errores'")
                }
            }
        }
    }

    cargaErrores = async () => {
        if (!this.state.arrayErrores.length) {
            alert("No se ha encontrado ningún Excel cargado")
        } else {
            await Promise.all(this.state.arrayErrores.map(async (newError) => {
                newError.Codigo_Retorno = String(newError.Codigo_Retorno);
                newError.Complejidad = String(newError.Complejidad);
                newError.Utilidad = 0;
                const response = await insert(newError);
                console.log(response);
                console.log("Document written with ID: ", response.id);
            }));
            this.setState({
                selectedFile: null,
                arrayErrores: []
            })
            alert("Carga masiva finalizada");
            refreshPage();
        }
    }

    render() {
        return (
            <div className="conatiner mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                        <input className="form-control" type="file" id="input" accept=".xls,.xlsx" onChange={this.handleChange} />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" id="button" onClick={this.verExcel}>Visualizar</button>
                    </div>
                    <div className="col-md-12">
                        <pre id="jsondata">
                            {JSON.stringify(this.state.arrayErrores, "", 4)}
                        </pre>
                    </div>
                    <button className="btn btn-primary" id="button" onClick={this.cargaErrores}>Cargar</button>
                </div>
            </div>
        );
    }

}

export default CargaMasiva