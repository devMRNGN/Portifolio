import iconCopyright from '../../assets/FooterIcons/copyright-icon.png';
import iconGithub from '../../assets/FooterIcons/github-icon.svg';
import iconGmail from '../../assets/FooterIcons/gmail-icon.svg';
import iconLinkedin from '../../assets/FooterIcons/linkedin-icon.svg';
import iconSalesforce from '../../assets/FooterIcons/salesforce-icon.svg';
import './index.css';

const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <div id='footer-container'>
         <div id="icons-container-footer">
            <a href="https://www.salesforce.com/trailblazer/devmrngn" target='_blank' rel="noreferrer"><img src={iconSalesforce} alt="Icone Trailhead"/></a>
            <a href="https://github.com/devMRNGN" target='_blank' rel="noreferrer"><img src={iconGithub} alt="Icone Github"/></a>
            <a href="https://www.linkedin.com/in/jotamrngn/" target='_blank' rel="noreferrer"><img src={iconLinkedin} alt="Icone Linkedin"/></a>
            <a href="mailto:devmarangoni@gmail.com" target='_blank' rel="noreferrer"><img src={iconGmail} alt="Icone Gmail"/></a>
         </div>
         <div id="copyright-container-footer">
            <span>Copyright</span>
            <img src={iconCopyright} alt="Icone Copyright" width="25px" />
            <span>{year} - Todos direitos reservados - devmarangoni.com</span>
         </div>
      </div>
   )
}

export default Footer;