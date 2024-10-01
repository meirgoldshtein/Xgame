import {Request} from "express";
import TokenPayloadDTO from "./TokenPayloadDTO";

export default interface RequestWithUserDTO extends Request {
    user: TokenPayloadDTO
}