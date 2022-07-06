import { FormEvent, useState } from "react"

export const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log({email, password})
    }
    return <>
        <h2>[SIGN UP]</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username..." value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <input type="email" placeholder="Email..." value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="Password..." value={password} onChange={(e) => {setPassword(e.target.value)}} />
            <input type="password" placeholder="Password..." value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
            <button type="submit">SIGN UP</button>
        </form>
    </>
}