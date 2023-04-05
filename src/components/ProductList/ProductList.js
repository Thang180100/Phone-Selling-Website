import ProductItem from "../ProductItem/ProductItem";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { actDeleteProductsRequest, actFetchProductsRequest } from "../../actions/index";
import { useDispatch, useSelector } from 'react-redux'


function ProductList(props) {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(actFetchProductsRequest())
    }, [])

    const showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={onDelete}
                    />
                )
            })
        }
        return result
    }

    const onDelete = (id) => {
        dispatch(actDeleteProductsRequest(id))
    }

    return (
        <div className='panel panel-primary'>
            <button type='button' className='btn btn-info mt-5 bg-dark'>
                <NavLink to='/addorupdate' className='text-danger'>
                    Thêm Sản Phẩm
                </NavLink>
            </button>
            <div className='panel panel-heading'>
                <h3 className='panel-title mt-5'> Danh Sách Sản Phẩm </h3>
            </div>
            <div className='panel-body'>
                <table className='table table-bordered table-hover text-center'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Giá</th>
                            <th>Tên</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showProducts(products)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;