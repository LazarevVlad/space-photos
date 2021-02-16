export default function Preloader(props) {
  const { isShown } = props;
  return (
    <div className={`preloader ${isShown ? 'preloader_is-shown' : ''}`} />
  )
};