import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <h1>Menu</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>    
    </div>
  )
}

export default Menu