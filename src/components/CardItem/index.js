// Write your code here.
import './index.css'

const CardItem = props => {
  const {technologyItems} = props
  const {title, description, imgUrl, className} = technologyItems
  return (
    <li className={`${className} card-item`}>
      <h1 className="tech-title">{title}</h1>
      <p className="tech-text">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
