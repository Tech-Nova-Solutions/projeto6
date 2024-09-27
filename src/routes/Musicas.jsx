import { MusicasStyle } from "../css/MusicasStyle";

const Musicas = () => {
    return (

      <MusicasStyle>
      <section className="container-musicas">
        <h1>As Playlists mais ouvidas do Brasil</h1>

        <div className="container-playlist">
          <div className="top-brasil">
            <iframe
              style={{ borderRadius: '12px' }} // Correção: style deve ser um objeto JS
              src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMXbN3EUUhlg?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="funk">
          <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTkIwO2HDifB?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                  
          </iframe>
          </div>
          <div className="sertanejo">
          <iframe  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5lAV5ZGu9ik?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className="pagode">
          <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVjNkaVEkL3X?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">

          </iframe>
          </div>
        </div>
       
        
      </section>
      </MusicasStyle>
    );
  };
  
  export default Musicas;
  