import styled from 'styled-components'

export const CadastrarStyle = styled.section `
        .container-cadastro{
            width: 100%;
            height: 100vh;
            background-image: linear-gradient(to top, var(--amarelo), var(--verde));
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .form{
            background: var(--roxo);
            width: 30%;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px;
        }
        .form h2{
            font-size:1.5rem;
            color:var(--amarelo);

        }
        .form-group input{
            text-align: center;
            border-radius: 10px;
            border: none;
            outline-color: var(--amarelo);
        }
        .form-group{
            color:var(--amarelo);
            font-weight: 300;
        }
        .btn{
            background: var(--amarelo);
            color: var(--roxo);
            font-weight: 600;
            border: none;
            width: 40%;
            height: 30px;
            border-radius: 10px;
            

        }
        .btn:hover{
            background: var(--verde);
        }
`