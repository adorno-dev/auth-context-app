import { SignInRequest, SignUpRequest } from "./auth.service.types"

export type Token = {
    token: string,
    refreshToken: string
}

export type Authentication = {
    token?: Token,
    signIn: (signInRequest: SignInRequest) => Promise<void>,
    signUp: (signUpRequest: SignUpRequest) => Promise<boolean>,
    signOut: () => void
}