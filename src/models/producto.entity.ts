import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, } from 'typeorm';
import { Proveedor } from './proveedor.entity';
import { Categoria } from './categoria.entity';


@Entity({ name: 'Productos', database: 'KentFoods', })
export class Producto {
    @PrimaryColumn({ name: 'ProductoID', type: 'int' })
    ProductoID: number;

    @Column({ name: 'Producto', type: 'nvarchar', length: 40 })
    Producto: string;

    @Column({ name: 'ProveedorID', type: 'int' })
    ProveedorID: number;

    @Column({ name: 'CategoriaID', type: 'int' })
    CategoriaID: number;

    @Column({ name: 'CantidadPorUnidad', type: 'nvarchar', length: 20 })
    CantidadPorUnidad: string;

    @Column({ name: 'PrecioUnitario', type: 'money' })
    PrecioUnitario: number;

    @ManyToOne(() => Proveedor, proveedor => proveedor.productos)
    @JoinColumn({ name: 'ProveedorID' })

    proveedor: Proveedor;

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    @JoinColumn({ name: 'CategoriaID', })
    categoria: Categoria;

}