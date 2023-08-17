import MinhaFoto from '../../../assets/PortifolioImages/me.png';
import './index.css';

const MainPortifolio = () => {
   return (
      <div id="sub-container">
         <img id="my-image" src={MinhaFoto} alt="Uma foto de perfil minha" title="Esse sou eu!" />
         <div id="text-container">
            <h1 className='h1'>Seja bem-vindo!</h1>
            <h2 className='h2'>Desenvolvedor Fullstack</h2>
            <p className='p'>Eu sou o João Marangoni, atualmente sou estagiário na empresa Beecloud, 
               trabalho na parte de Frontend, porém, já trabalhei com Backend.
               Estou cursando o 2º semestre na faculdade de tecnologias {"(FATEC)"}.
            </p>
         </div>
      </div>
   )
}

export default MainPortifolio;