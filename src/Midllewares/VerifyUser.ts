import { NextFunction, Request, Response } from "express";
import ResponseData from "../Types/dto/ResponseData";
import jwt from "jsonwebtoken";
import TokenPayloadDTO from "../Types/dto/TokenPayloadDTO";
import RequestWithUserDTO from "../Types/dto/RequestWithUserDTO";

const VerifyUser = async (req: Request, res: Response, next: NextFunction):Promise<void> => {

    try {
            // @ts-ignore
        const token: string = req.headers?.["authorization"] || "";
        console.log({token: token});
        const decoded: TokenPayloadDTO = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayloadDTO;
        // @ts-ignore
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ error: true, status: 401, message: "Invalid token" });
          } else {
            res.status(500).json({ error: true, status: 500, message: "Internal server error" });
          }
    }
};

export default VerifyUser