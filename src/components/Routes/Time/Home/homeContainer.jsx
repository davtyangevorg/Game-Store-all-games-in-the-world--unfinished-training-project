import Home from './home.jsx'
import { connect } from 'react-redux'
import { getProductsThunkCreator, getAgainProductsThunkCreator } from '../../../../redux/section-reduser.js'

const mapStateToProps = (state) => {
    return {
        products: state.section.products,
        isLoad: state.section.isLoad,
        count: state.section.count,
        nextHttp: state.section.nextHttp,
        prevHttp: state.section.prevHttp
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (order, platform, date) => {
            dispatch(getProductsThunkCreator(order, platform, date))
        },
        getAgainProducts: (nextHttp) => {
            dispatch(getAgainProductsThunkCreator(nextHttp))
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
export default HomeContainer