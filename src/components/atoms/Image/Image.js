import PropTypes from 'prop-types'

const Image = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `Image` }>
        </div>
    )

}


Image.propTypes = {
    testID: PropTypes.string,
}

export default Image