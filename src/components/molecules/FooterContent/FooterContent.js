import PropTypes from 'prop-types'
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";

const FooterContent = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `FooterContent` }>

            <div className="image">
                <Image />
            </div>

            <div className="content">
                <Heading text={"contact us"} type={"H2"} color={"white"}/>
                <Paragraph type={"white"}/>
            </div>

        </div>
    )

}


FooterContent.propTypes = {
    testID: PropTypes.string,
}

export default FooterContent