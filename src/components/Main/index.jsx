import './index.css';
import MainContato from './Main_Contato';
import MainPortifolio from './Main_Portifolio';
import MainProjetos from './Main_Projetos';
import MainSobre from './Main_Sobre';

const Main = () => {
   return (
      <div id="main-div">
         <MainPortifolio/>
         <MainSobre/>
         <MainProjetos/>
         <MainContato/>
      </div>
   )
}

export default Main;
