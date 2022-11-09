import PropTypes from 'prop-types'
import HeroContent from "../../molecules/HeroContent";

const Hero = (props) => {

    return(
        <div data-testid={ props.testID }
             className={`Hero`}>
           <HeroContent />
        </div>
    )

}



Hero.propTypes = {
    testID: PropTypes.string,
}

export default Hero