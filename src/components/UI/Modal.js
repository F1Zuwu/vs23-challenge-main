import { useContext } from "react";
import CartContext from "../../store/CartContext";
import "../../index.css";
import Button from "./Button";

const Modal = ({ isOpen, closeModal, children }) => {
    const { resetCart } = useContext(CartContext);

    if (!isOpen) return null;

    const clearCart = () => {
        resetCart();
        closeModal();
    };

    return (
        <dialog className="modal cart" open>
            {children}
            <p className="modal-actions">
                <Button textOnly={true} onClick={closeModal}>Close</Button>
                <Button onClick={clearCart}>Checkout</Button>
            </p>
        </dialog>
    );
};

export default Modal;