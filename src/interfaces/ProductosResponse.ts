import { CategoriaResponse } from "./CategoriasResponse";
import { ProveedorResponse } from "./ProveedoresResponse";

export interface ProductoResponse {
    productoID: number;
    producto: string;
    proveedorID: number;
    categoriaID: number;
    cantidadPorUnidad: string;
    precioUnitario: number;
    categoriaName: string;
    proveedorName: string;

    categoria?: CategoriaResponse
    proveedor?: ProveedorResponse
}
