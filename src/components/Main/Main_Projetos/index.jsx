import BankImage from '../../../assets/CardProjectImages/bank-project.svg';
import CalculatorImage from '../../../assets/CardProjectImages/calculator-project.svg';
import PresenceImage from '../../../assets/CardProjectImages/presence-project.svg';
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
      image: PresenceImage,
      title: "Lista de Presença",
      description: "Esse projeto eu desenvolvi quando estava começando a aprender a utilizar o React, fazer requisições, etc. Uma lista de presença dinâmica.",
      link: "https://github.com/devMRNGN/REACT_PresenceList"
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