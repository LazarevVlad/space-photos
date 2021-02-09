import NavBar from './NavBar';
import icon1 from '../images/icon1.svg';

function Header() {
  return(
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img
            src={icon1}
            alt="logo"
            className="logo"
          />
        </div>
        <NavBar addClass="header__nav-bar"/>
      </div>
    </header>
  )
}

export default Header;