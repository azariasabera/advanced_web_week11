import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        Menu
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>    
    </div>
  )
}

export default Menu