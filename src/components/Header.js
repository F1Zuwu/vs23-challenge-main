import { useState } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";

const Header = () => {
    const { items } = useContext(CartContext);
    const [modal, setModal] = useState(false);

    const modalHandler = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalCost = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const format = (num) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            num,
        )
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={modalHandler}>
                    Cart ({totalItems})
                </Button>
            </nav>
            <div id="modal">
                <Modal isOpen={modal} closeModal={closeModal}>
                    <h2>Your Cart</h2>
                    {totalItems > 0 ? (
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <p>
                                        {item.name} - {item.quantity}
                                    </p>
                                </li>
                            ))}
                            <h3
                                style={{
                                    textAlign: "right",
                                    marginTop: "20px",
                                    fontWeight: "bold",
                                }}
                            >
                                Total:{format(totalCost)}
                            </h3>
                        </ul>
                    ) : (
                        <p>Cart is empty!</p>
                    )}
                </Modal>
            </div>
        </header>
    );
};

export default Header;