import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../contexts/auth.context"

export const SignIn = () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState("rick.grimes@twd.com")
    const [password, setPassword] = useState("rick1")
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await auth?.signIn({email, password})
    }
    return <>
        <h2>[SIGN IN]</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="Password..." value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <button type="submit">SIGN IN</button>
        </form>
    </>
}