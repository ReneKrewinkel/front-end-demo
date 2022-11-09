import PropTypes from 'prop-types'

const Heading = ({ testID, type, text, color = "black" }) => {

    const CustomTag = type?.replace(' ', '')
    return(
        <CustomTag data-testid={ testID }
                   data-object-type={ type ?? ""}
                   className={ `Heading fg-${color}` }>
            { text }
        </CustomTag>
    )

}


const exceptionClasses = [
    "h1",
    "h2",
    "h3",
    "h4"
]

Heading.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Heading