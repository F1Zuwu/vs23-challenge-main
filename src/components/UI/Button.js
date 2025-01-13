const Button = (props) => {
    if (props.textOnly) {
        return <button onClick={props.onClick} class="text-button">{props.children}</button>
    } else {
        return <button onClick={props.onClick} class="button">{props.children}</button>
    }
}

export default Button;