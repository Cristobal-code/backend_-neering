import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Producto } from './producto.entity';

@Entity({ name: 'Categorias', database: 'KentFoods', })
export class Categoria {
    @PrimaryColumn({ name: 'CategoriaID', type: 'int' })
    CategoriaID: number;

    @Column({ name: 'Categoria', type: 'nvarchar', length: 15 })
    Categoria: string;

    @Column({ name: 'Descripcion', type: 'ntext', nullable: true })
    Descripcion: string;

    @Column({ name: 'Imagen', type: 'image', nullable: true })
    Imagen: number;

    @OneToMany(() => Producto, producto => producto.categoria, { cascade: true, eager: true })
    productos: Producto[];

}