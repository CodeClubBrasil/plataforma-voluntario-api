import { Adress } from "../address.entity"
import { State } from "../state.enum"


describe("adress", () => {

    it('should be able to create a new adress', () => {
        const adress = new Adress({
            zipCode: '68758965',
            address: 'rua fulana',
            city: 'castanhal',
            state: State.PA
        })

        expect(adress).toBeTruthy()


    })


})