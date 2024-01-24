import './index.css'

const DishCard = props => {
  const {dishDetails, cartItemNo, increaseCart, decreaseCart} = props
  const {
    dishAvailability,
    dishCalories,
    dishCurrency,
    dishDescription,
    dishImage,
    dishName,
    dishPrice,
    nexturl,
    addonCat,
  } = dishDetails
  console.log(typeof addonCat)
  const len = addonCat.length

  const onCilckIncrease = () => {
    increaseCart()
  }

  const onCilckDecrease = () => {
    decreaseCart()
  }

  return (
    <li>
      <h1>{dishName}</h1>
      <p>{`${dishCalories} calories`}</p>
      <p>{dishCurrency}</p>
      <p>{dishPrice}</p>
      <p>{dishDescription}</p>
      <img src={dishImage} alt={dishName} />
      <img src={nexturl} alt={dishName} />
      {dishAvailability ? (
        <div>
          <button type="button" onClick={onCilckDecrease}>
            -
          </button>
          <span>{cartItemNo}</span>
          <button type="button" onClick={onCilckIncrease}>
            +
          </button>
        </div>
      ) : (
        <p>Not available</p>
      )}

      {len >= 1 && <p>Customizations available</p>}
    </li>
  )
}
export default DishCard
