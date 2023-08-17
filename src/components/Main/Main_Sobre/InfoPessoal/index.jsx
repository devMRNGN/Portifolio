import PropTypes from 'prop-types';
import './index.css';

const InfoPessoal = ({label, text}) => {
   return (
      <div id="infopessoal-container">
         <span id="key-infopessoal">{label}:</span>
         <span id="value-infopessoal">{text}</span>
      </div>
   )
}

export default InfoPessoal;

InfoPessoal.propTypes = {
   label: PropTypes.string,
   text: PropTypes.string,
}