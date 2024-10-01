import { Request, Response} from 'express';
import SignupDto from '../Types/dto/signupDto';
import UserService from '../Services/UsersService';
import ResponseData from '../Types/dto/ResponseData';
import RequestWithUserDTO from '../Types/dto/RequestWithUserDTO';
export const handelSignupRequest = async (req: Request<{}, {}, SignupDto>, res: Response) : Promise<void> => {
    try {
        const resault = await UserService.signup(req.body); 
        res.status(resault.status || 201).json(resault);
      
    } catch (error) {
        console.log(error);
    }
}

export const handelProfileRequest = async (req: Request, res: Response) : Promise<void> => {
    try {
        const resault = {
            err: false,
            status: 200,
            message: "User profile",
            // @ts-ignore
            data: UserService.getUserById(req.user.id)
        } 
        res.status(200).json(resault);
    } catch (error) {
        console.log(error);
    }
}