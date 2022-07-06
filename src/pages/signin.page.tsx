import { FormEvent, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"

export const SignIn = () => {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await context?.signIn({email, password})
    }
    useEffect(() => {
        context?.token && navigate("/")
    }, [context])
    return <>
        <h2>[SIGN IN]</h2>
        <span>[Don't you have an account? <Link to="/signup">Sign Up</Link>]</span>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="Password..." value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <button type="submit">SIGN IN</button>
        </form>
    </>
}