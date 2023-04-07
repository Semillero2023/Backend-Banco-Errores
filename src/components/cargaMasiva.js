import React from "react";

class CargaMasiva extends React.Component {
    state = {
        selectedFile : null,
        arrayErrores : []
    }

    handleChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    cargaErrores = () => {

        if (this.state.selectedFile) {
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(this.state.selectedFile);
            fileReader.onload = (event) => {
                let data = event.target.result;
                //let workbook = XLSX.read(data, { type: "binary" });
                // workbook.SheetNames.forEach(sheet => {
                //     let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                //     rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
                //     this.setState({arrayErrores:rowObject})
                // });
                console.log(data);
            }
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
                        <button className="btn btn-primary" id="button" onClick={this.cargaErrores}>Carga Masiva</button>
                    </div>
                    <div className="col-md-12">
                        <pre id="jsondata">
                            {this.state.arrayErrores}
                        </pre>
                    </div>
                </div>
            </div>
        );
    }

}

export default CargaMasiva