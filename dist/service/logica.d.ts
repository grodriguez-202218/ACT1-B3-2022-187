import type { prioridad } from "../types/prioridad.js";
import type { estadoIncidente } from "../types/estado.js";
export interface Incidentes {
    readonly id: number;
    titulo: string;
    descripcion: string;
    reportadoPor: string;
    prioridad: prioridad;
    estado: estadoIncidente;
    fechaCreacion: Date;
}
export declare const crearIncidente: (titulo: string, descripcion: string, reportadoPor: string, prioridad: prioridad) => void;
export declare const listarIncidentes: () => void;
export declare const actualizarEstadoIncidentes: (id: number, nuevoEstado: estadoIncidente) => void;
export declare const eliminarIncidentes: (id: number) => void;
