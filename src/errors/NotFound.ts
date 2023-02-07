import { BaseError } from "./BaseErrors";

export class NotFoundError extends BaseError{
    constructor(
        message:"Recurso não encontrado"
    ){
        super(404, message)
    }
}