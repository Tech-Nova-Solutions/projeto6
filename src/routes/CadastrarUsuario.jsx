import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CadastrarStyle } from '../css/CadastarStyle';


const CadastrarUsuario = () => {

    let { id } = useParams();

    const [usuarios, setUsuarios] = useState({
      id,
      usuario: '',
      senha: ''
    });
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
    };
  
    // Função de validação para verificar campos em branco
    const validarCampos = () => {
      if (!usuarios.usuario || !usuarios.senha) {
        alert('Por favor, preencha todos os campos.'); // Exibe o alerta se houver campos em branco
        return false;
      }
      return true;
    };
  
    let metodo = 'post';
    if (id) {
      metodo = 'put';
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Verificar se os campos estão preenchidos
      if (!validarCampos()) {
        return; // Se os campos estiverem vazios, não prosseguir com o submit
      }else{
  
          // Continuar com o envio se os campos estiverem válidos
      fetch(`http://localhost:5000/usuarios/${id ? id : ``}`, {
          method: metodo,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuarios),
        }).then(() => {
          alert('Cadastro realizado com sucesso!');
          navigate('/login');
        });
  
      }
  
      
    };
  
    useEffect(() => {
      if (id) {
        fetch(`http://localhost:5000/usuarios/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setUsuarios(data);
          });
      }
    }, [id]);


  return (
    <CadastrarStyle>
      <section className="container-cadastro">
        <form onSubmit={handleSubmit}>
          <h2>Cadastrar</h2>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu E-mail"
              value={usuarios.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Senha: </label>
            <input
              type="password"
              name="senha"
              placeholder="Digite uma senha"
              value={usuarios.senha}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Cadastrar
          </button>
        </form>
      </section>
      </CadastrarStyle>
    
  )
}

export default CadastrarUsuario