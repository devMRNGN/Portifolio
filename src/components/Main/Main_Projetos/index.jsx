import BankImage from '../../../assets/CardProjectImages/bank-project.svg';
import CalculatorImage from '../../../assets/CardProjectImages/calculator-project.svg';
import processControllerImage from '../../../assets/CardProjectImages/process-controller.svg';
import CardProject from './CardProject';
import './index.css';

const cardProject = [
   {
      image: CalculatorImage,
      title: "Calculadora Responsiva",
      description: "Uma calculadora básica responsiva, 100% funcional, possui digitação com teclado, botão de desligar, apagar um caractere e apagar vários.",
      link: "https://github.com/devMRNGN/ResponsiveCalculator"
   },
   {
      image: BankImage,
      title: "Banco Simples",
      description: "Esse projeto foi meu primeiro CRUD, possibilita criar uma conta, transferir dinheiro entre contas, depositar, sacar, checar saldo, etc.",
      link: "https://github.com/devMRNGN/SimpleBank"
   },
   {
      image: processControllerImage,
      title: "Controlador de Processos",
      description: "Esse projeto eu desenvolvi para faculdade, ele basicamente simula um controlador de processos do tipo Round Robin sem prioridade.",
      link: "https://controlador-round-robin-8r2z.vercel.app"
   }
];

const MainProjetos = () => {
   return (
      <div id="projeto-div">
         <h2 id="title-projetos">PROJETOS</h2>
         <div id="card-projects">
            {
               cardProject.map(cardData => (
                  <CardProject key={cardData.title} image={cardData.image} title={cardData.title} description={cardData.description} link={cardData.link}/>
               ))
            }
         </div>
      </div>
   );
};

export default MainProjetos;