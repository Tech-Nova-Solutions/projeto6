import { Link } from "react-router-dom"
const Nav=()=>{
    return(
        <header className="nav">
            
            <Link to='/'>Home</Link>
            <Link to='/musicas'>Músicas</Link>
            <Link to='/login'>Login</Link>
            
            
        </header>
    )
}
export default Nav