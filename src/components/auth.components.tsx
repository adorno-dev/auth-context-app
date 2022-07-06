import { ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

export const Authorized = ({children}: {children: ReactNode}) => {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        context?.token === undefined && navigate("/signin")
    }, [context?.token])
    return <>{children}</>
}