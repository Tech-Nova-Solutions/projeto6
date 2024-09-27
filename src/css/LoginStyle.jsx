import styled from 'styled-components'

export const LoginStyle = styled.section `

.container{
    width:100%;
    height: 100vh;
    background-image: url(src/assets/fundo-musica.jpg);
    background-size:cover ;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-login{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--amarelo);
    border-radius: 20px;

}
.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 20px;
}
.titulo-login{
    font-size: 1.5rem;
    text-align: center;
    color: var(--roxo);
    font-weight: 700;
    text-transform: uppercase;
    
}
.login-form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
.input-form{
    outline-color: var(--roxo);
    border-radius: 10px;
    border: none;
    text-align: center;
    color:var(--preto);
}
.btn-login{
    width: 100%;
    display: flex;
    justify-content: center;
}
.btn-login-form{
    width: 40%;
    border: none;
    background-color: var(--roxo);
    color: var(--amarelo);
    border-radius: 20px;
}
.btn-login-form:hover{
    background-color: var(--verde);
    color: var(--roxo);
}

`