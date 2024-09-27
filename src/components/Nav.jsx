import { Link } from "react-router-dom"
import { NavStyle } from "../css/NavStyle"
const Nav=()=>{
    return(
        <NavStyle>
        <header className="nav">
            <h1>MUSIC CITY</h1>
            
            <Link to='/'className="links">Home</Link>
            <Link to='/musicas'className="links">Músicas</Link>
            <Link to='/login'className="links">Login</Link>
            
            
        </header>
        </NavStyle>
    )
}
export default Nav