export default function RoverSpecifications(props) {
  const {img, info} = props;

  return (
    <div className="specifications">
      <div className="specifications__img-block">
        <div className="specifications__img-container">
          <img src={img} alt="" className="specifications__img"/>
        </div>
      </div>
      <ul className="specifications__list">
        <li className="specifications__item">Mass: {info.mass}</li>
        <li className="specifications__item">Size: {info.size}</li>
        <li className="specifications__item">Power: {info.power}</li>
        <li className="specifications__item">Source of power: {info.sourceOfPower}</li>
        <li className="specifications__item">Speed: {info.speed}</li>
        <li className="specifications__item"><div className="specifications__item-container"> <p>Life time:</p> <p>Planned: {info.termOfUse.planned}</p></div> </li>
      </ul>
    </div>
  )
};