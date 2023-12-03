import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ProductosService } from '../services';
import { ProductoDto } from 'src/interfaces/DTOs';


@Controller('/api/productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) { }

    @Get('/')
    async getProductos() {
        return await this.productosService.getAllProductos();
    }
    @Get('/:proveedorID')
    async getProductosByProveedorID(@Param('proveedorID') proveedorID: number) {
        return await this.productosService.getProductosByProveedorID(proveedorID);
    }
    @Get('/:proveedorName/:categoriaName')
    async getProductosByProveedorNameAndCategoriaName(@Param('proveedorName') proveedorName: string, @Param('categoriaName') categoriaName: string) {
        return await this.productosService.getProductosByProveedorAndCaterogia(proveedorName, categoriaName);
    }
    @Post('/create')
    async createProduct(@Body() createProductDto: ProductoDto) {
        return await this.productosService.createProduct(createProductDto);
    }
    @Put('/update/:productoID')
    async updateProduct(@Param('productoID') productoID: number, @Body() updateProductDto: ProductoDto) {
        return await this.productosService.updateProduct(productoID, updateProductDto);
    }
    @Delete('/delete/:productoID')
    async deleteProduct(@Param('productoID') productoID: number) {
        return await this.productosService.removeProductById(productoID);
    }
}