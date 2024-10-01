import { Request, Response} from 'express';
import SignupDto from '../Types/dto/signupDto';
import AuthService from '../Services/AuthService';
import ResponseData from '../Types/dto/ResponseData';

export const handelLoginRequest = async (req: Request<{}, {}, SignupDto>, res: Response) : Promise<void> => {
    try {
        const resault = await AuthService.login(req.body);
        const token = resault.data?.token; 
        res.cookie('token', token).status(resault.status || 200).json(resault);
      
    } catch (error) {
        console.log(error);
    }
}