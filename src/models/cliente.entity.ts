import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Clientes', database: 'KentFoods', })
export class Cliente {
  @PrimaryColumn({ name: 'ClienteID', type: 'nchar', length: 5 })
  ClienteID: string;

  @Column({ name: 'Empresa', type: 'nvarchar', length: 40 })
  Empresa: string;

  @Column({ name: 'Contacto', type: 'nvarchar', length: 30 })
  Contacto: string;

  @Column({ name: 'Cargo', type: 'nvarchar', length: 30 })
  Cargo: string;

  @Column({ name: 'Direccion', type: 'nvarchar', length: 60 })
  Direccion: string;

  @Column({ name: 'Ciudad', type: 'nvarchar', length: 15 })
  Ciudad: string;

  @Column({ name: 'CodigoPostal', type: 'nvarchar', length: 10, nullable: true })
  CodigoPostal: string;

  @Column({ name: 'Pais', type: 'nvarchar', length: 15 })
  Pais: string;

  @Column({ name: 'Telefono', type: 'nvarchar', length: 24 })
  Telefono: string;
}