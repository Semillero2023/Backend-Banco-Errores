import { insert } from "./firestore.js";

const errorForm = document.getElementById("error-form");

const Nombre_Error = document.getElementById("Nombre_Error");


errorForm.addEventListener('submit', e => {

    e.preventDefault();

    //console.log(Prueba);

    const text = Nombre_Error.value;


    if (text != '') {

        addError(text);

        errorInput.value = "";

        loadError();

    }

});


async function addError(text) {

    try {

        const errorNew = {

            Nombre_Error: text,

            Codigo_retorno: "",

            Complejidad: "",

            Descripcion_Error: "",

            Fecha: "",

            Fuentes: "",

            ID_Mensaje_Error: "",

            Reportado_Por: "",

            Resultado_Esperado: "",

            Resultado_Obtenido: "",

            Solucion: "",

            Tipo_Error: "",

            Utilidad: 0

        };

        const response = await insert(errorNew);

    } catch (error) {

        console.error(error);

    }

}