import { useEffect, useState } from "react";
import logo from "../../assets/PortifolioImages/logo.png";
import mobileLogo from "../../assets/PortifolioImages/menu-icon-mobile.svg";
import "../../components/Header/HeaderDesktop/index.css";

const HeaderMobile = () => {
  const [buttonSelected, setButtonSelected] = useState(
    "header-button-portifolio"
  );

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updateButtonColor = () => {
    const sections = [
      "sub-container",
      "sobre-container",
      "projeto-div",
      "container-contate",
    ];
    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setButtonSelected(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    updateButtonColor();
    window.addEventListener("scroll", updateButtonColor);
    return () => {
      window.removeEventListener("scroll", updateButtonColor);
    };
  }, []);

  function activeLateralBar() {
    const lateralBar = document.querySelector(".lateral-bar-header");
    if (lateralBar.classList.contains("active-sidebar")) {
      lateralBar.classList.remove("active-sidebar");
    } else {
      lateralBar.classList.add("active-sidebar");
    }
  }

  return (
    <div id="header-mobile-div">
      <div id="header-mobile-container">
        <a id="header-logo-mobile" href="#sub-container">
          <img id="logo-style" src={logo} alt="Uma logo escrito DM" />
        </a>
        <button id="button-header-mobile" onClick={activeLateralBar}>
          <img src={mobileLogo} alt="" />
        </button>
      </div>
      <div className="lateral-bar-header">
        <div id="container-links-header-mobile">
        <a
          id="header-button-portifolio"
          href="#sub-container"
          className={`header-links ${
            buttonSelected === "sub-container" ? "active" : ""
          }`}
          onClick={(e) => handleLinkClick(e, "sub-container")}
          style={{
            backgroundColor:
              buttonSelected === "sub-container"
                ? "#3A3B3C"
                : "hsl(0, 0%, 18.82%)",
            color: buttonSelected === "sub-container" ? "#00fff2" : "#E4E6EB",
          }}
        >
          PORTIFÓLIO
        </a>
        <a
          id="header-button-sobre"
          href="#sobre-container"
          className={`header-links ${
            buttonSelected === "sobre-container" ? "active" : ""
          }`}
          onClick={(e) => handleLinkClick(e, "sobre-container")}
          style={{
            backgroundColor:
              buttonSelected === "sobre-container"
                ? "#3A3B3C"
                : "hsl(0, 0%, 18.82%)",
            color: buttonSelected === "sobre-container" ? "#00fff2" : "#E4E6EB",
          }}
        >
          SOBRE
        </a>
        <a
          id="header-button-projetos"
          href="#projeto-div"
          className={`header-links ${
            buttonSelected === "projeto-div" ? "active" : ""
          }`}
          onClick={(e) => handleLinkClick(e, "projeto-div")}
          style={{
            backgroundColor:
              buttonSelected === "projeto-div"
                ? "#3A3B3C"
                : "hsl(0, 0%, 18.82%)",
            color: buttonSelected === "projeto-div" ? "#00fff2" : "#E4E6EB",
          }}
        >
          PROJETOS
        </a>
        <a
          id="header-button-contato"
          href="#container-contate"
          className={`header-links ${
            buttonSelected === "container-contate" ? "active" : ""
          }`}
          onClick={(e) => handleLinkClick(e, "container-contate")}
          style={{
            backgroundColor:
              buttonSelected === "container-contate"
                ? "#3A3B3C"
                : "hsl(0, 0%, 18.82%)",
            color:
              buttonSelected === "container-contate" ? "#00fff2" : "#E4E6EB",
          }}
        >
          CONTATO
        </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
