import { Genre } from "./category";
import { ResponseModel } from "./responseModel";

export interface GenreResponseModel extends ResponseModel{
    data:Genre[]
}