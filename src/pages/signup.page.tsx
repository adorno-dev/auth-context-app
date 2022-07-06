import { FormEvent, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/auth.context"

export const SignUp = () => {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await context?.signUp({username, email, password, confirmPassword})
        console.log(response)
        response && navigate("/signin")
    }
    return <>
        <h2>[SIGN UP]</h2>
        <span>Already have an account? [<Link to="/signin">Sign In</Link>]</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username..." value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <input type="email" placeholder="Email..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="Password..." value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <input type="password" placeholder="Password..." value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
            <button type="submit">SIGN UP</button>
        </form>
    </>
}