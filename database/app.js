import { insert } from "./firestore.js";
import { getUUID } from "./utils.js";

const errorForm = document.getElementById("error-form");
const Nombre_Error = document.getElementById("Nombre_Error");
const Tipo_Error = document.getElementById("Tipo_Error");
const Codigo_Retorno = document.getElementById("Codigo_Retorno");
const ID_Mensaje_Error = document.getElementById("ID_Mensaje_Error");
const Complejidad = document.getElementById("Complejidad");
const Reportado_Por = document.getElementById("Reportado_Por");
const Fecha = document.getElementById("Fecha");
const Resultado_Esperado = document.getElementById("Resultado_Esperado");
const Resultado_Obtenido = document.getElementById("Resultado_Obtenido");
const Descripcion_Error = document.getElementById("Descripcion_Error");
const Solucion = document.getElementById("Solucion");
const Fuentes = document.getElementById("Fuentes");

errorForm.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(Prueba);
    const p1 = Nombre_Error.value;
    const p2 = Tipo_Error.value;
    const p3 = Codigo_Retorno.value;
    const p4 = ID_Mensaje_Error.value;
    const p5 = Complejidad.value;
    const p6 = Reportado_Por.value;
    const p7 = Fecha.value;
    const p8 = Resultado_Esperado.value;
    const p9 = Resultado_Obtenido.value;
    const p10 = Descripcion_Error.value;
    const p11 = Solucion.value;
    const p12 = Fuentes.value;

    if (p1 != '') {
        addError(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
        //errorInput.value = "";
        //loadError();
    }
});


async function addError(nombre, tipo, codigo, id, complejidad, alumno, fecha,
                        esperado, obtenido, descripcion, solucion, fuentes) {
    try {
        const errorNew = {
            id: getUUID(),
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

    } catch (error) {
        console.error(error);
    }
}