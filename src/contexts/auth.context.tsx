import { createContext, ReactNode, useMemo, useState } from "react";
import { authService } from "../services/auth.service";
import { Authentication, Token } from "../types/auth.context.types";
import { SignInRequest, SignUpRequest } from "../types/auth.service.types";

export const AuthContext = createContext<Authentication | null>(null)

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const {getTokenLocalStorage, setTokenLocalStorage} = authService
    const [token, setToken] = useState<Token>()
    const signIn = async (signInRequest: SignInRequest) => {
        const response = await authService.signIn(signInRequest)
        if (Object.hasOwn(response, "token")) {
            setToken(response as Token)
            setTokenLocalStorage(response as Token)
        }
    }
    const signUp = async (signUpRequest: SignUpRequest) => {
        const response = await authService.signUp(signUpRequest)
        return response === undefined
    }
    const signOut = () => {
        setToken(undefined)
        setTokenLocalStorage(undefined)
    }
    useMemo(() => {
        const storedToken = getTokenLocalStorage()
        storedToken && setToken(storedToken)
    }, [])
    return (
        <AuthContext.Provider value={{token, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )   
}