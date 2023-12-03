import { Controller, Get, } from '@nestjs/common';
import { ClientesService, ProductosService } from '../services';

@Controller()
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) { }

  @Get('/api/clientes')
  async getClientes() {
    return await this.clientesService.getAllClientes();
  }

}