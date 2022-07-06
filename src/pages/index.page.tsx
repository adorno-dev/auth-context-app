import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"

export const Index = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        auth?.token === undefined && navigate("/signin") 
    }, [])
    return (
        <h2>[RESTRICT AREA]</h2>
    )
}