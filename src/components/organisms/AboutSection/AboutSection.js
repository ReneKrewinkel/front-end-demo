import PropTypes from 'prop-types'
import AboutContent from "../../molecules/AboutContent";

const AboutSection = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `AboutSection` }>
            <AboutContent />
        </div>
    )

}


AboutSection.propTypes = {
    testID: PropTypes.string,
}

export default AboutSection