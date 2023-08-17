import PropTypes from 'prop-types';
import './index.css';

const RenderInformation = ({dataInicio, dataFinal, title, description, link, codigo}) => {
   return (
      <div className="container-render-information">
         <span className="dates-to-render">{`${dataInicio} ${dataFinal}`}</span>
         <div className='container-information'>
            <span className='title-information'>{title} - {description}</span>
            {
               (link != '') && (
                  <div className='link-codigo-container'>
                     <span className='link-codigo-information'>Acesse: <a id="render-link" href={link} target='_blank' rel="noreferrer">{link}</a></span>
                     {
                        (codigo != '') && (
                           <span className='link-codigo-information'>Chave: {codigo}</span>
                        )
                     }
                  </div>
               )
            }
         </div>
      </div>
   )
}

export default RenderInformation;

RenderInformation.propTypes = {
   dataInicio: PropTypes.string, 
   dataFinal: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   link: PropTypes.string,
   codigo: PropTypes.string
}