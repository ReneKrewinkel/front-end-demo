import PropTypes from 'prop-types'
import InfoContent from "../../molecules/InfoContent";

const InfoSection = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `InfoSection` }>
            <InfoContent />
        </div>
    )

}


InfoSection.propTypes = {
    testID: PropTypes.string,
}

export default InfoSection