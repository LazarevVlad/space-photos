import close from '../images/close.svg';

function ImagePopup(props) {
  const { isOpen, onClose, url, title } = props;
  return (
    <div className={`popup popup_type_img ${isOpen ? 'popup_is-opened' : ''}` }>
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content popup__content_image">
        <img
          src={close}
          alt="Close"
          className="popup__close popup__img_close"
          onClick={onClose}
        />
        <img alt={title} className="popup__img-open" src={url} />
      </div>
    </div>
  )
}

export default ImagePopup;