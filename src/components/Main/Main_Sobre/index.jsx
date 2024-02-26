import { useState } from 'react';
import Banner from '../../../assets/SobreImages/banner.svg';
import Curriculo from '../../../assets/curriculo.pdf';
import DISPLAYINFOS from '../../../utils/displayInfos';
import Divider from '../../../utils/divider';
import INFOSPESSOAIS from '../../../utils/infoPessoais.js';
import InfoPessoal from './InfoPessoal';
import RenderInformation from './RenderInformation';
import './index.css';

const MainSobre = () => {
   var displayEducacao = DISPLAYINFOS.educacao;
   var displayHabilidades = DISPLAYINFOS.habilidades;
   var displayExperiencias = DISPLAYINFOS.experiencias;
   const [render, setRender] = useState(displayEducacao);
   const [informTitle, setInformTitle] = useState('EDUCAÇÃO');
   const [selectedButton, setSelectedButton] = useState('EDUCAÇÃO');

   function activityButton(event) {
      const buttonLabel = (event.target.innerText).toUpperCase();
      setSelectedButton(buttonLabel);
      setInformTitle(buttonLabel);
      setRender(event.target.id);
      switch(event.target.id){
         case "educacao": 
            setRender(displayEducacao);
         break;
         case "habilidades":
            setRender(displayHabilidades);
         break;
         case "experiencias":
            setRender(displayExperiencias);
         break;
      }
   }
   
   return (
      <div id="sobre-container">
         <div className='title-container'>
            <span id="sobre" className='sobre-title'>SO</span>
            <span id="mim" className='sobre-title'>BRE</span>
         </div>
         <div id="divider-container">
            <div className='divider'></div>
            <span id='divider-center'>OO</span>
            <div className='divider'></div>
         </div>
         <div id="content-container">
            <div id="text-container-sobre">
               <span id="nome-title-sobre">Eu sou o João Marangoni</span>
               <div id="subtitle-container">
                  <span className='destaque-color'>Desenvolvedor</span>
                  <span>de software</span>
                  <span className='destaque-color'>Fullstack</span>
               </div>
               <p id="sobre-description">
                  Eu sou o João Marangoni, atualmente sou Desenvolvedor de software Junior na empresa Beecloud, 
                  trabalho na parte de Fullstack, realizando tarefas tanto de Frontend como de Backend, 
                  minhas principais linguagens são Apex e Javascript. 
                  Estou cursando o 4º semestre na faculdade de tecnologias {"(FATEC)"}.
               </p>
               <Divider/>
               <span className="personal-infos">INFORMAÇÕES PESSOAIS</span>
               <div id="personal-infos-container">
                  <div className='infos-containers'>
                     {
                        INFOSPESSOAIS.infosPessoais1.map((item, index) => (
                           <InfoPessoal label={item.label} text={item.text} key={item.label + index} />
                        ))
                     }
                  </div>
                  <div className='infos-containers'>
                     {
                        INFOSPESSOAIS.infosPessoais2.map((item, index) => (
                           <InfoPessoal label={item.label} text={item.text} key={item.label + index} />
                        ))
                     }
                  </div>
               </div>
               <button id="curriculo-button">
                  <a id="curriculo-link" href={Curriculo} download>BAIXAR CURRÍCULO</a>
               </button>
            </div>
            <img id="content-image" src={Banner} alt="Um menino com vários pensamentos em sua cabeça" />
         </div>
         <Divider/>
         <div className='buttons-about-container'>
            <button
               id="educacao"
               className={`buttons-about buttons-about-static ${
                  selectedButton === 'EDUCAÇÃO' ? 'buttons-about-selected' : ''
               }`}
               onClick={activityButton}
            >
               EDUCAÇÃO
            </button>
            <button
               id="habilidades"
               className={`buttons-about buttons-about-static ${
                  selectedButton === 'HABILIDADES' ? 'buttons-about-selected' : ''
               }`}
               onClick={activityButton}
            >
               HABILIDADES
            </button>
            <button
               id="experiencias"
               className={`buttons-about buttons-about-static ${
                  selectedButton === 'EXPERIÊNCIAS' ? 'buttons-about-selected' : ''
               }`}
               onClick={activityButton}
            >
               EXPERIÊNCIAS
            </button>
         </div>
         <span className="title-render-information">{informTitle}</span>
         <div className='render-informations'>
            {
               render.map((item, index) => (
                  <RenderInformation 
                     dataInicio={item.dataInicio} 
                     dataFinal={item.dataFinal} 
                     title={item.title} 
                     description={item.description}
                     link={item.link}
                     codigo={item.codigo}
                     key={`${index}`}
                  />
               ))
            }
            
         </div>
         <Divider/>
      </div>
   )
}

export default MainSobre;