import { useEffect, useState } from 'react';
import HeaderMobile from "../../Mobile/HeaderMobile";
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenWidth();

    // Adicione um ouvinte para o evento de redimensionamento da tela
    window.addEventListener('resize', checkScreenWidth);

    // Remova o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
