import axios, { AxiosError, AxiosResponse } from "axios";
import { Token } from "../types/auth.context.types";
import { SignInRequest, SignInResponse, ErrorResponse, SignUpRequest, SignUpResponse } from "../types/auth.service.types";

export const API = axios.create({
    baseURL: "https://localhost:5000/api/"
})

const signIn = async (signInRequest: SignInRequest) => {
    try {
        return (await API.post("sign-in", signInRequest) as AxiosResponse).data as SignInResponse
    } catch (exception) {
        return (exception as AxiosError).response?.data as ErrorResponse
    }
}

const signUp = async (signUpRequest: SignUpRequest) => {
    try {
        await API.post("sign-up", signUpRequest)
        return undefined as SignUpResponse
    } catch (exception) {
        return (exception as AxiosError).response?.data as ErrorResponse
    }
}

const setTokenLocalStorage = (token: Token | undefined) => {
    token ?
        localStorage.setItem("t", JSON.stringify(token)) :
        localStorage.removeItem("t") 
}

const getTokenLocalStorage = () => {
    const token = localStorage.getItem("t")
    return token ? 
        JSON.parse(token) as Token : undefined
}

export const authService = {
    signIn,
    signUp,
    getTokenLocalStorage,
    setTokenLocalStorage
}