import { createContext, ReactNode, useEffect, useState } from "react";
import { authService } from "../services/auth.service";
import { Authentication, Token } from "../types/auth.context.types";
import { SignInRequest } from "../types/auth.service.types";

export const AuthContext = createContext<Authentication | null>(null)

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const {getTokenLocalStorage, setTokenLocalStorage} = authService
    const [token, setToken] = useState<Token>()
    const signIn = async (signInRequest: SignInRequest) => {
        const response = await authService.signIn(signInRequest)
        console.log(response)
        if (Object.hasOwn(response, "token")) {
            setToken(response as Token)
            setTokenLocalStorage(response as Token)
        }
    }
    useEffect(() => {
        // if (token === undefined) {
        //     setToken(undefined)
        //     setTokenLocalStorage(undefined)
        // }
    }, [])
    return (
        <AuthContext.Provider value={{token, signIn}}>
            {children}
        </AuthContext.Provider>
    )   
}