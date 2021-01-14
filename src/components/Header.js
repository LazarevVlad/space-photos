import logo from '../images/logo.svg';
import '../scss/styles/header.scss';

function Header() {
  return(
    <header className="header">
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
    </header>
  )
}

export default Header;