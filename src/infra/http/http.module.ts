import { Module } from "@nestjs/common";
import { DatabaseModule } from "../prisma/database.module";
import { AdressController } from "../../application/controllers/addres.controller";
import { CreateAdressUseCase } from "src/application/domain/address/use-case/create-adress-use-case";

@Module({
    imports: [DatabaseModule],
    controllers:[AdressController],
    providers:[CreateAdressUseCase]
})
export class HttpModule{}
