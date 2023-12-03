import { CategoriaResponse } from "src/interfaces/CategoriasResponse";
import { ProductoDto } from "src/interfaces/DTOs";
import { ProductoResponse } from "src/interfaces/ProductosResponse";
import { ProveedorResponse } from "src/interfaces/ProveedoresResponse";
import { Categoria, Producto, Proveedor } from "src/models";
import { DeepPartial } from 'typeorm';


export const convertProductoToResponse = (p: Producto, includeProveedor = false, includeCategoria = false): ProductoResponse => {
    const responseObj: ProductoResponse = {
        productoID: p.ProductoID,
        producto: p.Producto,
        proveedorID: p.ProveedorID,
        categoriaID: p.CategoriaID,
        cantidadPorUnidad: p.CantidadPorUnidad,
        precioUnitario: p.PrecioUnitario,
        categoriaName: p.categoria ? p.categoria.Categoria : '',
        proveedorName: p.proveedor ? p.proveedor.Proveedor : '',

        categoria: includeCategoria ? convertCategoriaToResponse(p?.categoria) : undefined,
        proveedor: includeProveedor ? convertProveedorToResponse(p?.proveedor) : undefined,
    };

    return Object.fromEntries(
        Object.entries(responseObj).filter(([_, value]) => value !== undefined)
    ) as ProductoResponse;
}
export const convertCategoriaToResponse = (c?: Categoria,): CategoriaResponse => {
    return {
        categoriaID: c.CategoriaID,
        categoriaName: c.Categoria,
        descripcion: c.Descripcion,
        // imagen: c.Imagen
    }
}
export const convertToProductDeepPartial = (createProductDto?: ProductoDto,): DeepPartial<Producto> => {
    const newProduct: DeepPartial<Producto> = {
        Producto: createProductDto.producto,
        ProveedorID: createProductDto.proveedorID,
        CategoriaID: createProductDto.categoriaID,
        CantidadPorUnidad: createProductDto.cantidadPorUnidad,
        PrecioUnitario: createProductDto.precioUnitario,
        ProductoID: createProductDto.productoID,
    };
    return newProduct;
}
export const convertProveedorToResponse = (p?: Proveedor,): ProveedorResponse => {
    return {
        proveedorID: p.ProveedorID,
        proveedorName: p.Proveedor,
        contacto: p.Contacto,
        cargo: p.Cargo,
        direccion: p.Direccion,
        ciudad: p.Ciudad,
        pais: p.Pais,
        telefono: p.Telefono
    }
}