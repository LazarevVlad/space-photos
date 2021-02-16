export default function Error(props) {
  const { isShown, text } = props;
  return (
    <div className={`error ${isShown ? 'error_is-shown' : ''}`}>
      <p className="error__text">{text}</p>
    </div>
  )
}