import { db } from './initialize.js';
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

const collectionReference = collection(db, "banco")

/**
 * Carga individual de error a través de form, para insertarlo a la DB
 */
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

    if (p3 !== '') {
        addError(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
    } else {
        alert("Campo Codigo_Retorno vacío")
    }

};

async function addError(nombre, tipo, codigo, id, complejidad, alumno, fecha,
    esperado, obtenido, descripcion, solucion, fuentes) {
    try {
        const errorNew = {
            Nombre_Error: nombre,
            Tipo_Error: tipo,
            Codigo_Retorno: codigo,
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

/**
 * Recibe error JSON, para insertarlo a la DB
 */
export const insert = async (newError) => {
    try {
        const response = await addDoc(collectionReference, newError);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Retorna un array con todos los errores de la DB
 */
export const showErrors = async () => {
    try {
        const q = query(collectionReference, orderBy("ID_Mensaje_Error", "asc"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
        // querySnapshot.forEach((doc) => {
        //    //console.log(`${doc.id} => ${doc.data()}`);
        // });
    } catch (error) {
        throw new Error(error);
    }
}

