import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useCart } from "../store/CartContext"

const Header = () => {
    const { totalItems } = useCart();

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true}>Cart ({totalItems})</Button>
            </nav>
        </header>
    )
}

export default Header