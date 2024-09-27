import {Link} from 'react-router-dom'

const Login=()=>{
    return(
        
        <section className="container">

            <div className="container-login">

                <div className="login">

                    <form className="login-form" >
                        <span className="titulo-login">Login</span>

                        <div className="input">
                            <input type="text" className="input-form" id="usuario"  />
                            <span placeholder="usuario"></span>
                        </div>

                        <div className="input">
                            <input type="password" className="input-form" id="senha"  />
                            <span placeholder="Senha"></span>
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
        
    )
}
export default Login