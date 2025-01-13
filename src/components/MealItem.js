const MealItem = (props) => {
    console.log(props)
    return (
        <li>
            <article class="meal-item">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
                <div>
                    <h3>{props.meal.name}</h3>
                    <p class="meal-item-price">{props.meal.price}</p>
                    <p class="meal-item-description">{props.meal.description}</p>
                </div>
                <p class="meal-item-actions">
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>

    )
}

export default MealItem