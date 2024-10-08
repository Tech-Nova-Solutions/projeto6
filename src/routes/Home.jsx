import { HomeStyle } from "../css/HomeStyle"

const Home=()=>{
    return(

        <HomeStyle>
        <section className="container-home">
        
            <h1>Produtos</h1>
        <main className="container-produtos">
                <section className="produto-item">
                    <img src='src/assets/violao.webp' alt="Produto-1" id="produto" />
                    <div className='texto'>
                        <h3>Produto-1</h3>
                        <p>R$ 100,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src='src/assets/violao.webp' alt="Produto-2" id="produto" />
                    <div className='texto'>
                        <h3>Produto-2</h3>
                        <p>R$ 250,00</p>
                    </div>
                </section>


                <section className="produto-item">
                    <img src='src/assets/violao.webp' alt="Produto-3" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-3</h3>
                        <p>R$ 300,00</p>
                    </div>
                </section>

                <section className="produto-item">
                    <img src='src/assets/violao.webp' alt="Produto-4" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-4</h3>
                        <p>R$ 400,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src='src/assets/violao.webp' alt="Produto-5" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-5</h3>
                        <p>R$ 500,00</p>
                    </div>
                </section>


                <section className="produto-item">
                <img src='src/assets/violao.webp' alt="Produto-6" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-6</h3>
                        <p>R$ 600,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src='src/assets/violao.webp' alt="Produto-7" id="produto"/>
                    <div className="texto">
                        <h3>Produto-7</h3>
                        <p>R$ 700,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src='src/assets/violao.webp' alt="Produto-8" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-8</h3>
                        <p>R$ 800,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src='src/assets/violao.webp' alt="Produto-9" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-9</h3>
                        <p>R$ 750,00</p>
                    </div>
                </section>

                <section className="produto-item">
                <img src='src/assets/violao.webp' alt="Produto-10" id="produto"/>
                    <div className='texto'>
                        <h3>Produto-10</h3>
                        <p>R$ 1000,00</p>
                    </div>
                </section>
        </main>

        </section>
        </HomeStyle>
    )
}
export default Home