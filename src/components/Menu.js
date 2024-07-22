import { Link } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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