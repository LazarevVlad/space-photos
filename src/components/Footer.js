export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">&copy; 2021. Лазарев Владислав</p>
      <ul className="footer__list">
        <li className="footer__item">
          <a href="https://github.com/LazarevVlad" className="footer__link" target="_blank">
            <div className="footer__link-icon footer__link-icon_github"/>
          </a>
        </li>
        <li className="footer__item">
          <a href="" className="footer__link" target="_blank">
            <div className="footer__link-icon footer__link-icon_telegram"/>
          </a>
        </li>
      </ul>
    </div>
  )
};