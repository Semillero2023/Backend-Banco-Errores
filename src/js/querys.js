import { db } from './initialize.js';
import { collection, addDoc } from "firebase/firestore";

// const errorForm = document.getElementById("error-form");
// const Nombre_Error = document.getElementById("Nombre_Error");
// const Tipo_Error = document.getElementById("Tipo_Error");
// const Codigo_Retorno = document.getElementById("Codigo_Retorno");
// const ID_Mensaje_Error = document.getElementById("ID_Mensaje_Error");
// const Complejidad = document.getElementById("Complejidad");
// const Reportado_Por = document.getElementById("Reportado_Por");
// const Fecha = document.getElementById("Fecha");
// const Resultado_Esperado = document.getElementById("Resultado_Esperado");
// const Resultado_Obtenido = document.getElementById("Resultado_Obtenido");
// const Descripcion_Error = document.getElementById("Descripcion_Error");
// const Solucion = document.getElementById("Solucion");
// const Fuentes = document.getElementById("Fuentes");

const collectionReference = collection(db, "banco")

export const addNewError = async (e) => {
    e.preventDefault();
    const p1 = document.getElementById("Nombre_Error").value;
    const p2 = document.getElementById("Tipo_Error").value;
    const p3 = document.getElementById("Codigo_Retorno").value;
    const p4 = document.getElementById("ID_Mensaje_Error").value;
    const p5 = document.getElementById("Complejidad").value;
    const p6 = document.getElementById("Reportado_Por").value;
    const p7 = document.getElementById("Fecha").value;
    const p8 = document.getElementById("Resultado_Esperado").value;
    const p9 = document.getElementById("Resultado_Obtenido").value;
    const p10 = document.getElementById("Descripcion_Error").value;
    const p11 = document.getElementById("Solucion").value;
    const p12 = document.getElementById("Fuentes").value;

    if (p3 != '') {
        addError(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
        //loadError();
    }

};

async function addError(nombre, tipo, codigo, id, complejidad, alumno, fecha,
    esperado, obtenido, descripcion, solucion, fuentes) {
    try {
        const errorNew = {
            Nombre_Error: nombre,
            Tipo_Error: tipo,
            Codigo_retorno: codigo,
            ID_Mensaje_Error: id,
            Complejidad: complejidad,
            Reportado_Por: alumno,
            Fecha: fecha,
            Resultado_Esperado: esperado,
            Resultado_Obtenido: obtenido,
            Descripcion_Error: descripcion,
            Solucion: solucion,
            Fuentes: fuentes,
            Utilidad: 0
        };

        const response = await insert(errorNew);
        console.log(response);
        console.log("Document written with ID: ", response.id);
    } catch (error) {
        console.error(error);
    }
}

const insert = async (item) => {
    try {
        //const response = await db.collection("banco").add(item);
        const response = await addDoc(collectionReference, item);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}


