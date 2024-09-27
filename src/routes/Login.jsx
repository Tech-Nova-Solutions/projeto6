import {Link, useNavigate} from 'react-router-dom'
import { LoginStyle } from '../css/LoginStyle'
import { useRef, useState, useEffect } from 'react';


const Login=()=>{

    const usuario = useRef();
    const senha = useRef();

  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  function validar(){
    for(let i=0;i<usuarios.length;i++){
      const {usuario:userUsuario, senha: userSenha} = usuarios[i]; //USANDO DESESTRUTURAÇÃO
      if(
        userUsuario === usuario.current.value &&
        userSenha === senha.current.value
      ){
        return true;
      }
    }
    return false;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(validar()){
      let token =
        Math.random().toString(16).substring(2)+
        Math.random().toString(16).substring(2)
        sessionStorage.setItem("usuario", usuario.current.value);
        sessionStorage.setItem("senha", token);
        //CHAMAR PÁGINA LOGADA
        navigate('/')
    }else{
      alert("Usuário/senha inválidos")
    }

  }


  useEffect(()=>{
    fetch("http://localhost:5000/usuarios/")

    .then((res)=>{
      return res.json();
    })

    .then((res)=>{
      setUsuarios(res);
      console.log(res);
    })

},[]);

    return(
        <LoginStyle>
        <section className="container">

            <div className="container-login">

                <div className="login">
                    <span className="titulo-login">Login</span>
                    <form className="login-form" onSubmit={handleSubmit} >
                        

                        <div className="input">
                            <input type="text" className="input-form" id="usuario"  placeholder='Usuário' ref={usuario}/>
                            
                        </div>

                        <div className="input">
                            <input type="password" className="input-form" id="senha" placeholder='Senha' ref={senha}/>
                    
                        </div>

                        <div className="btn-login">
                            <button type="submit" className="btn-login-form">Login</button>
                        </div>

                        <ul className="utilidades">
                            <li>
                                <span className="text1">Esqueceu a senha?</span>
                            </li>

                            <li>
                                <span className="text1">Não tem conta? </span>
                                <Link to="/cadastrar" className="text2">Criar conta</Link>
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