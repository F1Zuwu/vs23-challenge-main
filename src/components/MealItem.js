import Button from "./UI/Button"
import { useCart } from "../store/CartContext";

const MealItem = (props) => {
    const { addItem } = useCart();

    const addToCartHandler = () => {
        addItem(props.meal);
        console.log("add to cart")
    };
    const format = (num) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            num,
        )
    }
    return (
        <li>
            <article class="meal-item">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
                <div>
                    <h3>{props.meal.name}</h3>
                    <p class="meal-item-price">{format(props.meal.price)}</p>
                    <p class="meal-item-description">{props.meal.description}</p>
                </div>
                <p class="meal-item-actions">
                    <Button onClick={addToCartHandler} textOnly={false}>Add to Cart</Button>
                </p>
            </article>
        </li>

    )
}

export default MealItem