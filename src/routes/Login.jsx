import {Link} from 'react-router-dom'
import { LoginStyle } from '../css/LoginStyle'

const Login=()=>{
    return(
        <LoginStyle>
        <section className="container">

            <div className="container-login">

                <div className="login">
                    <span className="titulo-login">Login</span>
                    <form className="login-form" >
                        

                        <div className="input">
                            <input type="text" className="input-form" id="usuario"  placeholder='Usuário'/>
                            
                        </div>

                        <div className="input">
                            <input type="password" className="input-form" id="senha" placeholder='Senha' />
                    
                        </div>

                        <div className="btn-login">
                            <button type="submit" className="btn-login-form">Login</button>
                        </div>

                        <ul className="utilidades">
                            <li>
                                <span className="text1">Esqueceu a senha?</span>
                            </li>

                            <li>
                                <span className="text1">Criar conta</span>
                                <Link to="/" className="text2">Criar</Link>
                            </li>
                        </ul>

                    </form>

                </div>

            </div>

        </section>
        </LoginStyle>
        
    )
}
export default Login