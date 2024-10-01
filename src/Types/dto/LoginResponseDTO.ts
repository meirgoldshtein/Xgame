export default interface LoginResponseDTO {
    err: boolean
    status: number
    message?: string
    token: string
}