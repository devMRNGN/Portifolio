import { useState } from 'react';
import carta from '../../../assets/ContateImages/carta.svg';
import iconGithub from '../../../assets/FooterIcons/github-icon.svg';
import iconGmail from '../../../assets/FooterIcons/gmail-icon.svg';
import iconLinkedin from '../../../assets/FooterIcons/linkedin-icon.svg';
import iconSalesforce from '../../../assets/FooterIcons/salesforce-icon.svg';
import './index.css';

const MainContato = () => {
   const [assunto, setAssunto] = useState('');
   const [mensagem, setMensagem] = useState('');
   
   function setarAssunto(e){
      setAssunto(e.target.value);
   }

   function setarMensagem(e){
      setMensagem(e.target.value);
   }

   function sendEmail(){
      if(assunto === '' || mensagem === ''){
         const button = document.getElementById("button-contate-email");
         const inputs = document.querySelectorAll(".input-contate");
         const labels = document.querySelectorAll(".label-contate");
         for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.borderBottom = '2px solid #D22B2B';
            labels[i].style.color = "#D22B2B";
         }
         button.style.color = "#D22B2B";
         setTimeout(() => {
            window.alert("Por favor preencha todos os campos!");
         }, 500);
         setTimeout(() => {
            for(let i = 0; i < inputs.length; i++){
               inputs[i].style.borderBottom = '2px solid #E4E6EB';
               inputs[i].style.borderBottom = "2px solid #E4E6EB;"
               labels[i].style.color = "#E4E6EB";
            }
            button.style.color = "#E4E6EB";
         }, 1500);
         return;
      }
      
      const link = `mailto:devmarangoni@gmail.com?subject=${assunto}&body=${mensagem}`;
      setEmpty();
      window.location.href = link;
   }

   function setEmpty(){
      const inputs = document.querySelectorAll(".input-contate");
      const labels = document.querySelectorAll(".label-contate");
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].value = '';
         labels[i].value = '';
      }
      setAssunto('');
      setMensagem('');
   }

   return (
      <div id="container-contate">
         <span id="title-contate">CONTATE ME</span>
         <div id="container-contate-content">
            <div id="container-campos-email">
               <div className='inputs-labels-contate'>
                  <label className='label-contate' htmlFor="subject">ASSUNTO</label>
                  <input className='input-contate' type="text" name='subject' onChange={setarAssunto} />
               </div>
               <div className='inputs-labels-contate'>
                  <label className='label-contate' htmlFor="content">MENSAGEM</label>
                  <input className='input-contate' type="text" name='content' onChange={setarMensagem} />
               </div>
               <button id="button-contate-email" onClick={sendEmail}>
                  Enviar mensagem
               </button>
               <div id="container-container-icons-contate">
                  <div id="icons-container-contate">
                     <a href="https://www.salesforce.com/trailblazer/devmrngn" target='_blank' rel="noreferrer"><img src={iconSalesforce} alt="Icone Trailhead"/></a>
                     <a href="https://github.com/devMRNGN" target='_blank' rel="noreferrer"><img src={iconGithub} alt="Icone Github"/></a>
                     <a href="https://www.linkedin.com/in/jotamrngn" target='_blank' rel="noreferrer"><img src={iconLinkedin} alt="Icone Linkedin"/></a>
                     <a href="mailto:devmarangoni@gmail.com" target='_blank' rel="noreferrer"><img src={iconGmail} alt="Icone Gmail"/></a>
                  </div>
               </div>
            </div>
            <img id="imagem-carta-contate" src={carta} alt="Um personagem enviando uma carta com aviãozinho" />
         </div>
      </div>
   )
}

export default MainContato;