import type { prioridad } from "../types/prioridad.js";
import type { estadoIncidente } from "../types/estado.js";

export interface Incidentes{
    //readonly: solo recibe lectura, ya que no se puede modificar el id ya creado, osea no se peude cambiar
    readonly id: number,
    titulo: string,
    descripcion: string,
    reportadoPor: string,
    prioridad: prioridad,
    estado: estadoIncidente,
    fechaCreacion: Date
};

const incidentes: Incidentes[] = [];
let contarId = 1;

export const crearIncidente = (titulo: string, descripcion: string, reportadoPor: string, prioridad: prioridad): void => {
    const nuevoIncidente: Incidentes = {
        id: contarId++,
        titulo,
        reportadoPor,
        descripcion,
        prioridad,
        estado: 'abierto',
        fechaCreacion: new Date()
        };
        incidentes.push(nuevoIncidente);
        console.log(`Incidente #${nuevoIncidente.id} creado exitosamente.`);

};

export const listarIncidentes =(): void =>{
    if(incidentes.length === 0){
        console.log('No hay incidentes registrados.');
        return;
    }
    console.log('Lista de Incidentes:');
    incidentes.forEach(incidente => {
        console.log(`[#${incidente.id}] ${incidente.titulo} | ${incidente.estado} | Reportado por: ${incidente.reportadoPor} | Prioridad: ${incidente.prioridad} | Fecha: ${incidente.fechaCreacion.toLocaleString()}`);
    });
}

export const actualizarEstadoIncidentes = (id: number, nuevoEstado: estadoIncidente): void => {
    const incidente = incidentes.find(incidentes => incidentes.id === id);
    if(!incidente){
        console.log(`El incidente con el ID ${id} no se encontró.`);
        return;
    }
    incidente.estado = nuevoEstado;
    console.log(`Incidente #${id}) se ha actualizado a: ${nuevoEstado})`);

};

export const eliminarIncidentes = (id: number): void => {
    const index = incidentes.findIndex(incidente => incidente.id === id);
    if(index === -1){
        console.log(`El incidente del ID ${id} no se ha encontrado.`);
        return;
    }   
    incidentes.splice(index, 1);
    console.log(`Incidente #${id} se ha eliminado correctamente.`);
};
