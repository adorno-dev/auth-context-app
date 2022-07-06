import { useContext } from "react"
import { Link } from "react-router-dom"
import { Authorized } from "../components/auth.components"
import { AuthContext } from "../contexts/auth.context"

export const Index = () => {
    const context = useContext(AuthContext)
    return (
        <Authorized>
            <h2>[RESTRICT AREA]</h2>
            <span>[<Link to="/" onClick={context?.signOut}>Sign Out</Link>]</span>
        </Authorized>
    )
}