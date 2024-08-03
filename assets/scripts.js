
// Arreglos de consultas para cada especialidad en el centro médico.
// Cada objeto en el arreglo representa una consulta con detalles como hora, especialista, paciente, rut y previsión.
const consultasRadiologia = [
    { hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
    { hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
    { hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
    { hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
    { hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" }
];

const consultasTraumatologia = [
    { hora: "8:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA" },
    { hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
    { hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" }
];

const consultasDental = [
    { hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
    { hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
    { hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
    { hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE" }
];

// Muestra la primera y última consulta en la lista de consultas para una especialidad específica.
// Actualiza el elemento con el ID dado con información sobre la primera y última atención.
function mostrarPrimeraYUltimaAtencion(consultas, id) {
    const primeraAtencion = consultas[0];
    const ultimaAtencion = consultas[consultas.length - 1];
    document.getElementById(id).innerHTML = `Primera atención: ${primeraAtencion.paciente} - ${primeraAtencion.prevision} | Última atención: ${ultimaAtencion.paciente} - ${ultimaAtencion.prevision}`;
}

// Construye y muestra las filas de la tabla para una especialidad específica.
// Itera sobre el arreglo de consultas y agrega cada consulta como una fila en el tbody de la tabla correspondiente.
function tabla(consultas, id) {
    const tbody = document.querySelector(`#${id} tbody`);
    consultas.forEach(consulta => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${consulta.hora}</td>
            <td>${consulta.especialista}</td>
            <td>${consulta.paciente}</td>
            <td>${consulta.rut}</td>
            <td>${consulta.prevision}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Llama a la función `mostrarPrimeraYUltimaAtencion` para cada especialidad y muestra la información correspondiente.
mostrarPrimeraYUltimaAtencion(consultasRadiologia, "radiologia-info");
mostrarPrimeraYUltimaAtencion(consultasTraumatologia, "traumatologia-info");
mostrarPrimeraYUltimaAtencion(consultasDental, "dental-info");

// Llama a la función `mostrarTabla` para cada especialidad y genera las tablas de consultas correspondientes.
tabla(consultasRadiologia, "radiologia-table");
tabla(consultasTraumatologia, "traumatologia-table");
tabla(consultasDental, "dental-table");
