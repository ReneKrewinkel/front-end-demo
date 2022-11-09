import PropTypes from 'prop-types'

const MenuTrigger = (props) => {

    return(
        <div data-testid={ props.testID }
             className={ `MenuTrigger` }>
        </div>
    )

}

MenuTrigger.propTypes = {
    testID: PropTypes.string,
}

export default MenuTrigger