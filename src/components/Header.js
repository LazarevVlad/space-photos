import logo from '../images/logo.svg';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';

import '../scss/styles/header.scss';

function Header() {
  return(
    <header className="header">
      <div className="header__logo">
        <img
          src={icon1}
          alt="logo"
          className="logo"
        />
      </div>
    </header>
  )
}

export default Header;