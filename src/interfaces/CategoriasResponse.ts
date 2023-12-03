import { ProductoResponse } from "./ProductosResponse";

export interface CategoriaResponse {
    categoriaID: number;
    categoriaName: string;
    descripcion: string;
    // imagen: number;

    productos?: ProductoResponse[]
}