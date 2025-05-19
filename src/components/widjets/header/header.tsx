import { useState } from "react"
import css from "./style.module.css"
import profil_icon from "../../../assets/icons/Profil_Icon.svg"
import { Link } from "react-router-dom"


type HeaderTypes = {
}

function Header({}:HeaderTypes){


  const [isOpen, setIsOpen] = useState(false)



  const handleChangeView = ()=>{
    setIsOpen(!isOpen)
  }
    return(<>
    <header className={css["header"]}>
        
        {/* Бургер-меню */}
        <div className={css["burger-menu"]} onClick={handleChangeView} id="burger-menu">
          <div className={css["burger-line"]}></div>
          <div className={css["burger-line"]}></div>
          <div className={css["burger-line"]}></div>
        </div>
  
        {/* Иконка профиля */}
        <div className={css["profile-icon"]}>
          <img src={profil_icon} alt="Профиль" />
        </div>
      </header>
  
      {/* < Навигационное меню */}
       <nav className={css["nav-menu"] + " " + (isOpen === true ?  css["active"] : "")} id="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="siners-list">Counter</Link></li>
          <li><Link to="/">Settings</Link></li>
          <li><Link to="/">Support</Link></li>
          <li><Link to="/">Profil</Link></li>
        </ul>
      </nav>
      
      </>)

}
export default Header