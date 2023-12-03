import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/models/cliente.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Cliente)
        private readonly clientesRepository: Repository<Cliente>,
    ) { }

    async getAllClientes() {
        return await this.clientesRepository.find();
    }

}
