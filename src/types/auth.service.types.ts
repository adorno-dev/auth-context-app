export type SignInRequest = {
    email: string,
    password: string
}

export type SignInResponse = {
    token: string,
    refreshToken: string
}

export type ErrorResponse = {
    errors?: any[],
    message: string
}