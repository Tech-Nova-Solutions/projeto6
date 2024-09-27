import styled from 'styled-components'

export const MusicasStyle = styled.section `
.container-musicas{
    width: 100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: var(--cinza);

}
.container-musicas h1{
    font-size: 2rem;
    color:var(--amarelo);
    text-shadow: 2px 4px 4px var(--roxo),
    2px 4px 4px var(--roxo),
    2px 4px 4px var(--roxo);
    background-color: var(--verde);
    width: 40%;
    height: 50px;
    border-radius: 40px;
    text-align:center;
}

.container-playlist{
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    
}

`