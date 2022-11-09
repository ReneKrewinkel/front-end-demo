import PropTypes from 'prop-types'

const HeroImage = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `HeroImage` }>
        </div>
    )

}


HeroImage.propTypes = {
    testID: PropTypes.string,
}

export default HeroImage