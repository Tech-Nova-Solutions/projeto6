import styled from 'styled-components'

export const HomeStyle = styled.section `

        .container-home{
            width:100%;
            min-height: 100vh;
            background: var(--cinza);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            
        }
        .container-home h1{
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 800;
            text-shadow:2px 4px 4px  var(--roxo);
            color: var(--verde);
        }
        .container-produtos{
            width: 100%;
            height: 50%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            padding: 20px;
            gap: 30px;
        }
        .produto-item{
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        }

`