;
const incidentes = [];
let contarId = 1;
export const crearIncidente = (titulo, descripcion, reportadoPor, prioridad) => {
    const nuevoIncidente = {
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
export const listarIncidentes = () => {
    if (incidentes.length === 0) {
        console.log('No hay incidentes registrados.');
        return;
    }
    console.log('Lista de Incidentes:');
    incidentes.forEach(incidente => {
        console.log(`[#${incidente.id}] ${incidente.titulo} | ${incidente.estado} | Reportado por: ${incidente.reportadoPor} | Prioridad: ${incidente.prioridad} | Fecha: ${incidente.fechaCreacion.toLocaleString()}`);
    });
};
export const actualizarEstadoIncidentes = (id, nuevoEstado) => {
    const incidente = incidentes.find(incidentes => incidentes.id === id);
    if (!incidente) {
        console.log(`El incidente con el ID ${id} no se encontró.`);
        return;
    }
    incidente.estado = nuevoEstado;
    console.log(`Incidente #${id}) se ha actualizado a: ${nuevoEstado})`);
};
export const eliminarIncidentes = (id) => {
    const index = incidentes.findIndex(incidente => incidente.id === id);
    if (index === -1) {
        console.log(`El incidente del ID ${id} no se ha encontrado.`);
        return;
    }
    incidentes.splice(index, 1);
    console.log(`Incidente #${id} se ha eliminado correctamente.`);
};
//# sourceMappingURL=logica.js.map