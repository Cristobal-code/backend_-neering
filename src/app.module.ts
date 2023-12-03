import { Module } from '@nestjs/common';
import { ClientesController, ProductosController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Cliente, Producto, Proveedor, Categoria } from './models';
import { ProductosService, ClientesService } from './services';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Cliente, Producto, Proveedor, Categoria],
        synchronize: true,
        autoLoadEntities: true,
        options: {
          trustServerCertificate: true,
        }
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Cliente, Producto, Proveedor, Categoria])
  ],
  controllers: [ClientesController, ProductosController],
  providers: [ClientesService, ProductosService],
})
export class AppModule { }
