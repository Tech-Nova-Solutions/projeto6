import styled from 'styled-components'

export const NavStyle = styled.header `

.nav{
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--roxo);
    
}
.nav h1{
    font-size: 1.7rem;
    color: var(--amarelo);
}

.links{
    color:var(--verde);
    text-transform: uppercase;
    font-weight: 700;
     

}
.links:hover{
    font-size: 1.1rem;
    transition: 0.5s;
    color: var(--amarelo);
}

`