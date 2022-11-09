import PropTypes from 'prop-types'
import FooterContent from "../../molecules/FooterContent";

const Footer = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `Footer` }>
           <FooterContent />
        </div>
    )

}


Footer.propTypes = {
    testID: PropTypes.string,
}

export default Footer