import PropTypes from 'prop-types'

const Button = (props) => {

    return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Button` }>
            { props.text }
        </div>
    )

}


const exceptionClasses = [
    "closed",
    "open",
    "colored"
]

Button.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    text: PropTypes.string
}

export default Button