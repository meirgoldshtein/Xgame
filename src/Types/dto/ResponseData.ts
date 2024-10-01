export default interface ResponseData <T>{
    err : boolean;
    status: number;
    message?: string;
    data?: T;
}