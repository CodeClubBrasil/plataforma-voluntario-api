import { Body, Controller, Post } from "@nestjs/common";
import { CreateAdressUseCase } from "../domain/address/use-case/create-adress-use-case";
import { CreateAdressBody } from "../domain/address/dto/create-adress-body";

@Controller('address')
export class AdressController {
    
    constructor(private createAddressUseCase:CreateAdressUseCase){}

    @Post('create')
    async create(@Body() body:CreateAdressBody){
        console.log("GETTING INTO CONTROLLER");
        
        const {zipCode, address, city, state} = body;       
      
        const {adress} = await this.createAddressUseCase.execute(
            {
                zipCode,
            address,
            city,
            state
            }
        );

        console.log("CONTROLER " + adress);
        console.table(adress);
        
        return
    }
}