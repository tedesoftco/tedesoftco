export interface Contacto {
    nombres: string;
    apellidos: string;
    telefono?: string;
    email: string;
    observaciones: string;
    aceptoContacto: boolean;
}

export interface Fields {
  NAME?: string;
  LAST_NAME?: string;
  OPENED?: string;
  ASSIGNED_BY_ID?: number;
  TYPE_ID?: string;
  SOURCE_ID?: string;
  PHONE?: PHONE[];
}

export interface PHONE {
  VALUE?: string;
  VALUE_TYPE?: string;
}
