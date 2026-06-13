import * as readline from 'readline';
import { crearIncidente, listarIncidentes, actualizarEstadoIncidentes, eliminarIncidentes } from './service/logica.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const mostrarMenu = () => {
    console.log('----Menu de Incidentes----');
    console.log('1. Crear incidente');
    console.log('2. Listar incidentes');
    console.log('3. Actualizar el estado de un incidente');
    console.log('4. Eliminar un incidente');
    console.log('5. Salir del menu');
    rl.question('Seleccione una opcion: ', (opcion) => {
        procesarOpcion(opcion.trim());
    });
};
const procesarOpcion = (opcion) => {
    switch (opcion) {
        case '1':
            rl.question('Titulo: ', (titulo) => {
                rl.question('Descripcion: ', (descripcion) => {
                    rl.question('Reportado por: ', (reportadoPor) => {
                        rl.question('Prioridad (alta/media/baja): ', (prioridadInput) => {
                            crearIncidente(titulo, descripcion, reportadoPor, prioridadInput);
                            mostrarMenu();
                        });
                    });
                });
            });
            break;
        case '2':
            listarIncidentes();
            mostrarMenu();
            break;
        case '3':
            rl.question('ID del incidente: ', (idInc) => {
                rl.question('Nuevo estado (abierto/en progreso/resuelto): ', (estadoInput) => {
                    actualizarEstadoIncidentes(Number(idInc), estadoInput);
                    mostrarMenu();
                });
            });
            break;
        case '4':
            rl.question('ID del incidente a eliminar: ', (idInc) => {
                eliminarIncidentes(Number(idInc));
                mostrarMenu();
            });
            break;
        case '5':
            console.log('Saliendo del programa. ¡Hasta luego!');
            rl.close();
            break;
        default:
            console.log('Opcion no válida, por favor intente de nuevo.');
            mostrarMenu();
            break;
    }
};
mostrarMenu();
//# sourceMappingURL=index.js.map