import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('ProductsList', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`ProductsList/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id))
        })
    }
}

export const actAddProducts = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}

export const actAddProductsRequest = (product) => {
    return (dispatch) => {
        return callApi('ProductsList', 'POST', product).then(res => {
            dispatch(actAddProducts(res.data))
        })
    }
}


export const actUpdateProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCTS,
        product
    }
}

export const actUpdateProductsRequest = (product) => { 
    return (dispatch) => {
        return callApi(`ProductsList/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}