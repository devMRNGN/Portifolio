import MinhaFoto from '../../../assets/PortifolioImages/me.png';
import './index.css';

const MainPortifolio = () => {
   return (
      <div id="sub-container">
         <img id="my-image" src={MinhaFoto} alt="Uma foto de perfil minha" title="Esse sou eu!" />
         <div id="text-container">
            <h1 className='h1'>Seja bem-vindo!</h1>
            <h2 className='h2'>Desenvolvedor Fullstack</h2>
            <p className='p'>Pouco se pode esperar de alguém que só se esforça quando tem a certeza de vir a ser recompensado. 
               O verdadeiro valor das coisas é o esforço e o problema de as adquirir. 
               Ama-se mais o que se conquista com esforço..
            </p>
         </div>
      </div>
   )
}

export default MainPortifolio;