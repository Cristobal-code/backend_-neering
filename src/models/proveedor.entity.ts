import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Producto } from './producto.entity';

@Entity({ name: 'Proveedores', database: 'KentFoods', })
export class Proveedor {
    @PrimaryColumn({ name: 'ProveedorID', type: 'int' })
    ProveedorID: number;

    @Column({ name: 'Proveedor', type: 'nvarchar', length: 40 })
    Proveedor: string;

    @Column({ name: 'Contacto', type: 'nvarchar', length: 30 })
    Contacto: string;

    @Column({ name: 'Cargo', type: 'nvarchar', length: 30 })
    Cargo: string;

    @Column({ name: 'Direccion', type: 'nvarchar', length: 60 })
    Direccion: string;

    @Column({ name: 'Ciudad', type: 'nvarchar', length: 15 })
    Ciudad: string;

    @Column({ name: 'Pais', type: 'nvarchar', length: 15 })
    Pais: string;

    @Column({ name: 'Telefono', type: 'nvarchar', length: 24 })
    Telefono: string;

    @OneToMany(() => Producto, producto => producto.proveedor, { cascade: true, eager: true })
    productos: Producto[];


}