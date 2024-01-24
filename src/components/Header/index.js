import './index.css'

const Header = props => {
  const {heading, cartItems} = props
  return (
    <nav className="nav-bar">
      <h1>{heading}</h1>
      <p>My Orders</p>
      <p>{cartItems}</p>
    </nav>
  )
}
export default Header
