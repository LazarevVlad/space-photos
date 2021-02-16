export default function ImagePopup(props) {
  const { isOpen, onClose, url, title } = props;
  return (
    <div className={`popup popup_type_img ${isOpen ? 'popup_is-opened' : ''}` }>
      <div className="popup__overlay" onClick={onClose}/>
      <div className="popup__content popup__content_image">
        <div 
          className="popup__close popup__img_close"
          onClick={onClose}
          />
        <img alt={title} className="popup__img-open" src={url} />
      </div>
    </div>
  )
};