export type SignInRequest = {
    email: string,
    password: string
}

export type SignUpRequest = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type SignInResponse = {
    token: string,
    refreshToken: string
}

export type SignUpResponse = undefined

export type ErrorResponse = {
    errors?: any[],
    message: string
}