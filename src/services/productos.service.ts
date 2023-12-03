import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoResponse } from 'src/interfaces/ProductosResponse';
import { Producto } from 'src/models/producto.entity';
import { Repository } from 'typeorm';
import { dataConversor } from '../utils'
import { ProductoDto } from 'src/interfaces/DTOs';


@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(Producto)
        private readonly productosRepository: Repository<Producto>,
    ) { }

    private async getProductosStandarFormat(): Promise<Producto[]> {
        return await this.productosRepository.find({
            relations: {
                proveedor: true,
                categoria: true,
            }
        });
    }

    async getAllProductos() {
        const productos = await this.getProductosStandarFormat();
        return productos.map(p => dataConversor.convertProductoToResponse(p))
    }

    async getProductosByProveedorID(proveedorID: number): Promise<ProductoResponse[]> {
        const productos = await this.getProductosStandarFormat();
        return productos
            .filter(p => p.proveedor && p.proveedor.ProveedorID == proveedorID)
            .map(p => (dataConversor.convertProductoToResponse(p, true)));
    }
    async getProductosByProveedorAndCaterogia(proveedorName: string, categoriaName: string): Promise<ProductoResponse[]> {
        const productos = await this.getProductosStandarFormat();
        return productos
            .filter(p =>
                p.proveedor &&
                p.proveedor.Proveedor == proveedorName &&
                p.categoria &&
                p.categoria.Categoria == categoriaName
            )
            .map(p => (dataConversor.convertProductoToResponse(p, true)));
    }

    async createProduct(createProductDto: ProductoDto): Promise<ProductoResponse> {
        const newProduct = dataConversor.convertToProductDeepPartial(createProductDto);
        await this.productosRepository.save(newProduct);
        const productoLoaded = await this.productosRepository.findOne({
            where: {
                ProductoID: newProduct.ProductoID,
            },
            relations: {
                proveedor: true,
                categoria: true,
            }
        });
        return dataConversor.convertProductoToResponse(productoLoaded);
    }
    async updateProduct(productoID: number, updateProductDto: ProductoDto): Promise<ProductoResponse> {
        const productoToUpdated = await this.productosRepository.findOne({
            where: {
                ProductoID: productoID,
            },
            relations: {
                proveedor: true,
                categoria: true,
            }
        })
        const updateData = dataConversor.convertToProductDeepPartial(updateProductDto);
        await this.productosRepository.update(productoToUpdated.ProductoID, updateData)

        return dataConversor.convertProductoToResponse(productoToUpdated);
    }

    async removeProductById(productoID: number): Promise<ProductoResponse> {
        const productoToRemoved = await this.productosRepository.findOne({
            where: {
                ProductoID: productoID
            },
            relations: {
                proveedor: true,
                categoria: true,
            }
        })
        await this.productosRepository.delete(productoID)
        return dataConversor.convertProductoToResponse(productoToRemoved);
    }
}
