import PropTypes from 'prop-types'

const Paragraph = (props) => {

    const t = props.text ? props.text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit."
    const c = props.type === "white" ? "fg-white" : "fg-black"

    return(
        <p data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Paragraph main-text-regular-12 ${c}` }>
            { t }
        </p>
    )

}


const exceptionClasses = [
    "black",
    "white"
]

Paragraph.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    text: PropTypes.string
}

export default Paragraph