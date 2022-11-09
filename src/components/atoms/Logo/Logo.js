import PropTypes from 'prop-types'

const Logo = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `Logo` }>
        </div>
    )

}


Logo.propTypes = {
    testID: PropTypes.string,
}

export default Logo