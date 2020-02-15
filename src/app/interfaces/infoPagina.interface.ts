

export interface InfoPagina {
    correocontacto?: string;
    direccion?: string;
    telefono?: string;
    facebook?: string;
    servicios?: Servicios;
}

export interface Servicios {
    titulo?: string;
    subtitulo?: string;
    descripcion?: string;
    imagen?: string;
}
