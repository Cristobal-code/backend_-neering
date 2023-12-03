import { ProductoResponse } from "./ProductosResponse";

export interface ProveedorResponse {
    proveedorID: number;
    proveedorName: string;
    contacto: string;
    cargo: string;
    direccion: string;
    ciudad: string;
    pais: string;
    telefono: string;

    productos?: ProductoResponse[]
}