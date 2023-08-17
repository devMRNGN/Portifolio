import PropTypes from 'prop-types';
import './index.css';

const CardProject = ({image, title, description, link}) => {
   return (
      <div id="card-div" className='main-projetos-back'>
         <img id="image" src={image} alt={title} className='main-projetos-back' />
         <h3 id="title" className='main-projetos-back'>{title}</h3>
         <p id="description" className='main-projetos-back'>{description}</p>
         <button id="button-code" className='main-projetos-back'><a id="link-code" href={link} rel="noreferrer" target='_blank'>VER CÓDIGO</a></button>
      </div>
   )
}

export default CardProject;

CardProject.propTypes = {
   image: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   link: PropTypes.string
}