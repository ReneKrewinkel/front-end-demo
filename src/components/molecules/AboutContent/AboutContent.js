import PropTypes from 'prop-types'
import Paragraph from "../../atoms/Paragraph";
import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

const AboutContent = (props) => {

    return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `AboutContent` }>
            <div className="content">
                 <Heading text={"about us"} type={"H2"} />
                 <Paragraph />
                 <Paragraph />
            </div>
            <div className="image">
                <Image />
            </div>
        </div>
    )

}


AboutContent.propTypes = {
    testID: PropTypes.string,
}

export default AboutContent