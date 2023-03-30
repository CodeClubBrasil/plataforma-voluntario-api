import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PrismaAdressRepository } from './repository/prisma-address-repository';
import { AdressRepository } from "src/application/domain/address/repository/address";

@Module({
    providers: [PrismaService, {
        provide: AdressRepository,
        useClass: PrismaAdressRepository
    }],
    exports: [
        AdressRepository
    ]
})

export class DatabaseModule { }